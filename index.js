const Discord = require('discord.js')
const fetch = require('node-fetch')
const Canvas = require('canvas')
const { prefix,token } = require('./config.json')
const mapIds = require('./mapIds')
const avatars = require('./avatars')
const client = new Discord.Client()

// start client bot
client.once('ready', () => {
  console.log('Ready!')
})

//TODO: set up command to create groups and watch specific groups or players
// globals
const TIMER_INTERVAL = 1000 * 60 * 5 // 5 minutes
let timer = null
let group = 'Aftermath'

/**
 * An async function that creates a png from the kill data, and sends it as a message.
 * @param {Discord.message} message - discord message object 
 * @param {Object} kill - A kill report object
 */
const createKill = async (message, kill) => {
  console.log('trying to create kill...')
  try {
    // create canvas for kill report
    const { tod, spellName, posX, posY, mapName, mapParentUrl, damage, killerName, victimName } = kill
    const canvas = Canvas.createCanvas(320, 320)
    const ctx = canvas.getContext('2d')
    
    // draw map
    const background = await Canvas.loadImage(mapParentUrl)
    const TOP_OFFSET = 106
    ctx.drawImage(background,0, 0, background.width, background.height, 0, TOP_OFFSET, canvas.width, canvas.height/1.5)
    
    // draw kill text
    const who = `${killerName} kills ${victimName}`
    const what = `with ${spellName}`
    const how = `for ${damage}!`
    const where = `${mapName}`
    const when = `${tod}`
    ctx.font = '20px sans-serif'
    ctx.fillStyle = '#eef0f2'
    ctx.fillText(who, 5, 22)
    ctx.font = '18px sans-serif'
    ctx.fillStyle = '#eec643'
    ctx.fillText(what, 5, 42)
    ctx.fillText(how, 5, 62)
    ctx.font = '18px sans-serif'
    ctx.fillStyle = '#eae0cc'
    ctx.fillText(where, 5, 82)
    ctx.fillText(when, 5, 99)

    // draw kill point
    const LEFT_POSX_OFFSET = 54
    const CENTER_OFFSET = 106
    const GRAPH_TO_MAP_RATIO = -94.34
    const x = Math.floor(LEFT_POSX_OFFSET + CENTER_OFFSET + (posX / GRAPH_TO_MAP_RATIO))
    const y = Math.floor(TOP_OFFSET + CENTER_OFFSET + (posY / GRAPH_TO_MAP_RATIO))
    ctx.beginPath()
    ctx.arc(x , y, 3, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.fillStyle = '#f00'
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = '#fff'
    ctx.stroke()

    // create avatar
    const avatar = avatars.find(e => e.name === killerName)
    const defaultAvatar = 'https://gamepedia.cursecdn.com/wowpedia/7/73/IconSmall_RaidSkull.png?version=c80c37bf17a304b72a94fa0ae7bbfac0'
    const avatarUrl = avatar ? avatar.url : defaultAvatar
    ctx.beginPath()
    ctx.arc(canvas.width - 50, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()
    const playerAvatar = await Canvas.loadImage(avatarUrl)
    ctx.drawImage(playerAvatar, canvas.width - 100, 0, 100, 100)

    // send 
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'killMail.png')
    message.channel.send(attachment)
    console.log('kill created!')
  } catch (error) {
    console.log(error)
  }
}

/**
 * An async function that fetches the last 5 mins of kill data for the group
 * @param {Discord.message} message - discord message object
 */
const fetchKillReport = async (message) => {
  console.log('trying to fetch...')
  try {
    const response = await fetch(`https://classic-kill-api.herokuapp.com/api/kills?group=${group}&range=last5minutes`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    console.log('got a response!')
    // Parse body as json
    const json = await response.json()
    console.log(json)
    if (json.error) {
      console.log(json.error)
    } else if (json.kills && json.kills.length > 0) {
      console.log('found report!')
      // loop through the kills and massage the data for the createKill function
      json.kills.forEach((kill) => {
        const { timeOfDeath, mapId } = kill
        // format the date
        kill.tod = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(timeOfDeath))
        // get the map info
        const map = mapIds.find(e => e.mapId == mapId)
        // kill.mapUrl = map.url
        kill.mapParentUrl = map.parentUrl
        kill.mapName = map.name
        // try to creaet kill
        createKill(message, kill)
      })
    } else {
      // If no json returned
      console.log('no kills found')
    }
  } catch (error) {
    console.log(error)
  }
}

// listen for discord messages
client.on('message', message => {
  // make sure it's not a bot and we have the starting prefix
  if (!message.content.startsWith(prefix) || message.author.bot) return
  console.log(message.content)
  // start fetching kills!
  if(message.content.startsWith(`${prefix}killstart`) && !timer) {
    if(message.channel.id != '701900267649761311') return
    message.channel.send(`Now reporting kills for ${group}...`)
    fetchKillReport(message)
    console.log('starting the timer...')
    timer = client.setInterval(function() {
      fetchKillReport(message)
    }, TIMER_INTERVAL)
  }
  // stop fetching kills
  if(message.content.startsWith(`${prefix}killstop`)){
    client.clearInterval(timer)
    timer = null
  }
  // fun stuff
  if(message.content.startsWith(`${prefix}scooty`)){
    message.channel.send('Misleading, threating, blackmailing, and a plague to the server!')
  }
  if(message.content.startsWith(`${prefix}zugtug`)){
    message.channel.send('Spoiled Avengers End Game')
  }
})

// authenticate with discord
client.login(token)

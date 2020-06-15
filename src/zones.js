
const continents = {
  KA: {
    url: 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-6.jpg?33598',
    lx: 16781.16,
    ty: 12822.32,
    w: 36413.24,
    h: 24501.62
  },
  EK: {
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-3.jpg?33598',
    lx: 16018.01,
    ty: 7384.19,
    w: 35312.76,
    h: 23408.56
  },
  AZ: {
    url: 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-1.jpg?33598',
    lx: 0,
    ty: 0,
    w: 0,
    h: 0
  }
}
const zones = [
  {
    'name': 'Instance',
    'mapId': 0,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-1.jpg?33598'
  },
  {
    'name': 'Azeroth',
    'mapId': 947,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-1.jpg?33598'
  },
  {
    'name': 'Durotar',
    'mapId': 1411,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/14.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Mulgore',
    'mapId': 1412,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/215.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'The Barrens',
    'mapId': 1413,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/17.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Kalimdor',
    'mapId': 1414,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-6.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Eastern Kingdoms',
    'mapId': 1415,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-3.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Alterac Mountains',
    'mapId': 1416,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/36.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Arathi Highlands',
    'mapId': 1417,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/45.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Badlands',
    'mapId': 1418,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/3.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Blasted Lands',
    'mapId': 1419,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/4.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Tirisfal Glades',
    'mapId': 1420,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/85.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Silverpine Forest',
    'mapId': 1421,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/130.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Western Plaguelands',
    'mapId': 1422,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/28.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Eastern Plaguelands',
    'mapId': 1423,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/139.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Hillsbrad Foothills',
    'mapId': 1424,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/267.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'The Hinterlands',
    'mapId': 1425,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/47.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Dun Morogh',
    'mapId': 1426,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Searing Gorge',
    'mapId': 1427,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/51.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Burning Steppes',
    'mapId': 1428,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/46.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Elwynn Forest',
    'mapId': 1429,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/12.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Deadwind Pass',
    'mapId': 1430,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/41.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Duskwood',
    'mapId': 1431,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/10.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Loch Modan',
    'mapId': 1432,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/38.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Redridge Mountains',
    'mapId': 1433,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/44.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Stranglethorn Vale',
    'mapId': 1434,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/33.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Swamp of Sorrows',
    'mapId': 1435,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/8.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Westfall',
    'mapId': 1436,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/40.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Wetlands',
    'mapId': 1437,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/11.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Teldrassil',
    'lx': 3850.60,
    'ty': 11815.19,
    'w': 5162.30,
    'h': 3355.02,
    'mapId': 1438,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/141.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Darkshore',
    'mapId': 1439,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/148.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Ashenvale',
    'lx': 1723.04,
    'ty': 4590.56,
    'w': 6020,
    'h': 3978,
    'mapId': 1440,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/331.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Thousand Needles',
    'mapId': 1441,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/400.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Stonetalon Mountains',
    'mapId': 1442,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/406.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Desolace',
    'mapId': 1443,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/405.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Feralas',
    'mapId': 1444,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/357.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Dustwallow Marsh',
    'mapId': 1445,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/15.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Tanaris',
    'mapId': 1446,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/440.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Azshara',
    'mapId': 1447,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/16.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Felwood',
    'mapId': 1448,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/361.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Un\'Goro Crater',
    'mapId': 1449,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/490.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Moonglade',
    'mapId': 1450,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/493.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Silithus',
    'mapId': 1451,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-6.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Winterspring',
    'mapId': 1452,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/618.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Stormwind City',
    'mapId': 1453,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1519.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Orgrimmar',
    'mapId': 1454,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1637.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Ironforge',
    'mapId': 1455,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1537.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Thunder Bluff',
    'mapId': 1456,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1638.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Darnassus',
    'mapId': 1457,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1657.jpg?33598',
    'continent': 'KA'
  },
  {
    'name': 'Undercity',
    'mapId': 1458,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/1497.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Alterac Valley',
    'mapId': 1459,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/2597.jpg?33598'
  },
  {
    'name': 'Warsong Gulch',
    'mapId': 1460,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/3277.jpg?33598'
  },
  {
    'name': 'Arathi Basin',
    'mapId': 1461,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/3358.jpg?33598'
  },
  {
    'name': 'Eastern Kingdoms',
    'mapId': 1463,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-3.jpg?33598',
    'continent': 'EK'
  },
  {
    'name': 'Kalimdor',
    'mapId': 1464,
    'url': 'https://wow.zamimg.com/images/wow/classic/maps/enus/zoom/-6.jpg?33598',
    'continent': 'KA'
  }
]

module.exports = { continents, zones }
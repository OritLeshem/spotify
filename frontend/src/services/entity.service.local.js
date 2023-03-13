import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY = 'entity'

_createEntitys()

export const entityService = {
  query,
  getById,
  save,
  remove,
  getEmptyEntity,
  getDefaultFilter,
  pop,
  hiphop,
  latin
}

async function query(filterBy = getDefaultFilter()) {
  let entitys = await storageService.query(STORAGE_KEY)
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    entitys = entitys.filter(entity => regex.test(entity.name))
  }
  return entitys
}

function getById(entityId) {
  return storageService.get(STORAGE_KEY, entityId)
}

async function remove(entityId) {
  await storageService.remove(STORAGE_KEY, entityId)
}

async function save(entity) {
  let savedEntity
  if (entity._id) {
    savedEntity = await storageService.put(STORAGE_KEY, entity)
  } else {
    // Later, owner is set by the backend
    // entity.owner = userService.getLoggedinUser()
    savedEntity = await storageService.post(STORAGE_KEY, entity)
  }
  return savedEntity
}

function getEmptyEntity(title = '', price = 0) {
  return { title, price }
}

function getDefaultFilter() {
  return { txt: '' }
}

function _createEntitys() {
  let entitys = utilService.loadFromStorage(STORAGE_KEY)
  if (!entitys || !entitys.length) {
    entitys = [{
      "_id": "5cksxjas89xjsa8xjsa8jxs09",
      "name": "Spears",
      "tags": [
        "Funk",
        "Happy"
      ],
      "createdBy": {
        "_id": "u101",
        "fullname": "Puki Ben David",
        "imgUrl": "http://some-photo/"
      },
      "likedByUsers": ['{minimal-user}', '{minimal-user}'],
      "songs": [
        {
          "id": "Q4VK9_CfOLQ",
          "title": "Spears1",
          "url": "youtube/song.mp4",
          "imgUrl": "https://i.ytimg.com/vi/C-u5WLJ9Yk4/default.jpg",
        },
        {
          "id": "8YzabSdk7ZA",
          "title": "Spears2",
          "url": "youtube/song.mp4",
          "imgUrl": "https://i.ytimg.com/vi/CduA0TULnow/default.jpg",
        },
      ],
    },
    {
      "_id": "5cksxjas89xjsa8xjsa8jxs10",
      "name": "Madona",
      "tags": [
        "Funk",
        "Happy"
      ],
      "createdBy": {
        "_id": "u101",
        "fullname": "Puki Ben David",
        "imgUrl": "http://some-photo/"
      },
      "likedByUsers": ['{minimal-user}', '{minimal-user}'],
      "songs": [
        {
          "id": "GTxPUFWjOlQ",
          "title": "Madona1",
          "url": "youtube/song.mp4",
          "imgUrl": "https://i.ytimg.com/vi/zpzdgmqIHOQ/default.jpg",
        },
        {
          "id": "zpzdgmqIHOQ",
          "title": "Madona2",
          "url": "youtube/song.mp4",
          "imgUrl": "https://i.ytimg.com/vi/EDwb9jOVRtU/default.jpg",
        },
      ],
    }]
    utilService.saveToStorage(STORAGE_KEY, entitys)
  }
}

function _createEntity(title, price) {
  const entity = getEmptyEntity(title, price)
  entity._id = utilService.makeId()
  return entity
}

function hiphop() {
  const hiphop = {
    "_id": "5cksxjas89xjsa8xjsa8jxs30",
    "name": "HIPHOP",
    "tags": [
      "hiphop",
      "Happy"
    ],
    "songs": [{
      "id": "rwYrEEka1mc",
      "name": "Best of Old School Rap Songs",
      "description": "The best of 90's Hip Hop! Strictly Old School Rap Songs from the Eastcoast all the way to the Westcoast. Rap Classics by some of ...",
      "tags": [
        "Hiphop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/rwYrEEka1mc/hqdefault.jpg",
    },
    {
      "id": "D0XUFnkJf8o",
      "name": "🔥 Hot Right Now - Best of 2022",
      "description": "The best Hip Hop and R&B songs of 2022 in the mix! Including the hottest club edits and remixes of the year. The perfect mix for ...",
      "tags": [
        "Hiphop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/D0XUFnkJf8o/hqdefault.jpg",
    },
    {
      "id": "4UZtwZYB55Q",
      "name": "HipHop 2022 🔥 Hip Hop",
      "description": "Hi bro, every day my channel updates a music playlist that synthesizes carefully selected hip-hop songs to bring a good ...",
      "tags": [
        "Hiphop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/4UZtwZYB55Q/hqdefault.jpg",
    },
    {
      "id": "y1XBVJV236A",
      "name": "HIP HOP PARTY MIX",
      "description": "Follow 90'S HIP HOP MIX🏆️ ",
      "tags": [
        "Hiphop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/y1XBVJV236A/hqdefault.jpg",
    },
    {
      "id": "bImx3tpGR5w",
      "name": "Hip Hop Mix 2020",
      "description": "Hip Hop l Mix 2020 The Best of Hip Hop 2020 ",
      "tags": [
        "Hiphop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/bImx3tpGR5w/hqdefault.jpg",
    }
    ]
  }
  return hiphop
}

function pop() {
  const pop = {
    "_id": "5cksxjas89xjsa8xjsa8jxs20",
    "name": "POP",
    "tags": [
      "POP",
      "Happy"
    ],

    "songs": [{
      "_id": "4m1EFMoRFvY",
      "name": "Beyoncé - Single Ladies",
      "description": "Beyoncé's official 'Single Ladies",
      "tags": [
        "Pop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/4m1EFMoRFvY/hqdefault.jpg",
    },
    {
      "_id": "7hPMmzKs62w",
      "name": "Madonna - Bitch I&#39",
      "description": "Bitch I'm Madonna” from 'Rebel Heart",
      "tags": [
        "Pop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/7hPMmzKs62w/hqdefault.jpg",
    },
    {
      "_id": "My2FRPA3Gf8",
      "name": "Miley Cyrus - Wrecking Ball",
      "description": "Miley Cyrus' - 'Wrecking Ball",
      "tags": [
        "Pop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/My2FRPA3Gf8/hqdefault.jpg",
    },
    {
      "_id": "HjBo--1n8lI",
      "name": "Rihanna’s FULL Apple Music Super Bowl LVII Halftime Show",
      "description": "Listen to Rihanna's iconic hits in Spatial Audio on Apple Music: http://apple.co/RihannaSpatialYT ...",
      "tags": [
        "Pop",
        "Happy"
      ],
      "imgUrl": "https://i.ytimg.com/vi/HjBo--1n8lI/hqdefault.jpg",
    },
    ],
  }
  return pop
}

function latin() {
  const latin = {
    "_id": "5cksxjas89xjsa8xjsa8jxs30",
    "name": "LATIN",
    "tags": [
      "hiphop",
      "Happy"
    ],
    "songs": [
      {
        "id": "cKr46JBACIg",
        "name": "Musica 2022 Los Mas Nuevo",
        "description": "Musica 2022 Los Mas Nuevo - Pop Latino 2022 - Mix Canciones Reggaeton 2022! Luis Fonsi, Sebastian Yatra, Nacho, Wisin, ...",
        "tags": [
          "latino",
          "Happy"
        ],
        "imgUrl": "https://i.ytimg.com/vi/cKr46JBACIg/hqdefault_live.jpg",
      },
      {
        "id": "2pXRfMy-aEM",
        "name": "Fiesta Latina Mix 2020",
        "description": "Fiesta Latina Mix 2020 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam Pop Latino Reggaeton.",
        "tags": [
          "latino",
          "Happy"
        ],
        "imgUrl": "https://i.ytimg.com/vi/2pXRfMy-aEM/hqdefault.jpg",
      },
      {
        "id": "kT-wiUv1VmE",
        "name": "Café Latino - Putumayo Presents",
        "description": "Experience Latin café culture with these exceptional singer-songwriters from Mexico City to Buenos Aires.",
        "tags": [
          "latino",
          "Happy"
        ],
        "imgUrl": "https://i.ytimg.com/vi/kT-wiUv1VmE/hqdefault.jpg",
      },
      {
        "id": "pRpeEdMmmQ0",
        "name": "Shakira - Waka Waka (This Time for Africa)",
        "description": "Watch the official music video for Waka Waka (This Time for Africa)",
        "tags": [
          "latino",
          "Happy"
        ],
        "imgUrl": "https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg",
      },
      {
        "id": "4I25nV9hXGA",
        "name": "Shakira, Rauw Alejandro - Te Felicito",
        "description": "Shakira, Rauw Alejandro - Te Felicito: https://SML.lnk.to/TeFelicito Apple Music: https://SML.lnk.to/TeFelicito/applemusic Spotify: ...",
        "tags": [
          "latino",
          "Happy"
        ],
        "imgUrl": "https://i.ytimg.com/vi/4I25nV9hXGA/hqdefault.jpg",
      },
    ]
  }
  return latin
}
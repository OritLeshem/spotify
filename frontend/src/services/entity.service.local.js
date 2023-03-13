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
  getDefaultFilter
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

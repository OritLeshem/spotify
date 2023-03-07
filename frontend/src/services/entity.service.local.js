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
        entitys = entitys.filter(entity => regex.test(entity.title))
    }
    if(filterBy.price) entitys = entitys.filter(entity => entity.price >= filterBy.price)
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
    return { txt: '', price: 0 }
}

function _createEntitys() {
    let entitys = utilService.loadFromStorage(STORAGE_KEY)
    if (!entitys || !entitys.length) {
        entitys = []
        entitys.unshift(_createEntity('dog', 20))
        entitys.unshift(_createEntity('cat', 30))
        utilService.saveToStorage(STORAGE_KEY, entitys)
    }
}

function _createEntity(title, price) {
    const entity = getEmptyEntity(title, price)
    entity._id = utilService.makeId()
    return entity
}


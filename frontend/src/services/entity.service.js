import { httpService } from './http.service'

export const entityService = {
    query,
    getById,
    save,
    remove,
    getEmptyEntity,
    getDefaultFilter,
    getDefaultSort
}

function query(filterBy = getDefaultFilter()) {
    return httpService.get('entity', { params: { filterBy } })
}

function getById(entityId) {
    return httpService.get(`entity/${entityId}`)
}

function remove(entityId) {
    return httpService.delete(`entity/${entityId}`)
}

function save(entity) {
    if (entity._id) {
        return httpService.put(`entity/${entity._id}`, entity)
    } else {
        return httpService.post('entity', entity)
    }
}

function getEmptyEntity(title = '', price = 0) {
    return { title, price }
}

function getDefaultFilter() {
    return { txt: '', price: 0 }
}

function getDefaultSort() {
    return { by: 'name', asc: true }
}



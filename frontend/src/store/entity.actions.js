import { store } from './store'
import { ADD_ENTITY, REMOVE_ENTITY, SET_ENTITYS, UNDO_REMOVE_ENTITY, UPDATE_ENTITY } from './entity.reducer'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { entityService } from '../services/entity.service.local'
// import { entityService } from '../services/entity.service'

// Action Creators:
export function getActionRemoveEntity(entityId) {
    return { type: REMOVE_ENTITY, entityId }
}
export function getActionAddEntity(entity) {
    return { type: ADD_ENTITY, entity }
}
export function getActionUpdateEntity(entity) {
    return { type: UPDATE_ENTITY, entity }
}

export async function loadEntitys(filterBy) {
    try {
        const entitys = await entityService.query(filterBy)
        store.dispatch({ type: SET_ENTITYS, entitys })
    } catch (err) {
        console.log('Cannot load entitys', err)
        throw err
    }
}

export async function removeEntity(entityId) {
    try {
        await entityService.remove(entityId)
        store.dispatch(getActionRemoveEntity(entityId))
    } catch (err) {
        console.log('Cannot remove entity', err)
        throw err
    }
}

export async function addEntity(entity) {
    try {
        const savedEntity = await entityService.save(entity)
        console.log('Added Entity', savedEntity)
        store.dispatch(getActionAddEntity(savedEntity))
        return savedEntity
    } catch (err) {
        console.log('Cannot add entity', err)
        throw err
    }
}

export async function updateEntity(entity) {
    try {
        const savedEntity = await entityService.save(entity)
        console.log('Updated Entity:', savedEntity)
        store.dispatch(getActionUpdateEntity(savedEntity))
        return savedEntity
    } catch (err) {
        console.log('Cannot save entity', err)
        throw err
    }
}

// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export async function onRemoveEntityOptimistic(entityId) {
    store.dispatch({ type: REMOVE_ENTITY, entityId })
    showSuccessMsg('Entity removed')
    try {
        await entityService.remove(entityId)
        console.log('Server Reported - Deleted Succesfully')
    } catch (err) {
        showErrorMsg('Cannot remove entity')
        console.log('Cannot load entitys', err)
        store.dispatch({ type: UNDO_REMOVE_ENTITY, })
    }
}

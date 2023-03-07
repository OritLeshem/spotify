import { entityService } from "../services/entity.service.local"

export const SET_ENTITYS = 'SET_ENTITYS'
export const REMOVE_ENTITY = 'REMOVE_ENTITY'
export const ADD_ENTITY = 'ADD_ENTITY'
export const UPDATE_ENTITY = 'UPDATE_ENTITY'
export const UNDO_REMOVE_ENTITY = 'UNDO_REMOVE_ENTITY'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
    entitys: [],
    entityt: null,
    filterBy: entityService.getDefaultFilter(),
    lastRemovedEntity: null
}

export function entityReducer(state = initialState, action) {
    var newState = state
    var entitys
    switch (action.type) {
        case SET_ENTITYS:
            newState = { ...state, entitys: action.entitys }
            break
        case REMOVE_ENTITY:
            const lastRemovedEntity = state.entitys.find(entity => entity._id === action.entityId)
            entitys = state.entitys.filter(entity => entity._id !== action.entityId)
            newState = { ...state, entitys, lastRemovedEntity }
            break
        case ADD_ENTITY:
            newState = { ...state, entitys: [...state.entitys, action.entity] }
            break
        case UPDATE_ENTITY:
            entitys = state.entitys.map(entity => (entity._id === action.entity._id) ? action.entity : entity)
            newState = { ...state, entitys }
            break
        case UNDO_REMOVE_ENTITY:
            if (state.lastRemovedEntity) {
                newState = { ...state, entitys: [...state.entitys, state.lastRemovedEntity], lastRemovedEntity: null }
            }
            break
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }
        default:
    }
    return newState
}

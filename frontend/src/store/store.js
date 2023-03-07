import { legacy_createStore as createStore, combineReducers } from 'redux'

import { entityReducer } from './entity.reducer'

const rootReducer = combineReducers({
    entityModule: entityReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)

store.subscribe(() => {
    console.log('storeState:\n', store.getState())
})




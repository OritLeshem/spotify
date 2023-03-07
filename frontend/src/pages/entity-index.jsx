import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadEntitys, removeEntity } from '../store/entity.actions'
import { EntityList } from '../cmps/entity-list'
import { SET_FILTER } from '../store/entity.reducer'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { EntityFilter } from '../cmps/entity-filter'

export function EntityIndex() {
    const entitys = useSelector(storeState => storeState.entityModule.entitys)
    const filterBy = useSelector(storeState => storeState.entityModule.filterBy)
    const dispatch = useDispatch()

    useEffect(() => {
        onLoadEntitys(filterBy)
    }, [filterBy])

    async function onLoadEntitys(filterBy) {
        try {
            await loadEntitys(filterBy)
        } catch (err) {
            showErrorMsg('Cannot load entitys', err)
        }
    }

    async function onRemoveEntity(entityId) {
        try {
            await removeEntity(entityId)
            showSuccessMsg('Entity removed')
        } catch (err) {
            showErrorMsg('Cannot remove entity', err)
        }
    }

    async function onEditEntity(entityId) {
        console.log('entityId:', entityId)
    }

    function onSetFilter(filterBy) {
        dispatch({ type: SET_FILTER, filterBy })
    }

    if (!entitys) return
    return <section className="entity-index">
        <EntityFilter onSetFilter={onSetFilter} />
        <EntityList entitys={entitys} onRemoveEntity={onRemoveEntity}
            onEditEntity={onEditEntity} />
    </section>
}
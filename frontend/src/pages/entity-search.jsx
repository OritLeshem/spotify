import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadEntitys, removeEntity } from '../store/entity.actions'
import { EntityList } from '../cmps/entity-list'
import { SET_FILTER } from '../store/entity.reducer'
import { youtubeService } from '../services/youtube.service'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { EntityFilter } from '../cmps/entity-filter'
import { GenreList } from '../cmps/genre-list'

export function EntitySearch() {
    const entitys = useSelector(storeState => storeState.entityModule.entitys)
    const filterBy = useSelector(storeState => storeState.entityModule.filterBy)
    const dispatch = useDispatch()
    const [searchResults, setSearchResults] = useState([])

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

    function onSetFilter(filterBy) {
        console.log("filterBy", filterBy.txt)
        youtubeService.getVideoReasults(filterBy.txt)
            .then(res => setSearchResults(res))
            .then(res => console.log(res))

        dispatch({ type: SET_FILTER, filterBy })
    }

    if (!entitys) return
    return <section className="main-page entity-search">
        <EntityFilter onSetFilter={onSetFilter} />
        {searchResults && searchResults.map(result =>
            <li key={result.id}>{result.title}</li>
        )}
        {/* <EntityList entitys={entitys} onRemoveEntity={onRemoveEntity}
            onEditEntity={onEditEntity} /> */}
        <h2>Browse all</h2>
        <GenreList />
    </section>
} 
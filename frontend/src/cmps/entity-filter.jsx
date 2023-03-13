import { useState } from 'react'

import { entityService } from '../services/entity.service.local'
import { SearchSvg } from './form'

export function EntityFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(entityService.getDefaultFilter())

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="entity-filter">
        <form onSubmit={onSubmitFilter}>
            <input type="text"
                name="txt"
                placeholder="What do you want to listen to?"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
            {/* <button>Search</button> */}
        </form>
        <div className="svg-container">
            <SearchSvg />
        </div>
    </section>
}
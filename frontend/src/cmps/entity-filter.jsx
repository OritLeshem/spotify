import { useState } from 'react'

import { entityService } from '../services/entity.service.local'

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
                placeholder="search by text"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
            <input type="number"
                name="price"
                placeholder="search by price"
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
    </section>
}
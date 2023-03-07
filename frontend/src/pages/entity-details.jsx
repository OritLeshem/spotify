import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { entityService } from '../services/entity.service.local'
import { showErrorMsg } from '../services/event-bus.service'

export function EntityDetails() {
    const [entity, setEntity] = useState(null)
    const { entityId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadEntity()
    }, [entityId])

    async function loadEntity() {
        try {
            const entity = await entityService.getById(entityId)
            setEntity(entity)
        } catch (err) {
            console.log('Had issues in entity details', err)
            showErrorMsg('Cannot load entity')
            navigate('/entity')
        }
    }

    if (!entity) return
    const { title, price } = entity
    return <section className="entity-details">
        <span>{title}</span>
        <span>${price}</span>
    </section>
}
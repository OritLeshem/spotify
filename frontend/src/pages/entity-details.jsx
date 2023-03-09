import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';

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

    function handleSong(songId) {
        console.log(songId);
    }

    if (!entity) return
    const { name, songs } = entity
    return <section className="entity-details">
        <YouTube videoId="GTxPUFWjOlQ" />
        <span>{name}</span>
        <ul>{songs.map(song => <li onClick={() => handleSong(song.id)} key={song.id}>{song.title}</li>)}</ul>
    </section>
}
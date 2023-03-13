import { Link } from 'react-router-dom'

export function EntityPreview({ entity }) {


    const { name } = entity
    return <Link to={`/entity/${entity._id}`} title="details">
        <h2>{name} Playlist</h2>
        {entity && <img src={entity.songs[0].imgUrl} />}
    </Link>
}
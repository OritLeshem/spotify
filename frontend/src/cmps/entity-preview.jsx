import { Link } from 'react-router-dom'
import { GreenBtn } from './form'

export function EntityPreview({ entity }) {


    const { name } = entity
    return <>
        <div className="img-container">
            <img src={entity.songs[0].imgUrl} alt="" />
            <GreenBtn />
        </div>
        <div>
            <span>{name}</span>
            <h5>{name}</h5>
        </div>
    </>
    // <Link to={`/entity/${entity._id}`} title="details">
    //     <h2>{name} Playlist</h2>
    //     {entity && <img src={entity.songs[0].imgUrl} />}
    // </Link>

}


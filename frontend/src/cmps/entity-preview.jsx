import { Link } from 'react-router-dom'
import { GreenBtn } from './form'

export function EntityPreview({ entity }) {

    return <>
        <div className="img-container">
            <img src={entity.imgUrl} alt="" />
            <GreenBtn />
        </div>
        <div>
            <span>{entity.name}</span>
            <h5>{entity.description}</h5>
        </div>
    </>
}


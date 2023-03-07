import { Link } from 'react-router-dom'

export function EntityPreview({ entity }) {

    const { title, price } = entity
    return <>
        <span>{title}</span>
        <span>${price}</span>
        <Link to={`/entity/${entity._id}`} title="details">details</Link>
    </>
}
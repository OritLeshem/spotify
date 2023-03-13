import { EntityPreview } from './entity-preview'

export function EntityList({ entitys, onRemoveEntity, onEditEntity, entityName }) {

    return <ul className="entity-list">
        {/* {{ entityName } && <h2>{entityName}</h2>} */}
        {entitys?.map(entity =>
            <li key={entity.id} className="entity-preview">
                <EntityPreview entity={entity} />
                {/* <button onClick={() => { onRemoveEntity(entity._id) }}
                    className="fa-solid xmark" title="delete"></button>
                <button onClick={() => { onEditEntity(entity._id) }}
                    className="fa-regular pen-to-sgure" title="edit"></button> */}
            </li>
        )}
    </ul>
}
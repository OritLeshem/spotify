import { EntityPreview } from './entity-preview'

export function EntityList({ entitys, onRemoveEntity, onEditEntity }) {

    return <ul className="entity-list">
        {entitys.map(entity =>
            <li key={entity._id} className="entity-preview">
                <EntityPreview entity={entity} />
                <button onClick={() => { onRemoveEntity(entity._id) }}
                    className="fa-solid xmark" title="delete"></button>
                <button onClick={() => { onEditEntity(entity._id) }}
                    className="fa-regular pen-to-sgure" title="edit"></button>
            </li>
        )}
    </ul>
}
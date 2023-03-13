import { EntityPreview } from './entity-preview'

export function EntityList({ entitys }) {

    return <ul className="entity-list">
        {entitys.map(entity =>
            <li key={entity.id} className="entity-preview">
                <EntityPreview entity={entity} />
            </li>
        )}
    </ul>
}
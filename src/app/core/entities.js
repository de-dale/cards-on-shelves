import {
    addIn,
    isItemIdIn,
    removeArrayItem,
    removeArrayItemById,
    update,
    updateArrayItem,
    updateArrayItemById
} from './utils';

export {
    addEntity,
    indexEntity,
    removeEntity,
    updateEntity
};

function addEntity(state, entity, ...parents) {
    return indexEntity(state, entity, ...parents).state;
}

function indexEntity(state, entity, ...parents) {
    const _entity = {
        ...entity,
        id: getEntityId(state, entity)
    };
    const _state = updateParents(state, _entity, parents);
    return {
        entity: _entity,
        state: {
            ..._state,
            nextEntityId: (_entity.id + 1),
            entities: [
                ..._state.entities,
                _entity
            ]
        }
    };
}

function getEntityId(state, entity) {
    return Math.max(state.nextEntityId, entity && entity.id || -1);
}

function updateParents(state, entity, parents) {
    const parentIds = extractParentIds(parents);
    return updateParentByIds(state, entity, parentIds);
}

function updateParentByIds(state, entity, parentIds) {
    return {
        ...state,
        entities: updateArrayItem(state.entities, isItemIdIn(...parentIds), addChild(entity))
    };
}

function extractParentIds(parents) {
    return parents
        .filter(parent => parent != null)
        .map(parent => parent.id);
}

function addChild(entity) {
    return parent => addIn(parent, 'children', entity.id);
}

function removeEntity(state, entity) {
    const _state = {
        ...state,
        entities: removeArrayItemById(state.entities, entity)
    };
    return removeEntityInParents(_state, entity);
}

function removeEntityInParents(state, entity) {
    return {
        ...state,
        entities: updateArrayItem(state.entities,
            isParentOf(entity),
            removeChild(entity))
    };
}

function isParentOf(entity) {
    return parent => parent.children && parent.children.includes(entity.id);
}

function removeChild(entity) {
    return parent => {
        return {
            ...parent,
            children: removeArrayItem(parent.children, entity.id)
        };
    };
}

function updateEntity(state, entity, field, value) {
    return {
        ...state,
        entities: updateArrayItemById(state.entities, entity, entity => update(entity, field, value))
    };
}

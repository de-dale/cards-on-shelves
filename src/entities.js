import { addIn, isIdIn, removeItemById, update, updateArrayItem, updateArrayItemById } from './utils';

export {
    addEntity,
    removeEntity,
    updateEntity,
};

function addEntity(state, entity, ...parentNames) {
    const _entity = createEntity(state, entity);
    const _state = updateParents(state, _entity, parentNames);
    return insertEntity(_state, _entity);
}

function createEntity(state, entity) {
    const entityId = getEntityId(state, entity);
    return {
        ...entity,
        id: entityId
    };
}

function getEntityId(state, entity) {
    return Math.max(state.nextEntityId, entity && entity.id || -1);
}

function insertEntity(state, entity) {
    return {
        ...state,
        nextEntityId: (entity.id + 1),
        entities: [
            ...state.entities,
            entity
        ]
    };
}

function updateParents(state, entity, ...parentNames) {
    const parentIds = extractParentIds(entity, parentNames);
    return updateParentByIds(state, entity, ...parentIds);
}

function updateParentByIds(state, entity, ...parentIds) {
    return {
        ...state,
        entities: updateArrayItem(state.entities, isIdIn(parentIds), addChild(entity))
    };
}

function extractParentIds(obj, ...parents) {
    return parents.map(parent => {
        const parentId = obj[ parent ];
        delete obj[ parent ];
        return parentId;
    });
}

function addChild(entity) {
    return parent => addIn(parent, 'children', entity.id);
}

function removeEntity(state, entity) {
    const _state = {
        ...state,
        entities: removeItemById(state.entities, entity)
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
        parent.children.splice(parent.children.indexOf(entity.id), 1);
        return parent;
    };
}

function updateEntity(state, entity, field, value) {
    return {
        ...state,
        entities: updateArrayItemById(state.entities, entity, entity => update(entity, field, value))
    };
}

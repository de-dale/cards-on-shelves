import { IMPORT_WITH_MAPPER } from './actions';
import { addEntities } from 'entities';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IMPORT_WITH_MAPPER: {
            return importFrom(state, action.input, action.parent, action.mapper);
        }
        default:
            return state;
    }
}

function importFrom(state, input, parent, mapper) {
    const converted = mapper(input, { parent: parent.id }, _nextId(state.nextEntityId));
    return addEntities(state, converted.entities, 'parent');
}

const _nextId = (id) => () => id++;
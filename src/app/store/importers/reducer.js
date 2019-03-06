import { GENERIC_IMPORT } from './actions';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GENERIC_IMPORT: {
            return importFrom(state, action.input, action.parent, action.mapper);
        }
        default:
            return state;
    }
}

function importFrom(state, input, parent, mapper) {
    return mapper(state, input, parent);
}
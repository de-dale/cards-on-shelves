import { ADD_CARD, REMOVE_CARD, UPDATE_CARD } from './actions';
import { addEntity, removeEntity, updateEntity } from 'entities';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return addCard(state, action.card, action.parent);
        case REMOVE_CARD:
            return removeEntity(state, action.card);
        case UPDATE_CARD:
            return updateEntity(state, action.card, action.field, action.value);
        default:
            return state;
    }
}

function addCard(state, card, parent) {
    return addEntity(state, { ...card, type: 'card' }, parent);
}
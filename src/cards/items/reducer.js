import { ADD_CARD_ITEM, REMOVE_CARD_ITEM, UPDATE_CARD_ITEM } from './actions';
import { addEntity, removeEntity, updateEntity } from '../../entities';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD_ITEM:
            return addItem(state, action.item, action.card);
        case REMOVE_CARD_ITEM:
            return removeEntity(state, action.item);
        case UPDATE_CARD_ITEM:
            return updateEntity(state, action.item, action.field, action.value);
        default:
            return state;
    }
}

function addItem(state, item, card) {
    return addEntity(state, { ...item, card: card.id }, 'card');
}


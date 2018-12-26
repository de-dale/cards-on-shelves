import { ADD_CARD, IMPORT_CARDS, REMOVE_CARD, UPDATE_CARD } from './actions';
import { addEntity, removeEntity, updateEntity, } from '../entities';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return addCard(state, action.card);
        case REMOVE_CARD:
            return removeEntity(state, action.card);
        case UPDATE_CARD: {
            return updateEntity(state, action.card, action.field, action.value);
        }
        case IMPORT_CARDS:
            // TODO: Should use Redux-Saga or another tool for handling async
            // const reader = new FileReader();
            // reader.onload = function (event) {
            //     try {
            //         console.log(event);
            //         const cards = JSON.parse(event.target.result);
            //         Array.from(cards).forEach(card => dispatch(addCard(card)));
            //     } catch (e) {
            //         throw e;
            //     }
            // };
            // reader.onerror = function () {
            //     throw new Error('Cannot import file');
            // };
            // Array.from(action.files).forEach(file => reader.readAsText(file, 'UTF-8'));
            return state;
        default:
            return state;
    }
}

function addCard(state, card) {
    return addEntity(state, { ...card, type: 'card' }, 'codex');
}



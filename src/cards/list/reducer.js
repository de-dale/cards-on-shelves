import { ADD_CARD, IMPORT_CARDS, REMOVE_CARD, UPDATE_CARD } from './actions';
import items from '../items/reducer';
import { update, when } from '../../utils';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return addCard(state, action.card);
        case REMOVE_CARD:
            return removeCard(state, action.card);
        case UPDATE_CARD: {
            return updateCard(state, action.card, action.field, action.value);
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
            return items(state, action);
    }
}

let nextCardId = 1; // TODO : à stocker dans le state, ou à un autre endroit, indépendant du runtime
function getCardId(card) {
    return (card.id || nextCardId++);
}

function addCard(state, card) {
    return [
        ...state,
        { ...card, id: getCardId(card) }
    ];
}

function removeCard(state, expected) {
    return state.filter(item => when(item, expected).haveDifferent('id'));
}

function updateCard(state, expectedCard, field, value) {
    return state.map(card =>
        (when(card, expectedCard).haveSame('id'))
            ? update(card, field, value)
            : card
    );
}


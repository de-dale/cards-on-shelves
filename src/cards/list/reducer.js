import { ADD_CARD, IMPORT_CARDS, REMOVE_CARD, UPDATE_CARD } from './actions';
import items from '../items/reducer';
import { update, when } from '../../utils';

const initialState = {
    nextCardId: 1,
    cards: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: {
            let cardId = getCardId(state, action);
            return {
                ...state,
                nextCardId: (cardId + 1),
                cards: addCard(state.cards, action.card, cardId)
            };
        }
        case REMOVE_CARD:
            return {
                ...state,
                cards: removeCard(state.cards, action.card)
            };
        case UPDATE_CARD: {
            return {
                ...state,
                cards: updateCard(state.cards, action.card, action.field, action.value)
            };
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

function getCardId(cards, action) {
    return Math.max(cards.nextCardId, action.card.id || -1);
}

function addCard(cards, card, nextCardId) {
    return [
        ...cards,
        { ...card, id: nextCardId }
    ];
}

function removeCard(cards, expected) {
    return cards.filter(item => when(item, expected).haveDifferent('id'));
}

function updateCard(cards, expectedCard, field, value) {
    return cards.map(card =>
        (when(card, expectedCard).haveSame('id'))
            ? update(card, field, value)
            : card
    );
}


import { ADD_CARD, IMPORT_CARDS, REMOVE_CARD, UPDATE_CARD } from './actions';
import items, * as itemsMore from './items/reducer';
import { removeByItemId, update, updateArrayByItemId } from '../utils';

const initialState = {
    nextCardId: 1,
    nextCardItemId: 1,
    cards: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: {
            return addCard(state, action.card);
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

function addCard(state, card) {
    const cardId = getCardId(state, card);
    const newCard = { ...card, id: cardId, content: [] };
    state = insertCardWithoutItems(state, newCard);
    state = addCardItems(state, newCard, card.content);
    return state;
}

function insertCardWithoutItems(state, card) {
    return {
        ...state,
        nextCardId: (card.id + 1),
        cards: [
            ...state.cards,
            card
        ]
    };
}

function addCardItems(state, card, items = []) {
    items.forEach(item => {
        state = itemsMore.addItemToCard(state, card, item);
    });
    return state;
}

function getCardId(state, card) {
    return Math.max(state.nextCardId, card && card.id || -1);
}

function removeCard(cards, expected) {
    return removeByItemId(cards, expected);
}

function updateCard(cards, expectedCard, field, value) {
    return updateArrayByItemId(cards, expectedCard, card => update(card, field, value));
}


import { ADD_CARD_ITEM, REMOVE_CARD_ITEM, UPDATE_CARD_ITEM } from './actions';
import { removeByItemId, update, updateArrayByItemId } from '../../utils';

const initialState = {
    nextCardItemId: 1,
    cards: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD_ITEM: {
            const nextCardItemId = getCardItemId(action, state);
            return {
                ...state,
                nextCardItemId: nextCardItemId + 1,
                cards: addCardItem(state.cards, action.card, action.item, nextCardItemId)
            };
        }
        case REMOVE_CARD_ITEM:
            return {
                ...state,
                cards: removeCardItem(state.cards, action.card, action.item)
            };
        case UPDATE_CARD_ITEM:
            return {
                ...state,
                cards: updateCardItem(state.cards, action.card, action.item, action.field, action.value)
            };
        default:
            return state;
    }
}

function updateCard(cards = [], card, updateCardContent) {
    return updateArrayByItemId(cards, card, (actual) => {
        return {
            ...actual,
            content: updateCardContent(actual.content)
        };
    });
}

function getCardItemId(action, state) {
    return Math.max(state.nextCardItemId || initialState.nextCardItemId, action.item.id || -1);
}

function addCardItem(cards, card, item, cardItemId) {
    return updateCard(cards, card, (items) => addItem(items, item, cardItemId));
}

function addItem(cardContent, item, cardItemId) {
    return [
        ...cardContent,
        {
            ...item,
            id: cardItemId
        }
    ];
}

function removeCardItem(cards, card, item) {
    return updateCard(cards, card, (items) => removeByItemId(items, item));
}

function updateCardItem(cards, card, item, field, value) {
    return updateCard(cards, card, (items) => updateItem(items, item, field, value));
}

function updateItem(cardContent, item, field, value) {
    return updateArrayByItemId(cardContent, item, (actual) => update(actual, field, value));
}
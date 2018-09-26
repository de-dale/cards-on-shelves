import { ADD_CARD_ITEM, REMOVE_CARD_ITEM, UPDATE_CARD_ITEM } from './actions';
import { update, when } from '../../utils';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD_ITEM:
            return findCardThen(state, action.card, (items) => addItem(items, action.item));
        case REMOVE_CARD_ITEM:
            return findCardThen(state, action.card, (items) => removeItem(items, action.item));
        case UPDATE_CARD_ITEM:
            return findCardThen(state, action.card, (items) => updateItem(items, action.item, action.field, action.value));
        default:
            return state;
    }
}

function doNothing(card) {
    return card;
}

function findCardThen(state, card, updateCardContent) {
    return state.map(actualCard =>
        (when(actualCard, card).haveSame('id'))
            ? { ...actualCard, content: updateCardContent(actualCard.content) }
            : doNothing(actualCard)
    );
}

let nextCardItemId = 1; // TODO : à stocker dans le state, ou à un autre endroit, indépendant du runtime
function addItem(content = [], item) {
    return [
        ...content,
        {
            ...item,
            id: (item.id || nextCardItemId++)
        }
    ];
}

function removeItem(content, item) {
    return content.filter(actual => when(actual, item).haveDifferent('id'));
}

function updateItem(content, item, field, value) {
    return content.map(actual => (when(actual, item).haveSame('id'))
        ? update(actual, field, value)
        : actual
    );
}
import {ADD_CARD_ITEM} from './actions';

export default function (state = [], action) {
    switch (action.type) {
    case ADD_CARD_ITEM:
        return state.map(card =>
            (card.id === action.card.id)
                ? {...card, items: [...card.items, action.item] }
                : card
        );
    default:
        return state;
    }
}
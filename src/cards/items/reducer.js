import {ADD_CARD_ITEM, UPDATE_CARD_ITEM} from './actions';

export default function (state = [], action) {
    switch (action.type) {
    case ADD_CARD_ITEM:
        return state.map(card =>
            (card.id === action.card.id)
                ? {...card, items: [...card.items, action.item]}
                : card
        );
    case UPDATE_CARD_ITEM:
        return state.map(card =>
            (card.id === action.key.card.id)
                ? {
                    ...card, items: card.items.map(item =>
                        (item.id === action.key.item.id)
                            ? {...item, [action.field]: action.value}
                            : item
                    )
                }
                : card
        );
    default:
        return state;
}
}
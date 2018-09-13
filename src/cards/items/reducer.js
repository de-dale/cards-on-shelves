import {ADD_CARD_ITEM, REMOVE_CARD_ITEM, UPDATE_CARD_ITEM} from './actions';

export default function (state = [], action) {
    switch (action.type) {
    case ADD_CARD_ITEM:
        return state.map(card =>
            (card.id === action.card.id)
                ? {
                    ...card,
                    content: [...(card.content || []), action.item]
                }
                : card
        );
    case REMOVE_CARD_ITEM:
        return state.map(card =>
            (card.id === action.card.id)
                ? {
                    ...card,
                    content: card.content.filter(item => item.id !== action.item.id)
                }
                : card
        );
    case UPDATE_CARD_ITEM:
        return state.map(card =>
            (card.id === action.card.id)
                ? {
                    ...card,
                    content: card.content.map(item =>
                        (item.id === action.item.id)
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
import {ADD_CARD, log} from './actions';

export const initialState = {
    name: 'Nouveau Codex',
    cards: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case ADD_CARD:
        return {
            ...state,
            cards: [
                ...state.cards, action.card
            ]
        };
    default:
        return state;
    }
}

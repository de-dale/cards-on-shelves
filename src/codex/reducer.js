import {ADD_CARD, SAVE_CODEX} from './actions';
import FileSaver from 'file-saver';

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
    case SAVE_CODEX:
        const codex = action.codex;
        const blob = new Blob([JSON.stringify(codex.cards)], {type: 'text/json;charset=utf-8'});
        FileSaver.saveAs(blob, codex.name + '.json');
        return state;
    default:
        return state;
    }
}

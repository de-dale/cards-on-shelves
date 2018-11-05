import { SAVE_CODEX } from './actions';
import FileSaver from 'file-saver';

const initialState = {
    name: 'Nouveau Codex',
    cards: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_CODEX: {
            saveCodex(action.codex);
            return state;
        }
        default:
            return state;
    }
}

function saveCodex(codex) {
    const blob = new Blob([ JSON.stringify(codex.cards) ], { type: 'text/json;charset=utf-8' });
    FileSaver.saveAs(blob, codex.name + '.json');
}

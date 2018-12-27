import { ADD_CODEX, SAVE_ALL, SAVE_CODEX } from './actions';
import FileSaver from 'file-saver';
import { findByItemId } from '../utils';
import { addEntity } from '../entities';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CODEX: {
            return addCodex(state, action.codex);
        }
        case SAVE_CODEX: {
            const codex = findByItemId(state.entities, action.codex);
            saveCodex(codex);
            return state;
        }
        case SAVE_ALL: {
            save(state, 'export_all');
            return state;
        }
        default:
            return state;
    }
}

function save(content, name) {
    const blob = new Blob([JSON.stringify(content)], { type: 'text/json;charset=utf-8' });
    FileSaver.saveAs(blob, name + '.json');
}

function saveCodex(codex) {
    save(codex, codex.name);
}

function addCodex(state, codex) {
    return addEntity(state, { ...codex, type: 'codex' });
}
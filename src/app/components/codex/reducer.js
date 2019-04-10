import { ADD_CODEX, SAVE_ALL, SAVE_CODEX } from './actions';
import { addEntity } from 'entities';
import { findById, isItemIdIn } from 'utils';
import saveFile from './filesave';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CODEX:
            return addCodex(state, action.codex);
        case SAVE_CODEX: {
            let codex = findById(state.entities, action.codex.id);
            let ids = findAll(state.entities, [ codex.id ]);
            saveFile(codex.name + '.json', {
                version: state.version,
                entities: state.entities.filter(isItemIdIn(...ids))
            });
            return state;
        }
        case SAVE_ALL: {
            saveFile('export_all.json', state);
            return state;
        }
        default:
            return state;
    }
}

function extractIds(item) {
    return [
        item.id,
        ...(item.children || [])
    ];
}

function findAll(entities, ids) {
    const _ids = entities
        .filter(isItemIdIn(...ids))
        .map(item => extractIds(item))
        .flat();
    return (ids.length !== _ids.length)
        ? findAll(entities, _ids)
        : ids;
}

function addCodex(state, codex) {
    return addEntity(state, { ...codex, type: 'codex' });
}
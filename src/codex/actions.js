import { makeActionCreator } from '../utils';

const ADD_CODEX = 'ADD_CODEX';
const SAVE_CODEX = 'SAVE_CODEX';
const SAVE_ALL = 'SAVE_ALL';

const addCodex = makeActionCreator(ADD_CODEX, 'codex');
const saveCodex = makeActionCreator(SAVE_CODEX, 'codex');
const saveAll = makeActionCreator(SAVE_ALL);

export {
    ADD_CODEX, addCodex,
    SAVE_CODEX, saveCodex,
    SAVE_ALL, saveAll
};
import {makeActionCreator} from '../utils';

export const SAVE_CODEX = 'SAVE_CODEX';

export const saveCodex = makeActionCreator(SAVE_CODEX, 'codex');

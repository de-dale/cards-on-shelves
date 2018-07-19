import {makeActionCreator} from '../../utils';

export const TOGGLE_EDITION = 'TOGGLE_EDITION';

export const toggleEdition = makeActionCreator(TOGGLE_EDITION, 'card');
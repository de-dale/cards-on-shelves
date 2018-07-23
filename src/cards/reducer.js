import {combineReducers} from 'redux';

import editor from './creation/reducer';
import list from './list/reducer';

export default combineReducers({ editor, list });
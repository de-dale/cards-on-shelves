import {combineReducers} from 'redux';

import editor from './creation/reducer';
import list from './list/reducer';
import toolbar from './toolbar/reducer';

export default combineReducers({ editor, list, toolbar });
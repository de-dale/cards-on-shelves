import { combineReducers } from 'redux';
import cardEditor from './cards/creation/reducer';
import codex from './codex/reducer';
import cardList from './cards/list/reducer';


export default combineReducers({ cardEditor, codex, cardList });


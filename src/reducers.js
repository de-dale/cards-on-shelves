import { combineReducers } from 'redux';
import cardEditor from './cards/creation/reducer';
import codex from './codex/reducer';


export default combineReducers({ cardEditor, codex });


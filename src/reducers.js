import { combineReducers } from 'redux';
import codex from './codex/reducer';
import cards from './cards/reducer';

export default combineReducers({ codex, cards });
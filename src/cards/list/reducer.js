import {ADD_CARD, addCard, IMPORT_CARDS} from './actions';
import { dispatch } from 'redux';

export const initialState = {
    cards: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case ADD_CARD:
        return {
            ...state,
            cards: [
                ...state.cards, action.card
            ]
        };
    case IMPORT_CARDS:
        // TODO: Should use Redux-Saga or another tool for handling async
        // const reader = new FileReader();
        // reader.onload = function (event) {
        //     try {
        //         console.log(event);
        //         const cards = JSON.parse(event.target.result);
        //         Array.from(cards).forEach(card => dispatch(addCard(card)));
        //     } catch (e) {
        //         throw e;
        //     }
        // };
        // reader.onerror = function () {
        //     throw new Error('Cannot import file');
        // };
        // Array.from(action.files).forEach(file => reader.readAsText(file, 'UTF-8'));
        return state;
    default:
        return state;
    }
}

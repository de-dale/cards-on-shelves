import {ADD_CARD, REMOVE_CARD, IMPORT_CARDS} from './actions';

export default function (state = [], action) {
    switch (action.type) {
    case ADD_CARD:
        return [...state, action.card];
    case REMOVE_CARD:
        return state.filter(item => item.id !== action.card.id);
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

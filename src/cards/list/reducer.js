import { ADD_CARD, IMPORT_CARDS, REMOVE_CARD, UPDATE_CARD } from './actions';
import items from '../items/reducer';

const initialState = [];

let nextCardId = 1; // TODO : à stocker dans le state, ou à un autre endroit, indépendant du runtime
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return [ ...state, {
                ...action.card,
                id: (action.card.id || nextCardId++)
            } ];
        case REMOVE_CARD:
            return state.filter(card => card.id !== action.card.id);
        case UPDATE_CARD: {
            return state.map(card =>
                (card.id === action.card.id)
                    ? { ...card, [ action.field ]: action.value }
                    : card
            );
        }
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
            return items(state, action);
    }
}

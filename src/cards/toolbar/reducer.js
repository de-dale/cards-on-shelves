import {TOGGLE_EDITION} from './actions';

export const initialState = {
    card: {
        editable: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
    case TOGGLE_EDITION:
        return {
            ...state,
            card: {
                ...action.card,
                editable: !action.card.editable
            }
        };
    default:
        return state;
    }
}

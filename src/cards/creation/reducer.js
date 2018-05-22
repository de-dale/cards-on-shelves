import { CHANGE_TITLE } from './action';

export const initialState = {
    title: ''
};

export default function (state = initialState, action) {
    switch (action.type) {

    case CHANGE_TITLE:
        return {...state, title: action.title};
    default:
        return state;
    }
}

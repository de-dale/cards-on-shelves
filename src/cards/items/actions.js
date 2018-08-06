import {makeActionCreator} from '../../utils';

export const ADD_CARD_ITEM = 'ADD_CARD_ITEM';
export const UPDATE_CARD_ITEM = 'UPDATE_CARD_ITEM';

let nextCardItemId = 0;
export const createItem = () => addCardItem({
    id: nextCardItemId,
    type: 'title',
    content: ''
});

export const addCardItem = makeActionCreator(ADD_CARD_ITEM, 'card');
export const updateCardItem = makeActionCreator(UPDATE_CARD_ITEM, 'card');
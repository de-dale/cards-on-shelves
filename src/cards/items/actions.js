import {makeActionCreator} from '../../utils';

export const ADD_CARD_ITEM = 'ADD_CARD_ITEM';

let nextCardItemId = 0;
export const createItem = () => addCard({
    id: nextCardItemId,
    type: 'title',
    content: ''
});

export const addCard = makeActionCreator(ADD_CARD_ITEM, 'card');
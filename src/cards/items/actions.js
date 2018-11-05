import { makeActionCreator } from '../../utils';

export const ADD_CARD_ITEM = 'ADD_CARD_ITEM';
export const UPDATE_CARD_ITEM = 'UPDATE_CARD_ITEM';
export const REMOVE_CARD_ITEM = 'REMOVE_CARD_ITEM';

export const createItem = (card) => addCardItem(card, {
    type: 'title',
    content: ''
});

export const addCardItem = makeActionCreator(ADD_CARD_ITEM, 'card', 'item');
export const removeCardItem = makeActionCreator(REMOVE_CARD_ITEM, 'card', 'item');
export const updateCardItem = makeActionCreator(UPDATE_CARD_ITEM, 'card', 'item', 'field', 'value');
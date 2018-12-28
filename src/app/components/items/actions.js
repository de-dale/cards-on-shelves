import { makeActionCreator } from 'utils';

const ADD_CARD_ITEM = 'ADD_CARD_ITEM';
const UPDATE_CARD_ITEM = 'UPDATE_CARD_ITEM';
const REMOVE_CARD_ITEM = 'REMOVE_CARD_ITEM';

const createItem = (card) => addCardItem({
    type: 'title',
    content: ''
}, card);

const addCardItem = makeActionCreator(ADD_CARD_ITEM, 'item', 'card');
const removeCardItem = makeActionCreator(REMOVE_CARD_ITEM, 'item');
const updateCardItem = makeActionCreator(UPDATE_CARD_ITEM, 'item', 'field', 'value');

export {
    ADD_CARD_ITEM, addCardItem, createItem,
    UPDATE_CARD_ITEM, removeCardItem,
    REMOVE_CARD_ITEM, updateCardItem,
};
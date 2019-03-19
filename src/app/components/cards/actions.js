import { makeActionCreator } from 'utils';

const ADD_CARD = 'ADD_CARD';
const REMOVE_CARD = 'REMOVE_CARD';
const UPDATE_CARD = 'UPDATE_CARD';

const createCard = (parent) => addCard({
    name: 'Nouvelle Carte',
    theme: '',
    shape: ''
}, parent);

const addCard = makeActionCreator(ADD_CARD, 'card', 'parent');
const removeCard = makeActionCreator(REMOVE_CARD, 'card');
const updateCard = makeActionCreator(UPDATE_CARD, 'card', 'field', 'value');

export {
    ADD_CARD, addCard, createCard,
    REMOVE_CARD, removeCard,
    UPDATE_CARD, updateCard
};
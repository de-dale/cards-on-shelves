import { makeActionCreator } from '../../utils';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const IMPORT_CARDS = 'IMPORT_CARDS';
export const UPDATE_CARD = 'UPDATE_CARD';

export const createCard = () => addCard({
    name: 'Nouvelle Carte',
    theme: '',
    shape: '',
    content: []
});

export const addCard = makeActionCreator(ADD_CARD, 'card');
export const removeCard = makeActionCreator(REMOVE_CARD, 'card');
export const importCards = makeActionCreator(IMPORT_CARDS, 'files');
export const updateCard = makeActionCreator(UPDATE_CARD, 'card', 'field', 'value');

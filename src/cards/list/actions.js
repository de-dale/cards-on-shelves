import {makeActionCreator} from '../../utils';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const IMPORT_CARDS = 'IMPORT_CARDS';

let nextCardId = 0
export const createCard = () => addCard({
    id: nextCardId++,
    name: 'Nouvelle Carte',
    theme: '',
    shape: '',
    editable: false,
    content: []
});

export const addCard = makeActionCreator(ADD_CARD, 'card');
export const removeCard = makeActionCreator(REMOVE_CARD, 'card');
export const importCards = makeActionCreator(IMPORT_CARDS, 'files');

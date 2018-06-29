import {makeActionCreator} from "../../utils";

export const ADD_CARD = 'ADD_CARD';
export const IMPORT_CARDS = 'IMPORT_CARDS';

export const createCard = () => addCard({
    name: 'Nouvelle Carte',
    theme: '',
    shape: '',
    content: []
});

export const addCard = makeActionCreator(ADD_CARD, 'card');
export const importCards = makeActionCreator(IMPORT_CARDS, 'files');

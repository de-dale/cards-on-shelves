export const ADD_CARD = 'ADD_CARD';
export const SAVE_CODEX = 'SAVE_CODEX';

export const log = (any, message, optionalParams) => {
    console.log(message, any, optionalParams);
    return any;
};

export const addCard = (card) => ({
    type: ADD_CARD,
    card
});

export const saveCodex = (codex) => ({
    type: SAVE_CODEX,
    codex
});

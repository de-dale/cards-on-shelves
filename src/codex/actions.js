export const ADD_CARD = 'ADD_CARD';

export const log = (any, message, optionalParams) => {
    console.log(message, any, optionalParams);
    return any;
};

export const addCard = (card) => ({
    type: ADD_CARD,
    card
});

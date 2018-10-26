import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {
    const EMPTY_STATE = {
        nextCardId: 1,
        nextCardItemId: 1,
        cards: []
    };
    const FILLED_STATE = {
        nextCardId: 1,
        nextCardItemId: 1,
        cards: [ aCard(1), aCard(2), aCard(3) ]
    };

    it('should return the initial state', () => {
        expect(reducer(EMPTY_STATE, {})).toEqual(EMPTY_STATE);
    });

    it('should add a card', () => {
        const action = actions.addCard(aCard(5));

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextCardId: 6,
            nextCardItemId: 1,
            cards: [
                { id: 5, content: [] }
            ]
        });
    });

    it('should increment id when absent', () => {
        let state = EMPTY_STATE;

        const action = actions.createCard();
        const secondAction = actions.createCard();

        state = reducer(state, action);
        state = reducer(state, secondAction);

        expect(state).toEqual(
            {
                nextCardId: 3,
                nextCardItemId: 1,
                cards:
                    [
                        { id: 1, name: 'Nouvelle Carte', shape: '', theme: '', content: [] },
                        { id: 2, name: 'Nouvelle Carte', shape: '', theme: '', content: [] }
                    ]
            });
    });

    it('should remove a card', () => {
        const action = actions.removeCard(aCard(2));

        expect(reducer(FILLED_STATE, action)).toEqual(
            {
                nextCardId: 1,
                nextCardItemId: 1,
                cards: [
                    { id: 1, content: [] },
                    { id: 3, content: [] }
                ]
            });
    });

    it('should edit card name', () => {
        const action = actions.updateCard(aCard(2), 'name', 'anything');

        expect(reducer(FILLED_STATE, action)).toEqual(
            {
                nextCardId: 1,
                nextCardItemId: 1,
                cards: [
                    { id: 1, content: [] },
                    { id: 2, content: [], name: 'anything' },
                    { id: 3, content: [] }
                ]
            });
    });

    it('should add a card with items', () => {
        const action = actions.addCard(aCard(5, [anItem('without id')]));

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextCardId: 6,
            nextCardItemId: 2,
            cards: [
                {
                    id: 5,
                    content: [
                        {
                            id: 1,
                            content: 'without id'
                        }

                    ]
                }
            ]
        });
    });

});

function aCard(id, items = []) {
    return {
        id: id,
        content: [
            ...items
        ]
    };
}

function anItem(content) {
    return {
        content: content
    };
}
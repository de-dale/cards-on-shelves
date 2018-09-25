import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {
    const EMPTY_STATE = [];
    const FILLED_STATE = [ aCard(1), aCard(2), aCard(3) ];

    it('should return the initial state', () => {
        expect(reducer(EMPTY_STATE, {})).toEqual(EMPTY_STATE);
    });

    it('should add a card', () => {
        const action = actions.addCard(aCard(2));

        expect(reducer(EMPTY_STATE, action)).toEqual([
            { id: 2, content: [] }
        ]);
    });

    it('should increment id when absent', () => {
        let state = EMPTY_STATE;

        const action = actions.createCard();
        const secondAction = actions.createCard();

        state = reducer(state, action);
        state = reducer(state, secondAction);

        expect(state).toEqual([
            { id: 1, name: 'Nouvelle Carte', shape: '', theme: '', content: [] },
            { id: 2, name: 'Nouvelle Carte', shape: '', theme: '', content: [] }
        ]);
    });

    it('should remove a card', () => {
        const action = actions.removeCard(aCard(2));

        expect(reducer(FILLED_STATE, action)).toEqual([
            { id: 1, content: [] },
            { id: 3, content: [] }
        ]);
    });

    it('should edit card name', () => {
        const action = actions.updateCard(aCard(2), 'name', 'anything');

        expect(reducer(FILLED_STATE, action)).toEqual([
            { id: 1, content: [] },
            { id: 2, content: [], name: 'anything' },
            { id: 3, content: [] }
        ]);
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
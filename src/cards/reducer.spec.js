import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {
    
    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };
    
    const FILLED_STATE = {
        nextEntityId: 12,
        entities: [ aCard(1), aCard(2), aCard(3) ]
    };

    it('should add a card', () => {
        const action = actions.addCard(aCard(5));

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextEntityId: 6,
            entities: [
                { id: 5, type: 'card' }
            ]
        });
    });

    it('should add a card to a codex', () => {
        const action = actions.addCard(aCard(5, { codex: 1 }));

        expect(reducer({
            nextEntityId: 1,
            entities: [
                { id: 1, type: 'codex' }
            ]
        }, action))
            .toEqual({
                nextEntityId: 6,
                entities: [
                    { id: 1, type: 'codex', children: [ 5 ] },
                    { id: 5, type: 'card' }
                ]
            });
    });

    it('should increment id when absent', () => {
        let state = EMPTY_STATE;

        const action = actions.createCard();
        const secondAction = actions.createCard();

        state = reducer(state, action);
        state = reducer(state, secondAction);

        expect(state).toEqual({
            nextEntityId: 3,
            entities:
                [
                    { id: 1, type: 'card', name: 'Nouvelle Carte', shape: '', theme: '' },
                    { id: 2, type: 'card', name: 'Nouvelle Carte', shape: '', theme: '' }
                ]
        });
    });

    it('should remove a card', () => {
        const action = actions.removeCard(aCard(2));

        expect(reducer(FILLED_STATE, action)).toEqual(
            {
                nextEntityId: 12,
                entities: [
                    { id: 1, type: 'card' },
                    { id: 3, type: 'card' }
                ]
            });
    });

    it('should edit card name', () => {
        const action = actions.updateCard(aCard(2), 'name', 'anything');

        expect(reducer(FILLED_STATE, action)).toEqual({
            nextEntityId: 12,
            entities: [
                { id: 1, type: 'card' },
                { id: 2, type: 'card', name: 'anything' },
                { id: 3, type: 'card' }
            ]
        });
    });

});

function aCard(id, items = []) {
    return {
        id: id,
        type: 'card',
        ...items
    };
}


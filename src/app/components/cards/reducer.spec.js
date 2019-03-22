import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {

    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };

    const STATE_WITH_CODEX = {
        nextEntityId: 2,
        entities: [
            { id: 1, type: 'codex' }
        ]
    };
    
    const FILLED_STATE = {
        nextEntityId: 12,
        entities: [ aCardById(1), aCardById(2), aCardById(3) ]
    };

    it('should add a card', () => {
        const action = actions.addCard(aCardByName('A Card'));

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextEntityId: 2,
            entities: [
                { id: 1, name: 'A Card', type: 'card' }
            ]
        });
    });

    it('should add a card to any parent', () => {
        const codex = { id: 1 };
        const action = actions.addCard(aCardByName('Card Name'), codex);

        expect(reducer(STATE_WITH_CODEX, action))
            .toEqual({
                nextEntityId: 3,
                entities: [
                    { id: 1, type: 'codex', children: [ 2 ] },
                    { id: 2, name: 'Card Name', type: 'card' }
                ]
            });
    });

    it('should create a card with default values', () => {
        const action = actions.createCard();

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextEntityId: 2,
            entities:
                [
                    { id: 1, type: 'card', name: 'Nouvelle Carte', shape: '', theme: '' }
                ]
        });
    });

    it('should remove a card', () => {
        const action = actions.removeCard(aCardById(2));

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
        const action = actions.updateCard(aCardById(2), 'name', 'anything');

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

function aCardById(id, items = []) {
    return {
        id: id,
        type: 'card',
        ...items
    };
}
function aCardByName(name, items = []) {
    return {
        name: name,
        type: 'card',
        ...items
    };
}

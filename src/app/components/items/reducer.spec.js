import reducer from './reducer';
import * as actions from './actions';

describe('cards items reducer', () => {

    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };

    const FILLED_STATE = {
        nextEntityId: 12,
        entities: [ aCard(1), aCard(2), aCard(3) ]
    };

    const CARD = aCard(1);

    it('should add an item', () => {
        const action = actions.addCardItem(
            anItem(1, 'item content'),
            CARD
        );

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextEntityId: 2,
            entities: [
                { id: 1, content: 'item content' }
            ]
        });
    });

    it('should add an item to right card', () => {
        const action = actions.addCardItem(
            anItem(1, 'item content'),
            aCard(2)
        );

        expect(reducer(FILLED_STATE, action)).toEqual({
            nextEntityId: 13,
            entities: [
                { id: 1 },
                {
                    id: 2,
                    children: [ 12 ]
                },
                { id: 3 },
                { id: 12, content: 'item content' }
            ]
        });
    });

    it('should increment id when absent', () => {
        let state = FILLED_STATE;

        const action = actions.createItem(CARD);
        const secondAction = actions.createItem(CARD);

        state = reducer(state, action);
        state = reducer(state, secondAction);

        expect(state).toEqual({
            nextEntityId: 14,
            entities: [
                { id: 1, children: [ 12, 13 ] },
                { id: 2, },
                { id: 3 },
                { id: 12, type: 'title', content: '' },
                { id: 13, type: 'title', content: '' }
            ]

        });
    });

    it('should remove one card item', () => {
        const state = {
            nextEntityId: 14,
            entities: [
                { id: 1, children: [ 111, 112 ] },
                { id: 2, children: [ 222 ] },
                { id: 111, content: 'content' },
                { id: 112, content: 'some other content' },
                { id: 222, content: 'another item content' }
            ]
        };

        const action = actions.removeCardItem(anItem(111));

        expect(reducer(state, action)).toEqual({
            nextEntityId: 14,
            entities: [
                { id: 1, children: [ 112 ] },
                { id: 2, children: [ 222 ] },
                { id: 112, content: 'some other content' },
                { id: 222, content: 'another item content' }
            ]
        });
    });

    it('should edit an item to a card', () => {
        const state = {
            entities: [
                { id: 1, children: [ 111 ] },
                { id: 111, content: 'item content' }
            ]
        };

        const action = actions.updateCardItem(anItem(111), 'name', 'anything');

        expect(reducer(state, action)).toEqual({
            entities: [
                { id: 1, children: [ 111 ] },
                {
                    id: 111,
                    content: 'item content',
                    name: 'anything'
                }
            ]
        });
    });
});

function anItem(id, content, type) {
    return {
        id, content, type
    };
}

function aCard(id) {
    return { id: id };
}
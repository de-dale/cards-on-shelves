import reducer from './reducer';
import * as actions from './actions';

describe('cards items reducer', () => {

    const CARD = aCard(1);
    const STATE = {
        nextCardItemId: 1,
        cards: [
            CARD
        ]
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            cards: [],
            nextCardItemId: 1
        });
    });

    it('should add an item', () => {
        const action = actions.addCardItem(
            CARD,
            anItem(1, 'item content')
        );

        expect(reducer(STATE, action)).toEqual({
            nextCardItemId: 2,
            cards: [
                {
                    id: 1,
                    content: [
                        { id: 1, content: 'item content' }
                    ]
                } ]
        });
    });

    it('should add an item to right card', () => {
        const action = actions.addCardItem(
            aCard(2),
            anItem(1, 'item content')
        );

        expect(reducer({ ...STATE, cards: [ ...STATE.cards, aCard(2), aCard(3) ] }, action)).toEqual({
            nextCardItemId: 2,
            cards: [
                { id: 1, content: [] },
                {
                    id: 2,
                    content: [
                        { id: 1, content: 'item content' }
                    ]
                },
                { id: 3, content: [] }, ]
        });
    });

    it('should increment id when absent', () => {
        let state = STATE;

        const action = actions.createItem(CARD);
        const secondAction = actions.createItem(CARD);

        state = reducer(state, action);
        state = reducer(state, secondAction);

        expect(state).toEqual({
            nextCardItemId: 3,
            cards: [
                {
                    id: 1,
                    content: [
                        { id: 1, type: 'title', content: '' },
                        { id: 2, type: 'title', content: '' }
                    ]
                } ]
        });
    });

    it('should remove one card item', () => {
        const state = {
            cards: [
                aCard(1, [ anItem(111, 'content'), anItem(112, 'some other content') ]),
                aCard(2, [ anItem(222, 'another item content') ]),
            ]
        };

        const action = actions.removeCardItem(CARD, anItem(111));

        expect(reducer(state, action)).toEqual({
            cards: [
                {
                    id: 1,
                    content: [
                        { id: 112, content: 'some other content' }
                    ]
                },
                {
                    id: 2,
                    content: [
                        { id: 222, content: 'another item content' }
                    ]
                }
            ]
        });
    });

    it('should edit an item to a card', () => {
        const state = { cards: [ aCard(1, [ anItem(111, 'item content') ]) ] };

        const action = actions.updateCardItem(CARD, anItem(111), 'name', 'anything');

        expect(reducer(state, action)).toEqual({
            cards: [
                {
                    id: 1, content: [
                        {
                            id: 111,
                            content: 'item content',
                            name: 'anything'
                        }
                    ]
                }
            ]
        });
    });
});

function anItem(id, content) {
    return {
        id: id,
        content: content
    };
}

function aCard(id, items = []) {
    return {
        id: id,
        content: [
            ...items
        ]
    };
}
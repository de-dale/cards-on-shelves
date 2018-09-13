import reducer from './reducer';
import * as actions from './actions';

describe('cards items reducer', () => {
    const STATE = [];

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(STATE);
    });

    it('should add an item to a card', () => {
        const theState = [
            {id: 1, content: []},
            {id: 2},
            {id: 3}
        ];

        const action = {
            type: actions.ADD_CARD_ITEM,
            card: {id: 1},
            item: {id: 1, content: 'item content'}
        };

        expect(reducer(theState, action)).toEqual([
            {
                id: 1,
                content: [
                    {id: 1, content: 'item content'}
                ]
            },
            {id: 2},
            {id: 3}]
        );
    });

    it('should remove one card item', () => {
        const theState = [
            {
                id: 1,
                content: [
                    {id: 111, content: 'item content'}
                ]
            },
            {
                id: 2,
                content: [
                    {id: 222, content: 'another item content'}
                ]
            }];

        const action = {
            type: actions.REMOVE_CARD_ITEM,
            card: {id: 1},
            item: {id: 111}
        };

        expect(reducer(theState, action)).toEqual([
            {
                id: 1,
                content: []
            },
            {
                id: 2,
                content: [
                    {id: 222, content: 'another item content'}
                ]
            }
        ]);
    });

    it('should edit an item to a card', () => {
        const theState = [
            {
                id: 1, content: [
                    {id: 111, content: 'item content'}
                ]
            }
        ];

        const action = {
            type: actions.UPDATE_CARD_ITEM,
            card: {id: 1},
            item: {id: 111},
            value: 'anything',
            field: 'name'
        };

        expect(reducer(theState, action)).toEqual([
            {
                id: 1, content: [
                    {
                        id: 111,
                        content: 'item content',
                        name: 'anything'
                    }
                ]
            }
        ]);
    });
});
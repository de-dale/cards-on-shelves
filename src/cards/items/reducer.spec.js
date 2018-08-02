import reducer from './reducer';
import * as actions from './actions';

describe('cards items reducer', () => {
    const STATE = [];

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(STATE);
    });

    it('should add an item to a card', () => {
        const theState = [
            {id: 1, items: []},
            {id: 2},
            {id: 3}
        ];

        const action = {
            type: 'ADD_CARD_ITEM',
            card: {id: 1},
            item: {id: 1, content: 'item content'}
        };

        expect(reducer(theState, action)).toEqual([
            {
                id: 1,
                items: [
                    {id: 1, content: 'item content'}
                ]
            },
            {id: 2},
            {id: 3}]
        );
    });
});
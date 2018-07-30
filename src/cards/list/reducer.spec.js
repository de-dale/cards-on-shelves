import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {
    const STATE = [];

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(STATE);
    });

    it('should handle ADD_CARD', () => {
        const action = {
            type: actions.ADD_CARD,
            card: 'a card object'
        };

        expect(reducer(STATE, action)).toEqual([
            'a card object'
        ]);
    });

    it('should remove one card', () => {
        const theState = [ {id : 1},
            {id : 2},
            {id : 3}];

        const action = {
            type: actions.REMOVE_CARD,
            card: {
                id: 2
            }
        };

        expect(reducer(theState, action)).toEqual([
            {id : 1},
            {id : 3}
        ]);
    });

    it('should edit card name', () => {
        const theState = [ {id : 1},
            {id : 2},
            {id : 3}];

        const action = {
            type: actions.UPDATE_CARD,
            value: 'anything',
            card: {
                id: 2
            },
            field: 'name'
        };

        expect(reducer(theState, action)).toEqual([
            {id : 1},
            {id : 2, name:'anything'},
            {id : 3}
        ]);
    });
});
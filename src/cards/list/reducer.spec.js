import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            cards: []
        });
    });

    it('should handle ADD_CARD', () => {
        let initialState = {
            cards: []
        };
        let action = {
            type: actions.ADD_CARD,
            card: 'a card object'
        };
        let finalState = {
            cards: [
                'a card object'
            ]
        };

        expect(reducer(initialState, action)).toEqual(finalState);
    });
});
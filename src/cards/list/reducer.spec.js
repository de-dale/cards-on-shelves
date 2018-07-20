import reducer from './reducer';
import * as actions from './actions';

describe('list reducer', () => {
    const STATE = [];

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(STATE);
    });

    it('should handle ADD_CARD', () => {
        let action = {
            type: actions.ADD_CARD,
            card: 'a card object'
        };

        expect(reducer(STATE, action)).toEqual([
           'a card object'
        ]);
    });
});
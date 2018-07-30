import reducer from './reducer';

describe('list reducer', () => {
    const STATE = {
        title: ''
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(STATE);
    });
});
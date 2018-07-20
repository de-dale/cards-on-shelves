import reducers from './reducers';

describe('reducers', () => {
    const STATE = {
        'cards': {
            'editor': {'title': ''},
            'list': [],
            'toolbar': {'card': {'editable': false}}},
        'codex': {'cards': [], 'name': 'Nouveau Codex'}
    };

    it('should return the initial state', () => {
        expect(reducers(undefined, {})).toEqual(STATE);
    });

    it('should add a single card', () => {
        const action = {
            type: 'ADD_CARD',
            card: 'a card object'
        };

        STATE.cards.list = [
            'a card object'
        ];
        expect(reducers({}, action)).toEqual(STATE);
    });
});
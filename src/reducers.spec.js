import reducers from './reducers';

describe('reducers', () => {
    const STATE = {
        'cards': {
            'list': []
        },
        'codex': { 'cards': [], 'name': 'Nouveau Codex' }
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

    it('should add a card item', () => {
        const theState = {
            cards: {
                'list': [
                    { id: 1, content: [] },
                    { id: 2 },
                    { id: 3 }
                ]
            }
        };

        const action = {
            type: 'ADD_CARD_ITEM',
            card: { id: 1 },
            item: { id: 1, content: 'item content' }
        };

        expect(reducers(theState, action)).toEqual({
            cards: {
                list: [
                    {
                        id: 1,
                        content: [
                            { id: 1, content: 'item content' }
                        ]
                    },
                    { id: 2 },
                    { id: 3 }]
            },
            codex: { cards: [], name: 'Nouveau Codex' }
        });
    });
});
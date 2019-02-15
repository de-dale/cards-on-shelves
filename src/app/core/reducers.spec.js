import reducers from './reducers';

describe('reducers', () => {
    
    const DEFAULT_STATE = {
        version: '0.3.0',
        nextEntityId: 1,
        entities: []
    };

    const STATE_ONE_CODEX = {
        version: '0.3.0',
        nextEntityId: 2,
        entities: [
            {
                id: 1,
                name: 'Un Codex',
                type: 'codex'
            }
        ]
    };

    const STATE_ONE_CARD = {
        version: '0.3.0',
        nextEntityId: 3,
        entities: [
            {
                children: [
                    2
                ],
                id: 1,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                id: 2,
                name: 'Un carte avec l\'item',
                theme: 'ability',
                type: 'card'
            }
        ]
    };

    const STATE_ONE_CARD_ITEM = {
        version: '0.3.0',
        nextEntityId: 4,
        entities: [
            {
                children: [
                    2
                ],
                id: 1,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                children: [
                    3,
                ],
                id: 2,
                name: 'Un carte avec l\'item',
                theme: 'ability',
                type: 'card'
            },
            {
                children: 'item content',
                id: 3,
            }
        ]
    };

    it('should return the initial state', () => {
        expect(reducers(undefined, {})).toEqual(DEFAULT_STATE);
    });

    it('should not changes state when have nothing to do', () => {
        const dummyState = { children: 'I should stay unchanged' };
        expect(reducers(dummyState, {})).toEqual(dummyState);
    });

    it('should add a codex', () => {
        const action = {
            type: 'ADD_CODEX',
            codex: { name: 'Un Codex' }
        };

        expect(reducers(DEFAULT_STATE, action)).toEqual(STATE_ONE_CODEX);
    });

    it('should add a single card', () => {
        const action = {
            type: 'ADD_CARD',
            card: {
                name: 'Un carte avec l\'item',
                theme: 'ability',
                codex: 1
            }
        };

        expect(reducers(STATE_ONE_CODEX, action)).toEqual(STATE_ONE_CARD);
    });

    it('should add a card item', () => {
        const action = {
            type: 'ADD_CARD_ITEM',
            card: { id: 2 },
            item: { id: 1, children: 'item content' }
        };
        expect(reducers(STATE_ONE_CARD, action)).toEqual(STATE_ONE_CARD_ITEM);
    });
})
;
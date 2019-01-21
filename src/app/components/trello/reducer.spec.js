import reducer from './reducer';
import trello from './import-trello';
import { importFromUrl } from './actions';

describe('codex', () => {

    const INITIAL_STATE = {
        nextEntityId: 1,
        entities: [
            {
                id: 1,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                children: [ 3 ],
                id: 2,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                id: 3,
                name: 'Une carte',
                type: 'card'
            }
        ]
    };
    
    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };

    it('should be a smoke test', async () => {
        expect.assertions(1);
        const saveCodex = importFromUrl('https://api.trello.com/1/cards/5be546175d23f22b8f7bd530', trello);

        const actualState = await reducer(EMPTY_STATE, saveCodex);
        expect(actualState).toEqual({
            nextEntityId: 6,
            entities: [
                { id: 5, type: 'card' }
            ]
        });
    });
    
});
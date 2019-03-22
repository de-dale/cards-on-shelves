import fetch from 'node-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'components/importers/trello/actions';

const mockStore = configureMockStore([ thunk ]);
let store = {};

describe('trello', () => {

    let mockTrello = {
        searchResult: (id) => {
            fetch.mockResponseOnce(JSON.stringify({ cards: [ { id: id } ] }));
            return mockTrello;
        },

        cardResult: (id) => {
            fetch.mockResponseOnce(JSON.stringify({ id: id }));
            return mockTrello;
        }
    };

    beforeEach(() => {
        fetch.resetMocks();
        store = mockStore({});
    });

    it('should search by query', () => {
        const trelloQuery = 'a_query';
        mockTrello.searchResult().cardResult();

        const action = actions.fetchTrello(trelloQuery, {}, 'key', 'token');

        return store.dispatch(action).then(() => {
            expect(fetch.mock.calls[ 0 ][ 0 ])
                .toEqual(expect.stringMatching('^https://api.trello.com/1/search\\?query=' + trelloQuery));
        });
    });

    it('should search by short url id', () => {
        const FOUND_CARD_ID = 'a_card_id';
        mockTrello.searchResult(FOUND_CARD_ID).cardResult();

        const action = actions.fetchTrello('', {}, 'key', 'token');

        return store.dispatch(action).then(() => {
            expect(fetch.mock.calls[ 1 ][ 0 ])
                .toEqual(expect.stringMatching('^https://api.trello.com/1/cards/' + FOUND_CARD_ID));
        });
    });

    it('should dispatch a trello import action', () => {
        mockTrello.searchResult().cardResult(42);
        const parent = { id: 37 };
        
        const action = actions.fetchTrello('', parent, 'key', 'token');

        return store.dispatch(action).then(() => {
            expect(store.getActions()[ 0 ]).toMatchObject(
                {
                    type: 'IMPORT_TRELLO',
                    input: { id: 42 },
                    parent: parent
                });
        });
    });

});
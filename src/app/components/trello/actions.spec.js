import fetch from 'node-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'components/trello/actions';
import importTrelloCard from 'components/trello/import-trello';

const mockStore = configureMockStore([ thunk ]);
const store = mockStore({});

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

    it('should dispatch a generic mapping action, with trello mapper', () => {
        mockTrello.searchResult().cardResult();

        const action = actions.fetchTrello('', {}, 'key', 'token');

        return store.dispatch(action).then(() => {
            expect(store.getActions()[ 0 ]).toMatchObject(
                {
                    type: 'GENERIC_IMPORT',
                    mapper: importTrelloCard
                });
        });
    });
    
});
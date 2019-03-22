import fetch from 'node-fetch';

const IMPORT_TRELLO = 'IMPORT_TRELLO';
const importTrello = (input, parent) => ({
    type: IMPORT_TRELLO,
    input: input,
    parent: parent
});

function fetchTrello(query, parent, key, token) {
    // https://redux.js.org/advanced/async-actions
    let trello = _trello(key, token);
    return (dispatch) => fetch(trello.searchCardByShortUrl(query))
        .then(response => response.json())
        .then(json => fetch(trello.getCardById(json)))
        .then(response => response.json())
        .then(
            json => dispatch(importTrello(json, parent)),
            error => /*eslint-disable no-console*/console.error('An error occurred.', error)
        );
}

const _trello = (key, token) => {
    const API_URL = 'https://api.trello.com/1';
    const SHORT_URL_PREFIX = 'https://trello.com/c/';
    const removeTrelloUrl = (url) => url.replace(SHORT_URL_PREFIX, '');
    const extractCardIdFromSearch = (search) => search.cards[ 0 ].id;

    function credentials() {
        return '&key=' + key + '&token=' + token;
    }

    return {
        searchCardByShortUrl: (query) => API_URL + '/search?query=' + removeTrelloUrl(query) + '&modelTypes=cards&card_fields=id' + credentials(),
        getCardById: (response) => API_URL + '/cards/' + extractCardIdFromSearch(response) + '?_' + credentials()
    };
};

export {
    fetchTrello,
    IMPORT_TRELLO, importTrello
};


import { makeActionCreator } from 'utils';
import importTrello from 'components/trello/import-trello';
import fetch from 'node-fetch';

const IMPORT_WITH_MAPPER = 'IMPORT_WITH_MAPPER';

const importer = makeActionCreator(IMPORT_WITH_MAPPER, 'input', 'parent', 'mapper');

function fetchTrello(url, parent, key, token) {
    // https://redux.js.org/advanced/async-actions
    let trello = _trello(key, token);
    return (dispatch) => fetch(trello.searchCardByShortUrl(url))
        .then(response => response.json())
        .then(json => fetch(trello.getCardById(json)))
        .then(response => response.json())
        .then(
            json => dispatch(importer(json, parent, importTrello)),
            error => /*eslint-disable no-console*/console.error('An error occurred.', error)
        );
}

const _trello = (key, token) => {
    const API_URL = 'https://api.trello.com/1';
    const SHORT_URL_PREFIX = 'https://trello.com/c/';
    const extractShortUrl = (url) => url.replace(SHORT_URL_PREFIX, '');
    const extractCardIdFromSearch = (search) => search.cards[ 0 ].id;

    function credentials() {
        return '&key=' + key + '&token=' + token;
    }

    return {
        searchCardByShortUrl: (url) => API_URL + '/search?query=' + extractShortUrl(url) + '&modelTypes=cards&card_fields=id' + credentials(),
        getCardById: (response) => API_URL + '/cards/' + extractCardIdFromSearch(response) + '?_' + credentials()
    };
};

export {
    IMPORT_WITH_MAPPER, fetchTrello
};


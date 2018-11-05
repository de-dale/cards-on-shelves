import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Codex from './codex/Codex.js';

import { addCard } from './cards/actions';

const codexRoot = document.getElementById('shelves-root');

function getCodexUrl() {
    let url = new URL(location.href);
    let searchParams = new URLSearchParams(url.search);
    let branch = searchParams.get('branch')
        ? searchParams.get('branch')
        : 'spheres.all';
    let codexFile = searchParams.get('spheres')
        ? searchParams.get('spheres')
        : 'all.spheres';

    return 'https://raw.githubusercontent.com/de-dale/spherier/' + branch + '/main/' + codexFile;
}

let url = getCodexUrl();
loadCodex(codexRoot, 'Sphérier', url);

function loadCodex(dom, name, url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(card => store.dispatch(addCard(card)));
            displayCodex(dom, name, data);
        }).catch(() => {
            displayCodex(dom, name, []);
        });
}

function displayCodex(dom, name, data) {
    const codex = {
        name: name,
        cards: data
    };
    ReactDOM.render(
        <Provider store={store}>
            <Codex codex={codex}/>
        </Provider>,
        dom
    );
}

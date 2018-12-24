import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import App from './app/App';

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
            const store = createStore( {
                codex: {
                    name: name,
                    cards: data
                }/*, Could work if ids were defined 
                cards: {
                    cards: data
                }*/
            });
            data.forEach(card => store.dispatch(addCard(card)));
            displayCodex(dom, store);
        }).catch(() => {
            const store = createStore();
            displayCodex(dom, store);
        });
}

function displayCodex(dom, store) {
    ReactDOM.render(
        <Provider store={ store }>
            <App/>
        </Provider>,
        dom
    );
}

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

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
url = '';
loadCodex(codexRoot, 'Sphérier', url);

function loadCodex(dom, name, url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCodex(dom, {
                codex: {
                    name: name
                },
                cards: {
                    cards: data
                }
            });
        })
        .catch(() => {
            displayCodex(dom);
        });
}

function displayCodex(dom, state) {
    ReactDOM.render(
        <App preloadedState={ state }/>,
        dom
    );
}

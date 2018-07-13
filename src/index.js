import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Codex from './codex/Codex.js';

import './css/screen.css';

export function aDiv(id) {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    return element;
}

const codexRoot = aDiv('shelves-root');
document.body.appendChild(codexRoot);

loadCodex(codexRoot, 'Sphérier', 'https://raw.githubusercontent.com/de-dale/skills-sphere/spheres.all/main/all.spheres');

function loadCodex(dom, name, url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCodex(dom, name, data);
        });
}

function displayCodex(dom, name, data) {
    const codex = {
        name: name,
        cards: data
    };
    ReactDOM.render(
        <Provider store = {store}>
            <Codex
                codex={codex}
            />
        </Provider>,
        dom
    );
}

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {Codex} from './components/codex/Codex.js';

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
            ReactDOM.render(
                <Codex
                    name={name}
                    cards={data}
                />,
                dom
            );
        });
}

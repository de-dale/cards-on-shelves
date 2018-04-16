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

ReactDOM.render(
    <Codex name="Codex De-Dale"/>,
    codexRoot
);

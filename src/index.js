'use strict'
import _ from 'lodash';
import './style.css';

import * as cards from './cards/cards.js';
import './samples/css/colors.css';
import './samples/css/icons.css';
// import './samples/css/print.css';
import './samples/css/screen.css';

export function component() {
    var element = document.createElement('div');
    element.classList.add('hello');
    element.innerHTML = _.join(['Hello', 'world'], ' '); return element; }

document.body.appendChild(component());
document.body.appendChild(cards.card({}));

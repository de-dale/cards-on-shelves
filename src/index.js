'use strict'
import _ from 'lodash';
import './style.css';

export function component() {
    var element = document.createElement('div');
    element.classList.add('hello');
    element.innerHTML = _.join(['Hello', 'world'], ' ');
    return element;
}

document.body.appendChild(component());

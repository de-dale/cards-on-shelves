'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {Codex} from './components/codex/Codex.js';

import './css/colors.css';
import './css/icons.css';
import './css/screen.css';

export function aDiv(id) {
    let element = document.createElement('div');
    element.setAttribute("id", id);
    return element;
}

document.body.appendChild(aDiv('react-root'));

let card = {
    "name": "Ma Carte de Test",
    /*    "shape": "landscape",*/
    "content": [
        {
            "type": "title",
            "content": "Titre de la carte."
        },
        {
            "type": "field",
            "header": "Type de carte",
            "content": "MJ"
        },
        {
            "type": "text",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui magna, tristique ac volutpat sed, sollicitudin molestie magna. Cras sed purus at metus viverra venenatis a et dolor. Pellentesque egestas nisi in mollis aliquam. Sed scelerisque fermentum tincidunt. Nulla interdum venenatis sapien, sit amet condimentum lectus. Phasellus malesuada semper quam, ut pulvinar dolor iaculis vitae. Praesent eu lorem quis nisl lobortis venenatis non id massa. Curabitur non ex sodales, mollis tellus in, dapibus purus. Maecenas eget odio commodo, posuere sapien eget, congue arcu. Donec id facilisis lectus. Proin vitae ipsum libero. Quisque vitae tellus dui. Nulla tincidunt est ac quam faucibus, a lobortis elit venenatis. Sed quis neque sit amet leo finibus cursus. Aenean gravida consectetur erat, sit amet lobortis magna volutpat iaculis."
        }/**/
    ]
};
let cards = [];
cards.push(card);
cards.push(card);

ReactDOM.render(
    <Codex name="Codex De-Dale" cards={cards}/>,
    document.getElementById('react-root')
);


'use strict'

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import { CardContainer } from './cards/CardContainer.js';

import './style.css';
import './samples/css/colors.css';
import './samples/css/icons.css';
import './samples/css/screen.css';

export function aDiv(id) {
    var element = document.createElement('div');
    element.setAttribute("id", id);
    return element;
}

document.body.appendChild(aDiv('react-root'));

let card =  {
    type: 'landscape',
    content: [
        {
            type: 'title',
            content: 'Titre de la carte.'
        },
        {
            type: 'field',
            header: 'Type de carte',
            value: 'MJ'
        }/*,
        {
            type: 'long-text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui magna, tristique ac volutpat sed, sollicitudin molestie magna. Cras sed purus at metus viverra venenatis a et dolor. Pellentesque egestas nisi in mollis aliquam. Sed scelerisque fermentum tincidunt. Nulla interdum venenatis sapien, sit amet condimentum lectus. Phasellus malesuada semper quam, ut pulvinar dolor iaculis vitae. Praesent eu lorem quis nisl lobortis venenatis non id massa. Curabitur non ex sodales, mollis tellus in, dapibus purus. Maecenas eget odio commodo, posuere sapien eget, congue arcu. Donec id facilisis lectus. Proin vitae ipsum libero. Quisque vitae tellus dui. Nulla tincidunt est ac quam faucibus, a lobortis elit venenatis. Sed quis neque sit amet leo finibus cursus. Aenean gravida consectetur erat, sit amet lobortis magna volutpat iaculis.'
        }*/
    ]
};
var cards = [];
cards.push(card);
cards.push(card);

ReactDOM.render(
          <CardContainer name="Conteneur de test" cards={cards}/>,
          document.getElementById('react-root')
);


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

let card =  {
            content: [
                 {
                    type: 'title',
                    content: 'Titre de la carte.'
                },
                {
                    type: 'long-text',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui magna, tristique ac volutpat sed, sollicitudin molestie magna. Cras sed purus at metus viverra venenatis a et dolor. Pellentesque egestas nisi in mollis aliquam. Sed scelerisque fermentum tincidunt. Nulla interdum venenatis sapien, sit amet condimentum lectus. Phasellus malesuada semper quam, ut pulvinar dolor iaculis vitae. Praesent eu lorem quis nisl lobortis venenatis non id massa. Curabitur non ex sodales, mollis tellus in, dapibus purus. Maecenas eget odio commodo, posuere sapien eget, congue arcu. Donec id facilisis lectus. Proin vitae ipsum libero. Quisque vitae tellus dui. Nulla tincidunt est ac quam faucibus, a lobortis elit venenatis. Sed quis neque sit amet leo finibus cursus. Aenean gravida consectetur erat, sit amet lobortis magna volutpat iaculis.'
                }
            ]
        }
document.body.appendChild(cards.card(card));

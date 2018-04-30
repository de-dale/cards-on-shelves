import React from 'react';
import ReactDOM from 'react-dom';

import fs from 'fs';
import beautify from 'js-beautify';

import Deck from './Deck.js';

describe('A Deck', () => {
    it('could be empty', () => {
        const name = 'Deck';
        const cards = [];
        const rendered = printDeck(name, cards);
        expect(rendered)
            .toBe(expectedFile('deck_empty.html'));
    });

    it('could be filled', () => {
        const name = 'Deck';
        const cards = [{
            'content': [
                {
                    'type': 'title',
                    'content': 'Titre de la carte.'
                }
            ]
        },{
            'shape': 'landscape',
            'content': [
                {
                    'type': 'field',
                    'header': 'Type de carte',
                    'content': 'MJ'
                }
            ]
        },{

        }];
        const rendered = printDeck(name, cards);
        expect(rendered)
            .toBe(expectedFile('deck_filled.html'));
    });
});

function printDeck(name, cards) {
    const renderRoot = document.createElement('div');
    ReactDOM.render(
        <Deck name={name} cards={cards}/>,
        renderRoot
    );

    return beautify.html(renderRoot.innerHTML);
}

function expectedFile(filename){
    return fs.readFileSync('./src/deck/expects/'+ filename, 'utf-8').trim();
}

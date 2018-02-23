'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRenderer from 'react-test-renderer';

import fs from 'fs';
import beautify from 'js-beautify';

import { Deck } from './Deck.js';

describe("A Deck", () => {
    it('could be empty', () => {
        let name = "Deck";
        let cards = [];
        let rendered = printDeck(name, cards);
        expect(rendered)
            .toBe(expectedFile('deck_empty.html'));
    });

    it('could be filled', () => {
        let name = "Deck";
        let cards = [{
            "content": [
                {
                    "type": "title",
                    "content": "Titre de la carte."
                }
            ]
        },{
            "shape": "landscape",
            "content": [
                {
                    "type": "field",
                    "header": "Type de carte",
                    "content": "MJ"
                 }
            ]
        },{
            
        }];
        let rendered = printDeck(name, cards);
        expect(rendered)
            .toBe(expectedFile('deck_filled.html'));
    });
});

function printDeck(name, cards) {
    let renderRoot = document.createElement('div');
    ReactDOM.render(
        <Deck name={name} cards={cards}/>,
        renderRoot
    );

    return beautify.html(renderRoot.innerHTML);
}

function expectedFile(filename){
        return fs.readFileSync('./src/deck/expects/'+ filename, 'utf-8').trim();
}

'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRenderer from 'react-test-renderer';

import fs from 'fs';
import beautify from 'js-beautify';

import { CardContainer } from './CardContainer.js';

describe("A card container", () => {
    it('could be empty', () => {
        let name = "Deck";
        let cards = [];
        let rendered = printCardContainer(name, cards);
        expect(rendered)
            .toBe(expectedFile('cardContainer_empty.html'));
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
            "type": "landscape",
            "content": [
                {
                    "type": "field",
                    "header": "Type de carte",
                    "value": "MJ"
                 }
            ]
        },{
            
        }];
        let rendered = printCardContainer(name, cards);
        expect(rendered)
            .toBe(expectedFile('cardContainer_filled.html'));
    });
});

function printCardContainer(name, cards) {
    let renderRoot = document.createElement('div');
    ReactDOM.render(
        <CardContainer name={name} cards={cards}/>,
        renderRoot
    );

    return beautify.html(renderRoot.innerHTML);
}

function expectedFile(filename){
        return fs.readFileSync('./src/cards/expects/'+ filename, 'utf-8').trim();
}

'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRenderer from 'react-test-renderer';

import fs from 'fs';
import beautify from 'js-beautify';

import { CardEditor } from './CardEditor.js';

describe("Card Edition", () => {
    it('should edit a card from scratch', () => {
        let card = {
            "name": "Nouvelle carte",
            "content": []
        };
        let rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_from_scratch.html'));
    });

    it('could be landscaped', () => {
        var card = {
            "name": "Ma Carte", 
            "content": [
                {
                    "type": "title",
                    "content": "Titre de ma carte"
                 }
            ]
        };
        let rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_with_a_field.html'));
    });
});

function printCardEditor(card) {
    var renderRoot = document.createElement('div');
    ReactDOM.render(
          <CardEditor card={card} />,
          renderRoot
    );

    return beautify.html(renderRoot.innerHTML);
}

function expectedFile(filename){
        return fs.readFileSync('./src/cards/expects/'+ filename, 'utf-8').trim();
}

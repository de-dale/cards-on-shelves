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

    it('should edit card title', () => {
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
            .toBe(expectedFile('edit_card_with_a_title.html'));
    });

    it('should edit card field', () => {
        var card = {
            "name": "Ma Carte", 
            "content": [
                {
                    "type": "field",
                    "header" : "Type de carte",
                    "content": "MJ"
                 }
            ]
        };
        let rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_with_a_field.html'));
    });
    
    it('should edit card text', () => {
        var card = {
            "name": "Ma Carte", 
            "content": [
                {
                    "type": "text",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui magna, tristique ac volutpat sed, sollicitudin molestie magna. Cras sed purus at metus viverra venenatis a et dolor. Pellentesque egestas nisi in mollis aliquam. Sed fermentum tincidunt. Nulla interdum venenatis sapien, sit amet condimentum lectus. Phasellus malesuada semper quam, ut pulvinar dolor iaculis vitae. Praesent eu lorem quis nisl lobortis venenatis non id massa. Curabitur non ex sodales, mollis tellus in, dapibus purus. Maecenas eget odio commodo, posuere sapien eget, congue arcu. Donec id facilisis lectus. Proin vitae ipsum libero. Quisque vitae tellus dui. Nulla tincidunt est ac quam faucibus, a lobortis elit venenatis. Sed quis neque sit amet leo finibus cursus. Aenean gravida consectetur erat, sit amet lobortis magna volutpat iaculis."
                }
            ]
        };
        let rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_with_a_text.html'));
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

import React from 'react';
import ReactDOM from 'react-dom';

import fs from 'fs';
import beautify from 'js-beautify';

import { CardEditor } from './CardEditor.js';

describe('Card Edition', () => {
    it('should edit a card from scratch', () => {
        const card = {
            'name': 'Nouvelle carte',
            'content': []
        };
        const rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_from_scratch.html'));
    });

    it('should edit card title', () => {
        const card = {
            'name': 'Ma Carte', 
            'content': [
                {
                    'type': 'title',
                    'content': 'Titre de ma carte'
                }
            ]
        };
        const rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_with_a_title.html'));
    });

    it('should edit card field', () => {
        const card = {
            'name': 'Ma Carte', 
            'content': [
                {
                    'type': 'field',
                    'header' : 'Type de carte',
                    'content': 'MJ'
                }
            ]
        };
        const rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_with_a_field.html'));
    });
    
    it('should edit card text', () => {
        const card = {
            'name': 'Ma Carte', 
            'content': [
                {
                    'type': 'text',
                    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui magna, tristique ac volutpat sed, sollicitudin molestie magna. Cras sed purus at metus viverra venenatis a et dolor. Pellentesque egestas nisi in mollis aliquam. Sed fermentum tincidunt. Nulla interdum venenatis sapien, sit amet condimentum lectus. Phasellus malesuada semper quam, ut pulvinar dolor iaculis vitae. Praesent eu lorem quis nisl lobortis venenatis non id massa. Curabitur non ex sodales, mollis tellus in, dapibus purus. Maecenas eget odio commodo, posuere sapien eget, congue arcu. Donec id facilisis lectus. Proin vitae ipsum libero. Quisque vitae tellus dui. Nulla tincidunt est ac quam faucibus, a lobortis elit venenatis. Sed quis neque sit amet leo finibus cursus. Aenean gravida consectetur erat, sit amet lobortis magna volutpat iaculis.'
                }
            ]
        };
        const rendered = printCardEditor(card);
        expect(rendered)
            .toBe(expectedFile('edit_card_with_a_text.html'));
    });
});

function printCardEditor(card) {
    const renderRoot = document.createElement('div');
    ReactDOM.render(
        <CardEditor card={card} onUpdate={() => {}}/>,
        renderRoot
    );

    return beautify.html(renderRoot.innerHTML);
}

function expectedFile(filename){
    return fs.readFileSync('./src/codex/expects/'+ filename, 'utf-8').trim();
}

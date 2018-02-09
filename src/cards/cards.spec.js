'use strict'

import * as cards from './cards.js';
import fs from 'fs';
import beautify from 'js-beautify';

describe("A single card", () => {
    it('could be empty', () => {
        var card = {};
        var rendered = cards.card(card);

        expect(beautify.html(rendered.outerHTML))
            .toBe(expectedFile('single_gray_card_empty.html'));
    });
    
    it('should render title', () => {
        var card = {
            content: [
                {
                    type: 'title',
                    content: 'Titre de la carte.'
                }
            ]
        };
        var rendered = cards.card(card);

        expect(beautify.html(rendered.outerHTML))
            .toBe(expectedFile('single_gray_card_with_header.html'));
    });

    it('should render with long text', () => {
        var card = {
            content: [
                {
                    type: 'long-text',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui magna, tristique ac volutpat sed, sollicitudin molestie magna. Cras sed purus at metus viverra venenatis a et dolor. Pellentesque egestas nisi in mollis aliquam. Sed scelerisque fermentum tincidunt. Nulla interdum venenatis sapien, sit amet condimentum lectus. Phasellus malesuada semper quam, ut pulvinar dolor iaculis vitae. Praesent eu lorem quis nisl lobortis venenatis non id massa. Curabitur non ex sodales, mollis tellus in, dapibus purus. Maecenas eget odio commodo, posuere sapien eget, congue arcu. Donec id facilisis lectus. Proin vitae ipsum libero. Quisque vitae tellus dui. Nulla tincidunt est ac quam faucibus, a lobortis elit venenatis. Sed quis neque sit amet leo finibus cursus. Aenean gravida consectetur erat, sit amet lobortis magna volutpat iaculis.'
                }
            ]
        };
        var rendered = cards.card(card);

        expect(beautify.html(rendered.outerHTML))
            .toBe(expectedFile('single_gray_card_with_long_text.html'));
    });

    it('should render with title and long text', () => {
        var card = {
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
        };
        var rendered = cards.card(card);

        expect(beautify.html(rendered.outerHTML))
            .toBe(expectedFile('single_gray_card.html'));
    });
});

function expectedFile(filename){
        return fs.readFileSync('./src/cards/expects/'+ filename, 'utf-8').trim();
}

import fs from 'fs';
import importTrelloCard from './import-trello';

function trelloMapper(trelloCard) {
    return importTrelloCard(trelloCard);
}

describe('trello importer', () => {

    it('imports an empty card with name and title', () => {
        verifyMapping('card_empty.json');
    });
    
    it('imports a card with single text from trello description', () => {
        verifyMapping('card_with_title_and_paragraphs_in_description.json',
            'card_with_title_and_texts.json');
    });
    
    it('imports a card with quote from trello description', () => {
        verifyMapping('card_with_quote.json',
            'card_with_monovalued_field.json');
    });
    
    it('imports a card with multi-line quote from trello description', () => {
        verifyMapping('card_with_multiline_quote.json',
            'card_with_multiple_fields.json');
    });
    
    it('imports a card with quote containing header/value separator in trello description', () => {
        verifyMapping('card_with_header-value_quote.json',
            'card_with_multi_valued_field.json');
    });
    
    it('read a card as a card', () => {
        verifyMapping('card_complete.json');
    });
    
});

function verifyMapping(trelloFileName, dedaleFileName=trelloFileName) {
    expect(trelloMapper(readFile('input' + '/' + trelloFileName)))
        .toEqual(readFile('expected' + '/' + dedaleFileName));
}

function readFile(fileName) {
    const fileContent = fs.readFileSync(__dirname + '/' + fileName);
    return JSON.parse(fileContent);
}
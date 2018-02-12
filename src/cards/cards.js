'use strict'

export function card(cardData) {
    var shape = document.createElement('div');
    shape.classList.add('card-shape');

    var card = document.createElement('div');
    card.classList.add('card');

    if(cardData && cardData.content){
        for (let item of cardData.content) {
            let itemElement = createItemElement(item);
            card.appendChild(itemElement);
        }
    }

    shape.appendChild(card); 
    return shape;
}

function createItemElement(item){
    if('title' == item.type) {
        return createTitle(item);
    }
    if('field' == item.type) {
        return createField(item);
    } 
    return createLongText(item);
}

function createTitle(title) {
    let item = document.createElement('div');
    item.classList.add('card-item');
    item.classList.add('emphasized');
    item.classList.add('short');
    
    let titleName = document.createElement('span');
    titleName.classList.add('card-header-name');
    titleName.innerHTML = title.content;

    item.appendChild(titleName);
    return item;
}

function createLongText(text) {
    let item = document.createElement('div');
    item.classList.add('card-item');
    item.classList.add('card-long-text');
    item.innerHTML = text.content;
    return item;
}

function createField(field) {
    let item = document.createElement('div');
    item.classList.add('card-item');
    item.classList.add('short');
    item.classList.add('no-padding');
    
    let header = document.createElement('div');
    header.classList.add('card-field-header');
    header.innerHTML = field.header;
    
    let value = document.createElement('div');
    value.classList.add('card-field-value');
    value.innerHTML = field.value;

    let fieldElement = document.createElement('div');
    fieldElement.classList.add('card-field'); 
    fieldElement.appendChild(header);
    fieldElement.appendChild(value);

    item.appendChild(fieldElement);
    return item;
}

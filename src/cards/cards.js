'use strict'

export function card(cardData) {
    var shape = document.createElement('div');
    shape.classList.add('card-shape');

    var card = document.createElement('div');
    card.classList.add('card');

    if(cardData && cardData.content){
        // for (let item in cardData.content) {
        let item = cardData.content[0];
        if('title' == item.type) {
            card.appendChild(createTitle(item.content));
        } else {
            card.appendChild(createLongText(item.content));
        }
        // }
    }

    shape.appendChild(card); 
    return shape;
}

function createTitle(title) {
    let item = document.createElement('div');
    item.classList.add('card-item');
    item.classList.add('emphasized');
    item.classList.add('short');
    
    let titleName = document.createElement('span');
    titleName.classList.add('card-header-name');
    titleName.innerHTML = title;

    item.appendChild(titleName);
    return item;
}

function createLongText(text) {
    let item = document.createElement('div');
    item.classList.add('card-item');
    item.classList.add('card-long-text');
    item.innerHTML = text;
    return item;
}

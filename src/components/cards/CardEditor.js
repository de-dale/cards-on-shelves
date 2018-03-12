'use strict';

import React, {Component} from 'react';

import {CardItemInput} from './inputs/CardItemInput.js';

export class CardEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        };
        this.handleCardChange = this.handleCardChange.bind(this);
        this.createItem = this.createItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const card = this.state.card;
        const cardItems = card.content || [];
        const cardItemInputs = cardItems.map((item, index) =>
            <CardItemEditor key={index} item={item} onUpdate={this.updateItem} onRemove={this.removeItem}/>
        );

        return (
            <form className="card-editor">
                <input name="name" type="text" value={card.name} onChange={this.handleCardChange}/>
                <button type="button" onClick={this.createItem}>+</button>
                <fieldset>
                    {cardItemInputs}
                </fieldset>
            </form>
        );
    }

    handleCardChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let card = this.state.card;
        card[name] = value;

        this.updateCard(card);
    }

    createItem() {
        const aNewItem = {
            "type": "title",
            "content": ""
        };
        let card = this.state.card;
        card.content.push(aNewItem);

        this.updateCard(card);
    }

    removeItem(item) {
        let card = this.state.card;
        let itemIndex = card.content.indexOf(item);
        card.content.splice(itemIndex, 1);

        this.updateCard(card);
    }

    updateCard(card) {
        this.onUpdate(card);
    }

    updateItem(item) {
        this.refresh();
    }

    refresh() {
        let card = this.state.card;
        this.updateCard(card);
    }
}

class CardItemEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.onUpdate = props.onUpdate;
        this.onRemove = props.onRemove;
    }

    render() {
        let item = this.state.item;
        return (
            <div className="card-item-editor">
                <CardItemTypeSelector item={item} onUpdate={this.onUpdate}/>
                <CardItemInput item={item} onUpdate={this.onUpdate}/>
                <button type="button" onClick={this.onRemove}>-</button>
            </div>
        );
    }

}

class CardItemTypeSelector extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        let item = this.state.item;
        const itemTypes = [
            {"name": "title", "label": "Titre"},
            {"name": "field", "label": "Clé/Valeur"},
            {"name": "text", "label": "Texte long"}
        ];

        const typesOptions = itemTypes.map((itemType, index) =>
            <option key={index} value={itemType.name}>{itemType.label}</option>
        );

        return (
            <select value={item.type} onChange={this.handleTypeChange}>
                {typesOptions}
            </select>
        );
    }

    handleTypeChange(event) {
        let item = this.state.item;
        item.type = event.target.value;

        this.updateItem(item)
    }

    updateItem(item) {
        this.setState({
            item: item
        });
        this.onUpdate(item);
    }

}

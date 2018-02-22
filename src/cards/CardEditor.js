'use strict'

import React from 'react';
import classNames from 'classnames';

import { Card } from './Card.js';

export class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        };
        this.handleCardChange = this.handleCardChange.bind(this);
        this.updateItem= this.updateItem.bind(this);
    }

    render() {
        const card = this.state.card;
        const cardItems = card.content || [];
        const cardItemInputs = cardItems.map((item, index) =>
            <CardItemInput key={index} item={item} onUpdate={ this.updateItem }/>
        );

        return (
            <div className="card-editor-container">
                <div className="sheet-name">{card.name}</div>
                <Card card={card} />
                <form className="card-editor">
                    <input name="name" type="text" value={card.name} onChange={ this.handleCardChange } />
                    {false &&
                    <div className="card-editor-toolbar">
                        <button>Titre</button>
                        <button>Zone de texte</button>
                        <button>Clé/Valeur</button>
                    </div>
                    }
                    <fieldset>
                        {cardItemInputs}
                    </fieldset>
                </form>
            </div>
        );
    }

    handleCardChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let card = this.state.card;
        card[name] = value;

        this.updateCard(card);
    }

    updateCard(card) {
        this.setState({card: card});
    }

    updateItem(item) {
        this.refresh();
    }

    refresh() {
        let card = this.state.card;
        this.updateCard(card);
    }
}

function CardItemInput(props){
    let item = props.item;
    if('title' == item.type) {
        return <CardTitleInput item={item} onUpdate={props.onUpdate}/>;
    }
    if('field' == item.type) {
        return <CardFieldInput item={item} onUpdate={props.onUpdate} />;
    } 
    return <CardTextInput item={item} onUpdate={props.onUpdate} />;
}

class CardTitleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleItemChange = this.handleItemChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const item = this.state.item;
        return (
            <input type="text" value={item.content} onChange={ this.handleItemChange } />
        );
    }
    
    handleItemChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let item = this.state.item;
        item.content = value;

        this.updateItem(item)
    }

    updateItem(item){
        this.setState({
            item: item
        });
        this.onUpdate(item);
    }
}

function CardFieldInput(props) {
    let item = props.item;
    return (
        <div className="card-item short no-padding">
            <div className="card-field">
                <div className="card-field-header">{item.header}</div>
                <div className="card-field-value">{item.value}</div>
            </div>
        </div>
    );
}

function CardTextInput(props) {
    const item = props.item;
    return (<div className="card-item card-long-text">{item.content}</div>);
}


'use strict'

import React from 'react';

import { Card } from './Card.js';
import { CardEditor } from './CardEditor.js';
import { CardAdder } from './CardAdder.js';
import { CardImporter } from './CardImporter.js';
import { CodexExporter } from './CodexExporter.js';

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: props.name,
            cards: props.cards || []
        }
        this.addAll = this.addAll.bind(this);
        this.createCard = this.createCard.bind(this);
        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    addAll(cards) {
        this.setState((previous, props) => ({
            cards: previous.cards.concat(...cards)
        }));
    }

    createCard() {
        const aNewCard = {
            "name": "",
            "content": []
        };
        this.addCard(aNewCard);
    }

    addCard(card) {
        this.addAll([card]);
    }

    removeCard(card) {
        let cards = this.state.cards;
        let cardIndex = cards.indexOf(card);
        cards.splice(cardIndex, 1);

        this.setState({
            cards: cards
        });

    }

    render() {
        const name = this.state.name;
        const cards = this.state.cards.map((card, index) =>
             <CardEditor key={index} card={card} onDuplicate={ () => this.addCard(card) } onRemove= { () => this.removeCard(card) }/>
        );
        return (
            <div>
                <h1>{name}</h1>
                <CardAdder onAdd={ this.createCard } />
                <CardImporter onImport={ this.addAll } />
                <CodexExporter codex={ this.state } /> 
                <div className="card-container">
                    {cards}
                </div>
            </div>);
    }
}

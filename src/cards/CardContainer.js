'use strict'

import React from 'react';

import { Card } from './Card.js';
import { CardImporter } from './CardImporter.js';

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: props.name,
            cards: props.cards || []
        }
        this.addAll= this.addAll.bind(this);
    }

    addAll(cards) {
        this.setState((previous, props) => ({
            cards: previous.cards.concat(...cards)
        }));
    }

    render() {
        const name = this.state.name;
        const cards = this.state.cards.map((item, index) =>
             <Card key={index} card={item} />
        );
        return (
            <div>
                <h1>{name}</h1>
                <CardImporter onImport={this.addAll} />
                <div className="card-container">
                    {cards}
                </div>
            </div>);
    }
}

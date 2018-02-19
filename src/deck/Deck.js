'use strict'

import React from 'react';

import { Card } from '../cards/Card.js';

export class Deck extends React.Component {
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
            <div className="deck">
                {cards}
            </div>);
    }
}

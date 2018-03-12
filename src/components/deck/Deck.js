'use strict';

import React, {Component} from 'react';

import { Card } from '../cards/Card.js';

export class Deck extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            cards: props.cards || []
        };
        this.addAll= this.addAll.bind(this);
    }

    addAll(cards) {
        this.setState({
            cards: this.state.cards.concat(...cards)
        });
    }

    render() {
        const cards = this.state.cards.map((item, index) =>
             <Card key={index} card={item} />
        );
        return (
            <div className="deck">
                {cards}
            </div>);
    }
}

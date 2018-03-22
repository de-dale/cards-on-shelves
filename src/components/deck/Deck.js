'use strict';

import React, {Component} from 'react';

import {Card} from '../cards/Card.js';
import './deck.css';

export class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            cards: props.cards || []
        };
    }

    render() {
        const cards = this.state.cards.map((item, index) => {
            return (
                <div key={index} className={((index + 1) % 9 === 0) ? "page-break" : undefined}>
                    <Card card={item}/>
                </div>
            );
        });
        return (
            <div className="deck">
                {cards}
            </div>);
    }
}

'use strict'

import React from 'react';

import { Card } from './Card.js';

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.cards = props.cards || [];
    }

    render() {
        const name = this.name;
        const cards = this.cards.map((item, index) =>
             <Card key={index} card={item} />
        );
        return (
            <div>
                <h1>{name}</h1>
                <div className="card-container">
                    {cards}
                </div>
            </div>);
    }
}

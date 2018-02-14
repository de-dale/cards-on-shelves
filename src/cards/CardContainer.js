'use strict'

import React from 'react';

import { Card } from './Card.js';

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (<div>
            <h1>Cartes  : {this.props.name}</h1>
            <Card card={this.props.card} />
        </div>);
    }
}

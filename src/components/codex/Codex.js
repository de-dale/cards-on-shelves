'use strict';

import React, { Component } from 'react';

import { CardContainer } from '../cards/CardContainer.js';
import { CodexExporter } from './CodexExporter.js';

export class Codex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codex: {
                name: props.name,
                cards: props.cards || []
            }
        };
        this.updateCodex = this.updateCodex.bind(this);
        this.updateCards = this.updateCards.bind(this);
    }

    updateCodex(codex) {
        this.setState({ codex : codex });
    }

    updateCards(cards) {
        let codex = this.state.codex;
        codex.cards = cards;
        console.log('CARDS Updated', cards);
        this.updateCodex(codex);
    }

    render() {
        let codex = this.state.codex;
        let cards = codex.cards;
        return (
            <div className="codex">
                <h1>{ codex.name }</h1>
                <CodexExporter codex={ codex } />
                <CardContainer cards={ cards } onUpdateContainer={ this.updateCards }/>
            </div>);
    }
}

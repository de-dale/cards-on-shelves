'use strict';

import React, {Component} from 'react';

import {CardContainer} from '../cards/CardContainer.js';
import {CodexExporter} from './CodexExporter.js';
import {DeckButton} from "../deck/DeckButton.js";

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
        this.setState({codex: codex});
    }

    updateCards(cards) {
        let codex = this.state.codex;
        codex.cards = cards;
        this.updateCodex(codex);
    }

    render() {
        const codex = this.state.codex;
        const cards = codex.cards;
        return (
            <div className='codex'>
                <h1>{codex.name}</h1>
                <CodexExporter codex={codex}/>
                <DeckButton label="Afficher Deck" onLoadDeck={() => {
                    return {
                        name: codex.name,
                        cards: codex.cards
                    };
                }}/>
                <CardContainer cards={cards} onUpdateContainer={this.updateCards}/>
            </div>);
    }
}

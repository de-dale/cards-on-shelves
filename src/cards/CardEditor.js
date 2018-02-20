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
    }

    render() {
        const card = this.state.card;
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

        this.setState({
            card: card
        });
    }
}

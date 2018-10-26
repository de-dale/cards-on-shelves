import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Deck from './Deck.js';
import PopupButton from '../popup/PopupButton';

class DeckButton extends Component {
    constructor(props) {
        super(props);
        this.loadDeck = this.loadDeck.bind(this);
    }

    loadDeck(){
        return this.props.onLoadDeck();
    }

    render() {
        const deck = this.loadDeck();
        return (
            <PopupButton label={this.props.label} name={deck.name}>
                <Deck cards={deck.cards}/>
            </PopupButton>
        );
    }
}

DeckButton.propTypes = {
    label: PropTypes.string.isRequired,
    onLoadDeck: PropTypes.func.isRequired
};

export default DeckButton;

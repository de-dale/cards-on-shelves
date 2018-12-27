import React from 'react';
import PropTypes from 'prop-types';

import Deck from './Deck.js';
import PopupButton from '../popup/PopupButton';

const DeckButton = ({ label, onLoadDeck }) => {
    const deck = onLoadDeck();
    return (
        <PopupButton label={ label } name={ deck.name }>
            <Deck cards={ getCards(deck) }/>
        </PopupButton>
    );
};

function getCards(deck) {
    return deck.cards || [ { id: 5 } ];
}

DeckButton.propTypes = {
    label: PropTypes.string.isRequired,
    onLoadDeck: PropTypes.func.isRequired
};

export default DeckButton;

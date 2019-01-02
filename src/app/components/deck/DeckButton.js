import React from 'react';
import PropTypes from 'prop-types';

import Deck from 'components/deck';
import PopupButton from 'components/popup/PopupButton';

const DeckButton = ({ label, onLoadDeck }) => {
    const deck = onLoadDeck();
    return (
        <PopupButton label={ label } name={ deck.name }>
            <Deck cards={ deck.children }/>
        </PopupButton>
    );
};

DeckButton.propTypes = {
    label: PropTypes.string.isRequired,
    onLoadDeck: PropTypes.func.isRequired
};

export default DeckButton;

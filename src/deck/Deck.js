import React from 'react';
import PropTypes from 'prop-types';

import Card from '../cards/';
import './deck.css';

const Deck = ({ cards }) => {
    return (
        <div className="deck">
            { cards.map((card, index) => (
                <Card key={ index } card={ card }/>
            )) }
        </div>
    );

};

Deck.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Deck;

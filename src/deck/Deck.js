import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from '../cards/Card.js';
import './deck.css';

class Deck extends Component {

    render() {
        const cards = this.props.cards.map((item, index) =>
            <Card key={index} card={item}/>
        );
        return (
            <div className="deck">
                {cards}
            </div>);
    }
}

Deck.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Deck;

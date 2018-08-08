import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardItemContainer from './items/CardItemContainer.js';

import styles from './card.css';
import './theme/card-themes.css';

class Card extends Component {
    render() {
        const shapeClasses = classNames.bind(styles)('card-shape', {
            landscape: 'landscape' === this.props.card.shape,
        }, this.props.card.theme);
        return (
            <div className={shapeClasses}>
                <CardItemContainer container={this.props.card.content} />
            </div>
        );
    }
}


Card.defaultProps = {
    card: {content: []}
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;

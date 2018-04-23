import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CardItemContainer } from './items/CardItemContainer.js';

import styles from './card.css';

export class Card extends Component {
    render() {
        //TODO je ne comprends pas très bien l'utilisation du bind ici
        const shapeClasses = classNames.bind(styles)('card-shape', {
            landscape: 'landscape' === this.props.card.shape,
        });
        return (
            <div className={shapeClasses}>
                <CardItemContainer container={this.props.card.content || []} />
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object
    //TODO Qu'est-ce qui devait être obligatoire comme props ici ?
    // card: PropTypes.shape({
    //     content: PropTypes.array.isRequired
    // }).isRequired
};

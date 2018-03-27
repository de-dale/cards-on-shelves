'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {CardItemContainer} from './items/CardItemContainer.js';

import styles from './card.css';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.card = props.card;
        this.container = this.card.content || [];
    }

    render() {
        const card = this.card;
        const shapeClasses = classNames.bind(styles)('card-shape',
            {'landscape': 'landscape' === card.shape}
        );
        return (
            <div className={shapeClasses}>
                <CardItemContainer container={this.container}/>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.shape({
        content: PropTypes.array.isRequired
    }).isRequired
};

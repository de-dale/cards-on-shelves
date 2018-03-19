'use strict';

import React, {Component} from 'react';
import classNames from 'classnames';

import {CardItemContainer} from './items/CardItemContainer.js';

import styles from './card.css';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.card = props.card;
        this.cardItems = props.card.content || [];
    }

    render() {
        const card = this.card;
        const shapeClasses = classNames.bind(styles)('card-shape',
            {'landscape': 'landscape' === card.shape}
        );
        return (
            <div className={shapeClasses}>
                <CardItemContainer cardItems={this.cardItems}/>
            </div>
        );
    }
}

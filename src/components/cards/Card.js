'use strict';

import React, {Component} from 'react';
import classNames from 'classnames';

import {CardItemContainer} from './items/CardItemContainer.js';

export class Card extends Component{
    constructor(props) {
        super(props);
        this.card = props.card;
        this.cardItems = props.card.content || [];
    }

    render() {
        const card = this.card;
        const shapeClasses = classNames('card-shape',
            {'landscape': 'landscape' === card.shape}
        );
        return (
            <div className={shapeClasses}>
                <CardItemContainer cardItems={ this.cardItems } />
            </div>
        );
    }
}

'use strict';

import React, {Component} from 'react';
import classNames from 'classnames';

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
        const cardClasses = classNames('card');
        const cardItems = this.cardItems.map((item, index) =>
            <CardItem key={index} item={item} />
        );
        return (
            <div className={shapeClasses}>
                <div className={cardClasses}>
                    {cardItems}
                </div>
            </div>
        );
    }
}

function CardItem(props){
    let item = props.item;
    if('title' === item.type) {
        return <CardTitle item={item} />;
    }
    if('field' === item.type) {
        return <CardField item={item} />;
    } 
    return <CardText item={item} />;
}

function CardTitle(props) {
    const item = props.item;
    return (
        <div className="card-item emphasized short">
            <span className="card-header-name">{item.content}</span>
        </div>
    );
}

function CardField(props) {
    let item = props.item;
    return (
        <div className="card-item short no-padding">
            <div className="card-field">
                <div className="card-field-header">{item.header}</div>
                <div className="card-field-value">{item.content}</div>
            </div>
        </div>
    );
}

function CardText(props) {
    const item = props.item;
    return (<div className="card-item card-long-text">{item.content}</div>);
}

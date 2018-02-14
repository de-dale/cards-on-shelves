'use strict'

import React from 'react';
import classNames from 'classnames';

export class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const card = this.props.card;
        const shapeClasses = classNames('card-shape',
            {'landscape': 'landscape' == card.type}
        );
        const cardClasses = classNames('card');
        const items = card.content || [];
        const listItems = items.map((item, index) =>
            <CardItem key={index} item={item} />
        );
        return (
            <div className={shapeClasses}>
                <div className={cardClasses}>
                    {listItems}
                </div>
            </div>
        );
    }
}

function CardItem(props){
    let item = props.item;
    if('title' == item.type) {
        return <CardTitle item={item} />;
    }
    if('field' == item.type) {
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
                <div className="card-field-value">{item.value}</div>
            </div>
        </div>
    );
}

function CardText(props) {
    const item = props.item;
    return (<div className="card-item card-long-text">{item.content}</div>);
}

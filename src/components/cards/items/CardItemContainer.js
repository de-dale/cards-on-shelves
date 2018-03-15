'use strict';

import React, {Component} from 'react';

import {CardItemTypes} from "./CardItemTypes";

export class CardItemContainer extends Component {

    constructor(props) {
        super(props);
        this.cardItems = props.cardItems || [];
    }

    render() {
        const cardItems = this.cardItems.map((item, index) =>
            <CardItem key={index} item={item}/>
        );
        return (
            <div className="card">
                {cardItems}
            </div>
        );
    }
}

const CardItem = (props) => {
    const item = props.item;
    const ItemHandler = CardItemTypes[item.type].view || DefaultCardItem;

    return <ItemHandler item={item}/>;
};

const DefaultCardItem = () => {
    return <div>Empty</div>;
};

'use strict';

import React, {Component} from 'react';

import {CardItemTypes} from "./CardItemTypes";

import styles from './card-item-container.css';

export class CardItemContainer extends Component {

    constructor(props) {
        super(props);
        this.cardItems = props.cardItems || [];
    }

    render() {
        const cardItems = this.cardItems.map((item, index) =>
            <CardItem className={styles["card-item"]} key={index} item={item}/>
        );
        return (
            <div className={styles.card}>
                {cardItems}
            </div>
        );
    }
}

const CardItem = (props) => {
    const item = props.item;
    const ItemHandler = CardItemTypes[item.type].view || DefaultCardItem;

    return <ItemHandler {...props} />;
};

const DefaultCardItem = () => {
    return <div>Empty</div>;
};

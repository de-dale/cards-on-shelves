import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CardItemTypes} from './CardItemTypes';

import styles from './card-item-container.css';

class CardItemContainer extends Component {

    constructor(props) {
        super(props);
        this.container = props.container || [];
    }

    render() {
        const cardItems = this.container.map((item, index) =>
            <CardItem className={styles['card-item']} key={index} item={item}/>
        );
        return (
            <div className={styles.card}>
                {cardItems}
            </div>
        );
    }
}

CardItemContainer.propTypes = {
    container: PropTypes.array.isRequired
};

const CardItem = (props) => {
    const item = props.item;
    const ItemHandler = CardItemTypes[item.type].view || DefaultCardItem;
    return <ItemHandler {...props} />;
};

const DefaultCardItem = () => {
    return <div>Empty</div>;
};

CardItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default CardItemContainer;

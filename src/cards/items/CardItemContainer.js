import React from 'react';
import PropTypes from 'prop-types';

import {CardItemTypes} from './CardItemTypes';

import styles from './card-item-container.css';

const CardItemContainer = ({container}) => {
    return (
        <div className={styles.card}>
            {container.map((item, index) =>
                <CardItem className={styles['card-item']} key={index} item={item}/>
            )}
        </div>
    );
};

CardItemContainer.propTypes = {
    container: PropTypes.array.isRequired
};

const CardItem = ({item}) => {
    const ItemHandler = CardItemTypes[item.type] && CardItemTypes[item.type].view || DefaultCardItem;
    return <ItemHandler item={item} />;
};

const DefaultCardItem = () => {
    return <div>Empty</div>;
};

CardItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default CardItemContainer;

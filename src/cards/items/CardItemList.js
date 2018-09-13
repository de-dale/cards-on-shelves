import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '.';

import styles from './card-item-container.css';

const CardItemList = ({card}) => {
    return (
        <div className={styles.card}>
            {card.content.map((item, index) =>
                <CardItem className={styles['card-item']} key={index} card={card} item={item}/>
            )}
        </div>
    );
};

CardItemList.propTypes = {
    card: PropTypes.object.isRequired
};

export default CardItemList;

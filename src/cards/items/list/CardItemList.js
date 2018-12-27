import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '..';

import styles from '../styles.css';

const CardItemList = ({ card, items }) => (
    <div className={ styles[ 'card-items' ] }>
        { items.map((item, index) =>
            <CardItem className={ styles[ 'card-item' ] } key={ index } card={ card } item={ item }/>
        ) }
    </div>
);


CardItemList.propTypes = {
    card: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

export default CardItemList;

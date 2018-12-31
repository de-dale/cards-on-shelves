import React from 'react';
import PropTypes from 'prop-types';

import CardItemTypeSelector from 'components/items/types/CardItemTypeSelector';

import styles from './styles.css';

export const CardItemToolbar = ({ item, updateItemField, removeCardItem }) => (
    <div className={ styles[ 'card-item-toolbar' ] }>
        <CardItemTypeSelector item={ item } updateItemField={ updateItemField }/>
        <button type="button" onClick={ removeCardItem }>-</button>
    </div>
);

CardItemToolbar.propTypes = {
    card: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    updateItemField: PropTypes.func.isRequired,
    removeCardItem: PropTypes.func.isRequired
};

export default CardItemToolbar;

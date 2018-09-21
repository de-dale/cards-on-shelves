import React from 'react';
import PropTypes from 'prop-types';

import CardItemTypeSelector from '../types/CardItemTypeSelector';

import styles from './style.css';

export const CardItemEditor = ({ card, item, updateItemField, removeCardItem }) => {
    return (
        <div className={styles['card-item-editor']}>
            <CardItemTypeSelector card={card} item={item} updateItemField={updateItemField}/>
            <button type="button" onClick={removeCardItem}>-</button>
        </div>
    );

};

CardItemEditor.propTypes = {
    card: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    updateItemField: PropTypes.func.isRequired,
    removeCardItem: PropTypes.func.isRequired
};

export default CardItemEditor;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const CardToolbar = ({ duplicate, remove, addCardItem }) => {
    return (
        <div className={styles['card-toolbar']}>
            <button type="button" onClick={() => duplicate()}>Dupliquer</button>
            <button type='button' onClick={() => remove()}>Supprimer</button>
            <button type='button' onClick={() => addCardItem()}>+</button>
        </div>
    );
};

CardToolbar.propTypes = {
    duplicate: PropTypes.func,
    remove: PropTypes.func,
    addCardItem: PropTypes.func
};

export default CardToolbar;

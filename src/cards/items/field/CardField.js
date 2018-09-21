import React from 'react';
import PropTypes from 'prop-types';

import styles from './card-field.css';

export const CardField = ({ item, updateItemField }) => {
    return (
        <div className={styles['card-field-container']}>
            <div
                className={styles['card-field-header']}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={e => updateItemField('header', e.target.textContent)}>
                {item.header}
            </div>
            <div className={styles['card-field-separator']}/>
            <div
                className={styles['card-field-value']}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={e => updateItemField('content', e.target.textContent)}>
                {item.content}
            </div>
        </div>
    );
};


CardField.propTypes = {
    item: PropTypes.shape({
        header: PropTypes.string,
        content: PropTypes.string.isRequired
    }).isRequired,
    updateItemField: PropTypes.func
};

export default CardField;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export const CardTitle = ({ item, updateItemField }) => {
    return (
        <div
            className={styles['card-title']}
            contentEditable="true"
            suppressContentEditableWarning={true}
            onBlur={e => updateItemField('content', e.target.textContent)}>
            {item.content}
        </div>
    );
};

CardTitle.propTypes = {
    item: PropTypes.shape({
        content: PropTypes.string.isRequired
    }).isRequired,
    updateItemField: PropTypes.func
};

export default CardTitle;

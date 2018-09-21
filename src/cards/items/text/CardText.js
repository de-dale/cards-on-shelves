import React from 'react';
import PropTypes from 'prop-types';

import styles from './card-text.css';

export const CardText = ({ item, updateItemField }) => {
    return (
        <div
            className={styles['card-text']}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={e => updateItemField('content', e.target.textContent)}>
            {item.content}
        </div>
    );
};

CardText.propTypes = {
    item: PropTypes.shape({
        content: PropTypes.string.isRequired
    }).isRequired,
    updateItemField: PropTypes.func
};

export default CardText;

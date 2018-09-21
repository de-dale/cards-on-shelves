import React from 'react';
import PropTypes from 'prop-types';

import CardItemTypes from './CardItemTypes';

const CardItemTypeSelector = ({ item, updateItemField }) => {
    const typesOptions = CardItemTypes.values((key, value) => {
        return (<option key={key} value={key}>{value.label}</option>);
    });
    return (
        <select value={item.type} onChange={(e) => updateItemField('type', e.target.value)}>
            {typesOptions}
        </select>
    );

};

CardItemTypeSelector.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired
    }).isRequired,
    updateItemField: PropTypes.func.isRequired
};

export default CardItemTypeSelector;

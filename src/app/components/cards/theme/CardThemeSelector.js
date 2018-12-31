import React from 'react';
import PropTypes from 'prop-types';

import CardThemesTypes from './CardThemesTypes.js';

const CardThemeSelector = ({ card, onUpdate }) => (
    <select name='theme' value={ card.theme } onChange={ onUpdate }>
        { Object.values(CardThemesTypes).map((o, key) => (
            <option key={ key } value={ o.name }>{ o.label }</option>
        )) }
    </select>
);


CardThemeSelector.propTypes = {
    card: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default CardThemeSelector;

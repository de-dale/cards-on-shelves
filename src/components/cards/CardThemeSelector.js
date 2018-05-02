import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CardThemesTypes} from './CardThemesTypes.js';

class CardThemeSelector extends Component {

    render() {
        const typesOptions = CardThemesTypes.values((key, value) => {
            return (<option key={key} value={value.name}>{value.label}</option>);
        });

        return (
            <select name='theme' value={this.props.card.theme} onChange={this.props.onUpdate}>
                {typesOptions}
            </select>
        );
    }

}

CardThemeSelector.propTypes = {
    card: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default CardThemeSelector;

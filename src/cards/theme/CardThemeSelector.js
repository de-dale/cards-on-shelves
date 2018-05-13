import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CardThemesTypes from './CardThemesTypes.js';

class CardThemeSelector extends Component {

    render() {
        return (
            <select name='theme' value={this.props.card.theme} onChange={this.props.onUpdate}>
                {Object.values(CardThemesTypes).map((o, key) => {
                    return (<option key={key} value={o.name}>{o.label}</option>);
                })}
            </select>
        );
    }

}

CardThemeSelector.propTypes = {
    card: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default CardThemeSelector;

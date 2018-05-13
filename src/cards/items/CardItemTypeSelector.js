import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CardItemTypes} from './CardItemTypes';

class CardItemTypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const item = this.state.item;

        const typesOptions = CardItemTypes.values((key, value) => {
            return (<option key={key} value={key}>{value.label}</option>);
        });

        return (
            <select value={item.type} onChange={this.handleTypeChange}>
                {typesOptions}
            </select>
        );
    }

    handleTypeChange(event) {
        let item = this.state.item;
        item.type = event.target.value;

        this.updateItem(item);
    }

    updateItem(item) {
        this.setState({
            item: item
        });
        this.onUpdate(item);
    }

}

CardItemTypeSelector.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired
    }).isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default CardItemTypeSelector;

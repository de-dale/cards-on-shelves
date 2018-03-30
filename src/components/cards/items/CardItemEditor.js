'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CardItemTypes} from './CardItemTypes';
import {CardItemTypeSelector} from './CardItemTypeSelector';

export class CardItemEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.onUpdate = props.onUpdate;
        this.onRemove = props.onRemove;
    }

    render() {
        let item = this.state.item;
        return (
            <div className="card-item-editor">
                <CardItemTypeSelector item={item} onUpdate={this.onUpdate}/>
                <CardItemInput item={item} onUpdate={this.onUpdate}/>
                <button type="button" onClick={this.onRemove}>-</button>
            </div>
        );
    }
}

CardItemEditor.propTypes = {
    item: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

const CardItemInput = (props) => {
    const item = props.item;

    const InputItemHandler = CardItemTypes[item.type].input || DefaultCardItem;
    return <InputItemHandler item={item} onUpdate={props.onUpdate}/>;
};

const DefaultCardItem = () => {
    return <div>Empty</div>;
};

CardItemInput.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired
    }).isRequired,
    onUpdate: PropTypes.func.isRequired
};

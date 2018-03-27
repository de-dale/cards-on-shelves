'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CardItemTypes} from './CardItemTypes';
import {CardItemTypeSelector} from './CardItemTypeSelector';

export class CardItemContainerEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            container: props.container
        };

        this.createItem = this.createItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.onUpdate = props.onUpdate;
    }

    createItem() {
        const container = this.state.container;

        container.push({
            'type': 'title',
            'content': ''
        });

        this.onUpdate(container);
    }

    removeItem(item) {
        const container = this.state.container;

        const itemIndex = container.indexOf(item);
        container.splice(itemIndex, 1);

        this.onUpdate(container);
    }

    updateItem() {
        const container = this.state.container;
        this.onUpdate(container);
    }

    render() {
        const container = this.state.container || [];

        const cardItemInputs = container.map((item, index) =>
            <CardItemEditor key={index} item={item} onUpdate={this.updateItem} onRemove={this.removeItem}/>
        );

        return (
            <div className="card-item-container-editor">
                <button type="button" onClick={this.createItem}>+</button>
                <fieldset>
                    {cardItemInputs}
                </fieldset>
            </div>
        );
    }
}

CardItemContainerEditor.propTypes = {
    container: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
};

class CardItemEditor extends Component {
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

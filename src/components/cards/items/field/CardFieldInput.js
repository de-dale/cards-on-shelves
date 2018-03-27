'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CardFieldInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleHeaderChange = this.handleHeaderChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        let item = this.state.item;
        return (
            <div className="card-input-field">
                <input type="text" value={item.header} onChange={ this.handleHeaderChange } />
                <input type="text" value={item.content} onChange={ this.handleValueChange } />
            </div>
        );
    }

    handleHeaderChange(event) {
        let item = this.state.item;
        item.header = event.target.value;

        this.updateItem(item);
    }

    handleValueChange(event) {
        let item = this.state.item;
        item.content = event.target.value;

        this.updateItem(item);
    }

    updateItem(item){
        this.setState({
            item: item
        });
        this.onUpdate(item);
    }
}


CardFieldInput.propTypes = {
    item: PropTypes.shape({
        header: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired
};

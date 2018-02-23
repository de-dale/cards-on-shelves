'use strict'

import React from 'react';
import classNames from 'classnames';

export class CardTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const item = this.state.item;
        return (
            <div className="card-input-text">
                <textarea value={item.content} onChange={ this.handleTextChange } />
            </div>
        );
    }
    
    handleTextChange(event) {
        let item = this.state.item;
        item.content = event.target.value;

        this.updateItem(item)
    }

    updateItem(item){
        this.setState({
            item: item
        });
        this.onUpdate(item);
    }
}

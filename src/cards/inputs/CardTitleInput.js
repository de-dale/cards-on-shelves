'use strict'

import React from 'react';
import classNames from 'classnames';

export class CardTitleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const item = this.state.item;
        return (
            <div className="card-input-title">
                <input type="text" value={item.content} onChange={ this.handleTitleChange } />
            </div>
        );
    }
    
    handleTitleChange(event) {
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

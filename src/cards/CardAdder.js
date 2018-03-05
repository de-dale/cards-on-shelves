'use strict'

import React from 'react';

export class CardAdder extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd = props.onAdd; 
    }

    render() {
        return (
            <button type="button" onClick={ this.onAdd }>+</button>
        );
    }
}

'use strict';

import React, {Component} from 'react';

export class CardTitle extends Component {

    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;
        return (
            <div className="card-item emphasized short">
                <span className="card-header-name">{item.content}</span>
            </div>
        );
    }
}

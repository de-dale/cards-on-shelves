'use strict';

import React, {Component} from 'react';

export class CardField extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;
        return (
            <div className="card-item short no-padding">
                <div className="card-field">
                    <div className="card-field-header">{item.header}</div>
                    <div className="card-field-value">{item.content}</div>
                </div>
            </div>
        );
    }
}

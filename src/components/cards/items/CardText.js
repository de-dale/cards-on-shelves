'use strict';

import React, {Component} from 'react';

export class CardText extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;
        return (<div className="card-item card-long-text">{item.content}</div>);
    }
}

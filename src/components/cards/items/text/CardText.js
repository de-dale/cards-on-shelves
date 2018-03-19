'use strict';

import React, {Component} from 'react';

import styles from './card-text.css';

export class CardText extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;
        return (<div className={styles["card-text"]}>{item.content}</div>);
    }
}

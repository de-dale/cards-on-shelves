'use strict';

import React, {Component} from 'react';

import styles from './card-field.css';

export class CardField extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;
        return (
            <div className={styles["card-field-container"]}>
                <div className={styles["card-field-header"]}>{item.header}</div>
                <div className={styles["card-field-separator"]}/>
                <div className={styles["card-field-value"]}>{item.content}</div>
            </div>
        );
    }
}

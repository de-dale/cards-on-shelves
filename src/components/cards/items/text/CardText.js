import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './card-text.css';

export class CardText extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;
        return (<div className={styles['card-text']}>{item.content}</div>);
    }
}

CardText.propTypes = {
    item: PropTypes.shape({
        content: PropTypes.string.isRequired
    }).isRequired
};

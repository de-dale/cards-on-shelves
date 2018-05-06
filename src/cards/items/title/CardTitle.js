import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './card-title.css';

class CardTitle extends Component {

    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const item = this.item;

        return (
            <div className={styles['card-title']}>
                {item.content}
            </div>
        );
    }
}

CardTitle.propTypes = {
    item: PropTypes.shape({
        content: PropTypes.string.isRequired
    }).isRequired
};

export default CardTitle;

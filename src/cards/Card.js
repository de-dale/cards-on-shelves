import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardItemList from './items/CardItemList.js';

import styles from './card.css';
import './theme/card-themes.css';

const Card = ({card}) => {
    return (
        <div className={shapeClasses(card)}>
            <CardItemList card={card} />
        </div>
    );
};


function shapeClasses (card){
    return classNames.bind(styles)(
        'card-shape',
        card.theme,
        {landscape: 'landscape' === card.shape}
    );
}

Card.defaultProps = {
    card: {content: []}
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;

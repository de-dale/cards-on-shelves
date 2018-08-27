import React from 'react';
import PropTypes from 'prop-types';

import styles from './cardList.css';
import EditableCard from '../creation';

const CardList = ({cards, createCard, importCards, removeCard}) => {
    return (
        <div className={styles['card-list']}>
            <div className={styles['card-list-toolbar']}>
                <button type="button" onClick={() => createCard()}>+</button>
                <input type="file" onChange={({target: {files}}) => importCards(files)}/>
            </div>
            <div className={styles['card-list-items']}>
                {cards.map((card, index) => (
                    <EditableCard
                        key={index}
                        card={card}
                        remove={() => removeCard(card)}
                    />
                ))}
            </div>
        </div>);
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    createCard: PropTypes.func,
    importCards: PropTypes.func,
    removeCard: PropTypes.func
};

export default CardList;

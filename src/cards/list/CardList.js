import React from 'react';
import PropTypes from 'prop-types';

import styles from './cardList.css';
import EditableCard from '../creation/EditableCard';
import CardToolbar from '../toolbar/CardToolbar';

const CardList = ({cards, createCard, importCards, removeCard}) => {
    return (
        <div className={styles['card-list']}>
            <div className={styles['card-list-toolbar']}>
                <button type="button" onClick={() => createCard()}>+</button>
                <input type="file" onChange={({target: {files}}) => importCards(files)}/>
            </div>
            <div className={styles['card-list-items']}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <CardToolbar
                            card={card}
                            duplicate={() => removeCard(card)}
                            remove={() => removeCard(card)}
                        />
                        <EditableCard
                            key={index}
                            card={card}
                            // addCard={this.addCard}
                            // onRemove={() => removeCard(card)}
                        />
                    </div>
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

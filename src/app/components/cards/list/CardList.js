import React from 'react';
import PropTypes from 'prop-types';

import styles from './cardList.css';
import EditableCard from 'components/cards/creation';
import TrelloImporter from 'components/importers/trello';
import FileImporter from 'components/importers/file';

const CardList = ({ parent, cards, createCard, removeCard }) => (
    <div className={ styles[ 'card-list' ] }>
        <div className={ styles[ 'card-list-toolbar' ] }>
            <button type="button" onClick={ () => createCard(parent) }>+</button>
            <FileImporter parent={ parent }/>
            <TrelloImporter parent={ parent }/>
        </div>
        <div className={ styles[ 'card-list-items' ] }>
            { cards.map((card, index) => (
                <EditableCard
                    key={ index }
                    card={ card }
                    remove={ () => removeCard(card) }
                />
            )) }
        </div>
    </div>
);

CardList.propTypes = {
    parent: PropTypes.object.isRequired,
    cards: PropTypes.array.isRequired,
    createCard: PropTypes.func,
    importCards: PropTypes.func,
    removeCard: PropTypes.func
};

export default CardList;

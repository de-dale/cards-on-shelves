import React from 'react';
import PropTypes from 'prop-types';
import Card from '../cards/Card';

const Codex = ({codex, addCard}) => (
    <div className='codex'>
        <h1>{codex.name}</h1>
        {/*<CodexToolbar onLoadCodex={() => codex}/>*/}
        <button type='button' onClick={() => addCard(aNewCard())}>+</button>
        {/*<CardListContainer cards={cards} onUpdateContainer={this.updateCards}/>*/}
        {codex.cards.map((card, index) =>
            <Card key={index} card={card}/>
        )}
    </div>
);

const aNewCard = () => ({
    name: 'NEW',
    theme: '',
    shape: '',
    content: []
});

Codex.propTypes = {
    codex: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cards: PropTypes.array.isRequired
    }).isRequired,
    addCard: PropTypes.func.isRequired
};

export default Codex;

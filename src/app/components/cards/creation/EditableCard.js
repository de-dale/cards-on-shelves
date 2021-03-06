import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/cards';
import CardToolbar from 'components/cards/toolbar/CardToolbar';

const EditableCard = ({ card, updateCard, remove, createItem }) => {
    return (
        <div className="editable-card"
            tabIndex={-1}
            onFocus={() => updateCard(card, 'editing', true)}
            onBlur={whenBlurs(() => updateCard(card, 'editing', false))}>
            {card.editing &&
            <CardToolbar
                tabIndex={-1}
                card={card}
                duplicate={() => updateCard(card, 'name', 'Duplicate')}
                remove={() => remove()}
                addCardItem={()=> createItem(card)}
            />
            }
            <div
                className="card-name"
                contentEditable="true"
                suppressContentEditableWarning={true}
                onBlur={e => updateCard(card, 'name', e.target.textContent)}
            >{card.name}</div>
            <Card card={card}/>
        </div>
    );
};

const whenBlurs = (fn) => {
    return (e) => {
        if (doesEventBlurs(e)) fn();
    };
};

const doesEventBlurs = ({ currentTarget, relatedTarget }) => {
    return !currentTarget.contains(relatedTarget);
};

EditableCard.propTypes = {
    card: PropTypes.object.isRequired,
    updateCard: PropTypes.func,
    remove: PropTypes.func,
    createItem: PropTypes.func
};

export default EditableCard;

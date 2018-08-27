import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import CardToolbar from '../toolbar/CardToolbar';

const EditableCard = ({card, updateCard, remove}) => {
    return (
        <div className="card-container-item"
            tabIndex={-1}
            onFocus={() => updateCard(card, 'editing', true)}
            onBlur={whenBlurs(() => updateCard(card, 'editing', false))}>
            {card.editing &&
            <CardToolbar
                tabIndex={-1}
                card={card}
                duplicate={() => updateCard(card, 'name', 'Duplicate')}
                remove={() => remove()}
            />
            }
            <div
                className="card-container-item-name"
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

const doesEventBlurs = ({currentTarget, relatedTarget}) => {
    return !currentTarget.contains(relatedTarget);
};

EditableCard.propTypes = {
    card: PropTypes.object.isRequired,
    updateCard: PropTypes.func,
    remove: PropTypes.func
};

export default EditableCard;

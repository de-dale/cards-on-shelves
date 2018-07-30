import React from 'react';
import PropTypes from 'prop-types';
import Card from './../Card';

const EditableCard = ({card, updateCard}) => {
    return (
        <div className="card-container-item">
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


EditableCard.propTypes = {
    card: PropTypes.object.isRequired,
    updateCard: PropTypes.func
};

export default EditableCard;

import React from 'react';
import PropTypes from 'prop-types';

const CardToolbar = ({card, toggleEdition, duplicate, remove}) => {
    return (
        <div className="card-container-item-toolbar">
            <button type="button" onClick={() => toggleEdition(card)}>
                {card.editable
                    ? 'Lecture seule'
                    : 'Éditer'}
            </button>
            <button type="button" onClick={() => duplicate()}>Dupliquer</button>
            <button type='button' onClick={() => remove()}>Supprimer</button>
        </div>
    );

};

CardToolbar.propTypes = {
    card: PropTypes.shape({
        editable: PropTypes.bool.isRequired

    }).isRequired,
    toggleEdition: PropTypes.func,
    duplicate: PropTypes.func,
    remove: PropTypes.func
};

export default CardToolbar;

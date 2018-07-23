import React from 'react';
import PropTypes from 'prop-types';

const CardToolbar = ({duplicate, remove}) => {
    return (
        <div className="card-container-item-toolbar">
            <button type="button" onClick={() => duplicate()}>Dupliquer</button>
            <button type='button' onClick={() => remove()}>Supprimer</button>
        </div>
    );
};

CardToolbar.propTypes = {
    duplicate: PropTypes.func,
    remove: PropTypes.func
};

export default CardToolbar;

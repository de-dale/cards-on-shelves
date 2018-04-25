import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CardEditor} from './CardEditor';
import {Card} from './Card';

export class EditableCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card,
            editMode: props.editMode
        };
        this.onUpdateCard = this.onUpdateCard.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    onUpdateCard(card) {
        this.setState({card: card});
    }

    toggleEditMode() {
        const updatedEditMode = this.isEditable() ? 'readonly': 'edit' ;
        this.setState({editMode: updatedEditMode});
    }

    render() {
        const card = this.state.card;
        return (
            <div className="card-container-item">
                <div className="card-container-item-name">{card.name}</div>

                <div className="card-container-item-toolbar">
                    <button type="button" onClick={this.toggleEditMode}>
                        {this.isEditable()
                            ? 'Lecture seule'
                            : 'Éditer'}
                    </button>
                    <button type="button" onClick={() => this.props.addCard(card)}>Dupliquer</button>
                    <button type='button' onClick={() => this.props.removeCard(card)}>Supprimer</button>
                </div>

                <Card card={card}/>

                {this.isEditable() &&
                <CardEditor card={card} onUpdate={this.onUpdateCard}/>
                }
            </div>
        );
    }

    isEditable() {
        return this.state.editMode === 'edit';
    }
}

EditableCard.propTypes = {
    card: PropTypes.object.isRequired,
    editMode: PropTypes.string,
    addCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired
};

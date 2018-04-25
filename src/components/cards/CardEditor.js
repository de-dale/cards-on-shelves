import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CardItemContainerEditor} from './items/CardItemContainerEditor';

export class CardEditor extends Component {
    constructor(props) {
        super(props);
        this.handleCardChange = this.handleCardChange.bind(this);
        this.updateCardContent = this.updateCardContent.bind(this);
    }

    render() {
        const card = this.props.card;
        const cardItems = card.content || [];

        return (
            <form className="card-editor">
                <input
                    name="name"
                    type="text"
                    value={card.name}
                    onChange={this.handleCardChange}
                />
                <CardItemContainerEditor
                    container={cardItems}
                    onUpdate={this.updateCardContent}
                />
            </form>
        );
    }

    handleCardChange({target}) {
        let card = this.props.card;
        card[target.name] = target.value;

        this.props.onUpdate(card);
    }

    updateCardContent(content) {
        const card = this.props.card;
        card.content = content;

        this.props.onUpdate(card);
    }
}

CardEditor.propTypes = {
    card: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

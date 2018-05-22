import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardItemContainerEditor from './../items/CardItemContainerEditor';
import CardThemeSelector from './../theme/CardThemeSelector';

class CardEditor extends Component {
    constructor(props) {
        super(props);
        this.handleCardChange = this.handleCardChange.bind(this);
        this.updateCardContent = this.updateCardContent.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange ({target: {value}}) {
        this.props.changeTitle(value);
    }

    render() {
        const card = this.props.card;
        const cardItems = card.content || [];

        return (
            <form className="card-editor">
                <input
                    name="name"
                    type="text"
                    value={this.props.title}
                    onChange={this.onTitleChange}
                />
                <CardThemeSelector
                    card={card}
                    onUpdate={this.handleCardChange}
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
    changeTitle: PropTypes.func,
    title: PropTypes.string,
    card: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default CardEditor;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CardListContainer from './../cards/list/CardList';
import CodexToolbar from './CodexToolbar';

class Codex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codex: {
                name: props.name,
                cards: props.cards || []
            }
        };
        this.updateCodex = this.updateCodex.bind(this);
        this.updateCards = this.updateCards.bind(this);
    }

    updateCodex(codex) {
        this.setState({codex});
    }

    updateCards(cards) {
        let codex = this.state.codex;
        codex.cards = cards;
        this.updateCodex(codex);
    }

    render() {
        const codex = this.state.codex;
        const cards = codex.cards;
        return (
            <div className='codex'>
                <h1>{codex.name}</h1>
                <CodexToolbar onLoadCodex={() => codex}/>
                <CardListContainer cards={cards} onUpdateContainer={this.updateCards}/>
            </div>
        );
    }
}

Codex.propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array
};

export default Codex;

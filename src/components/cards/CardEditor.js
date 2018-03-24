'use strict';

import React, {Component} from 'react';
import {CardItemContainerEditor} from "./items/CardItemContainerEditor";

export class CardEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        };
        this.handleCardChange = this.handleCardChange.bind(this);
        this.updateCardContent = this.updateCardContent.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const card = this.state.card;
        const cardItems = card.content || [];

        return (
            <form className="card-editor">
                <input name="name" type="text" value={card.name} onChange={this.handleCardChange}/>
                <CardItemContainerEditor container={cardItems} onUpdate={this.updateCardContent} onRemove={this.removeItem}/>
            </form>
        );
    }

    handleCardChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let card = this.state.card;
        card[name] = value;

        this.props.onUpdate(card);
    }

    updateCardContent(content) {
        const card = this.state.card;
        card.content = content;
        this.props.onUpdate(card);
    }
}

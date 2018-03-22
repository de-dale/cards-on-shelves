'use strict';

import React, {Component} from 'react';

import {Deck} from "./Deck.js";
import {PopupButton} from "../popup/PopupButton";

export class DeckButton extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.cards = props.cards;
    }

    render() {
        return (
            <PopupButton label={this.props.label} name={this.name}>
                <Deck cards={this.cards}/>
            </PopupButton>
        );
    }
}

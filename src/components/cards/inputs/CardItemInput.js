'use strict';

import React, {Component} from 'react';

import { CardTitleInput } from './CardTitleInput.js';
import { CardFieldInput } from './CardFieldInput.js';
import { CardTextInput } from './CardTextInput.js';

export class CardItemInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.onUpdate = props.onUpdate;
        this.onRemove = props.onRemove;
    }

    render() {
        let item = this.state.item;
        if('title' === item.type) {
            return <CardTitleInput item={ item } onUpdate={ this.onUpdate } />
        }
        if('field' === item.type) {
            return <CardFieldInput item={ item } onUpdate={ this.onUpdate } />
        } 
        return <CardTextInput item={ item } onUpdate={ this.onUpdate } />
    }
}

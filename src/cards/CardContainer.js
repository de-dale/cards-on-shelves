'use strict'

import React from 'react';

import { Card } from './Card.js';

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.cards = props.cards || [];
    }

    render() {
        const name = this.name;
        const cards = this.cards.map((item, index) =>
             <Card key={index} card={item} />
        );
        return (
            <div>
                <h1>{name}</h1>
                {cards.length == 0 &&
                    <ImportCards import="" />
                }
                <div className="card-container">
                    {cards}
                </div>
            </div>);
    }
}

class ImportCards extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    render() { 
        return (
            <input type="file" onChange={(e) => this.handleChange(e.target.files) } />
        );
    }
    
    handleChange(selectorFiles: FileList) {
        Array.from(selectorFiles).forEach(file => {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log(evt.target.result);
            }
            reader.onerror = function (evt) {
                console.error('Error reading file');
            }
        });
    }
}

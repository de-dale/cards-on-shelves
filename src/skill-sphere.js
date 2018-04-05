'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {Card} from './components/cards/Card.js';

import './css/screen.css';

function aDiv(id) {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    return element;
}

const skillSphereRoot = aDiv('skill-sphere');
document.body.appendChild(skillSphereRoot);

function SkillSphere(props) {

    const cards = props.cards.map((card, index) =>
        <Card key={index} card={card}/>
    );
    return (
        <div id='spheres'>
            <h1>Sphérier</h1>
            {cards}
        </div>
    );
}

let cards = [];
const skillSphereUrl = '';
fetch(skillSphereUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        cards = data;
    });

ReactDOM.render(
    <SkillSphere cards={cards}/>,
    skillSphereRoot
);


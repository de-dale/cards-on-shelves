'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

SkillSphere.propTypes = {
    cards: PropTypes.array.isRequired
};

fetch('https://raw.githubusercontent.com/de-dale/skills-sphere/spheres.all/main/all.spheres')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        ReactDOM.render(
            <SkillSphere cards={data}/>,
            skillSphereRoot
        );
    });

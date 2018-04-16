'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './css/screen.css';
import {Codex} from './components/codex/Codex';

function aDiv(id) {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    return element;
}

const skillSphereRoot = aDiv('skill-sphere');
document.body.appendChild(skillSphereRoot);

fetch('https://raw.githubusercontent.com/de-dale/skills-sphere/spheres.all/main/all.spheres')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        ReactDOM.render(
            <Codex
                name="Sphérier"
                cards={data}
                editMode='readonly'
            />,
            skillSphereRoot
        );
    });

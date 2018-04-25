import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CodexExporter} from './CodexExporter.js';
import {DeckButton} from '../deck/DeckButton.js';

import styles from './codex.css';

export class CodexToolbar extends Component {
    constructor(props) {
        super(props);
        this.onLoadCodex = props.onLoadCodex;
    }

    render() {
        return (
            <div className={styles['codex-toolbar']}>
                <CodexExporter onLoadCodex={this.onLoadCodex}/>
                <DeckButton label="Imprimer Codex" onLoadDeck={this.onLoadCodex}/>
            </div>
        );
    }
}

CodexToolbar.propTypes = {
    onLoadCodex: PropTypes.func.isRequired
};

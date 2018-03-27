'use strict';

import React, {Component} from 'react';
import FileSaver from 'file-saver';
import PropTypes from 'prop-types';

export class CodexExporter extends Component{
    constructor(props) {
        super(props);
        this.codex = props.codex;
        this.exportCards = this.exportCards.bind(this);
    }

    render() {
        return (
            <button type="button" onClick={ this.exportCards }>Sauver</button>
        );
    }
    
    exportCards() {
        const codex = this.codex;
        const blob = new Blob([JSON.stringify(codex.cards)], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, codex.name + '.json');
    }
}

CodexExporter.propTypes = {
    codex: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cards: PropTypes.array.isRequired
    }).isRequired
};

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
        const blob = new Blob([this.getExportContent()], {type: 'text/json;charset=utf-8'});
        FileSaver.saveAs(blob, this.getExportName());
    }

    getExportContent() {
        return JSON.stringify(this.codex.cards);
    }

    getExportName() {
        return this.codex.name + '.json';
    }
}

CodexExporter.propTypes = {
    codex: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cards: PropTypes.array.isRequired
    }).isRequired
};

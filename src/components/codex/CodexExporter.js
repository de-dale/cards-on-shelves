'use strict';

import React, {Component} from 'react';
import FileSaver from 'file-saver';
import PropTypes from 'prop-types';

export class CodexExporter extends Component {
    constructor(props) {
        super(props);
        this.onLoadCodex = props.onLoadCodex;
        this.exportCards = this.exportCards.bind(this);
    }

    render() {
        return (
            <button type="button" onClick={this.exportCards}>Sauver</button>
        );
    }

    exportCards() {
        const codex = this.loadCodex();
        const blob = new Blob([this.toExportContent(codex)], {type: 'text/json;charset=utf-8'});
        FileSaver.saveAs(blob, this.toExportName());
    }

    loadCodex() {
        return this.onLoadCodex();
    }

    toExportContent(codex) {
        return JSON.stringify(codex.cards);
    }

    toExportName(codex) {
        return codex.name + '.json';
    }
}

CodexExporter.propTypes = {
    onLoadCodex: PropTypes.func.isRequired
};

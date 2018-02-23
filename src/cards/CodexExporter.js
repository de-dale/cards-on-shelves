'use strict'

import React from 'react';
import FileSaver from 'file-saver';

export class CodexExporter extends React.Component {
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
        let blob = new Blob([JSON.stringify(codex.cards)], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, codex.name + ".json");
    }
}

'use strict'

import React from 'react';

export class CardImporter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.fileImporter = this.createFileImporter(props.onImport);
    }
    
    createFileImporter(onImport) {
        let reader = new FileReader();
        reader.onload = function (evt) {
            try {
                let cards = JSON.parse(evt.target.result);
                onImport(cards);
            } catch (e) {
                throw e;
            }
        }
        reader.onerror = function (evt) {
            console.error('Error reading file');
        }
        return reader;
    }

    render() { 
        return (
            <input type="file" onChange={(e) => this.handleChange(e.target.files) } />
        );
    }
    
    handleChange(selectorFiles: FileList) {
        Array.from(selectorFiles).forEach(file => this.importFile(file));
    }

    importFile(file) {
        this.fileImporter.readAsText(file, "UTF-8");
    }
}

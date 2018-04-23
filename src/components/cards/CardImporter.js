import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CardImporter extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.fileImporter = this.createFileImporter(props.onImport);
    }

    createFileImporter(onImport) {
        let reader = new FileReader();
        reader.onload = function (event) {
            try {
                let cards = JSON.parse(event.target.result);
                onImport(cards);
            } catch (e) {
                throw e;
            }
        };
        reader.onerror = function () {
            throw new Error('Cannot import file');
        };
        return reader;
    }

    render() {
        return (
            <input type="file" onChange={({target: {files}}) => this.handleChange(files)}/>
        );
    }

    handleChange(selectorFiles) {
        Array.from(selectorFiles).forEach(file => this.importFile(file));
    }

    importFile(file) {
        this.fileImporter.readAsText(file, 'UTF-8');
    }
}

CardImporter.propTypes = {
    onImport: PropTypes.func.isRequired
};

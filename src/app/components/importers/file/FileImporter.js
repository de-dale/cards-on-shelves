import React from 'react';
import PropTypes from 'prop-types';

const FileImporter = ({ parent, loadFiles }) => (
    <input type="file" onChange={ ({ target: { files } }) => loadFiles(files, parent) }/>
);

FileImporter.propTypes = {
    parent: PropTypes.object.isRequired,
    loadFiles: PropTypes.func.isRequired
};

export default FileImporter;
 
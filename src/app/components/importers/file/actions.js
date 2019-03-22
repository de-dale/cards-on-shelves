const IMPORT_FILE = 'IMPORT_FILE';
const importFile = (input, parent) => ({
    type: IMPORT_FILE,
    input: input,
    parent: parent
});

function loadFiles(files, parent) {
    const reader = dispatch => getReader(dispatch, parent);
    return dispatch => {
        Array.from(files)
            .forEach(file => reader(dispatch).readAsText(file, 'UTF-8'));
    };
}

function getReader(dispatch, parent) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const input = JSON.parse(event.target.result);
            dispatch(importFile(input, parent));
        } catch (e) {
            alert('Lecture du fichier impossible');
            throw e;
        }
    };
    reader.onerror = () => {
        throw new Error('Cannot import file');
    };
    return reader;
}

export {
    loadFiles,
    IMPORT_FILE, importFile
};


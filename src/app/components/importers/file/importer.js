import storeImporter from 'components/importers/store/importer';

export {
    importFileContent
};

function importFileContent(state, input, parent) {
    return storeImporter(state, input, parent);
}
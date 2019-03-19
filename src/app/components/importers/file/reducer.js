import { IMPORT_FILE } from './actions';
import { importFileContent } from 'components/importers/file/importer';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IMPORT_FILE:
            return importFileContent(state, action.input, action.parent);
        default:
            return state;
    }
}
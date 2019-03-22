import { IMPORT_TRELLO } from 'components/importers/trello/actions';
import * as importer from './importer';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IMPORT_TRELLO:
            return importer.importCards(state, action.input, action.parent);
        default:
            return state;
    }
}
import * as actions from 'components/importers/file/actions';
import reducer from 'components/importers/file/reducer';

import storeImporter from 'components/importers/store/importer';
jest.mock('components/importers/store/importer');

describe('reducer for file importer', () => {

    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };

    it('should dispatch import to store import', () => {
        const importFile = actions.importFile('');

        reducer(EMPTY_STATE, importFile);

        expect(storeImporter).toBeCalled();
    });
    
});
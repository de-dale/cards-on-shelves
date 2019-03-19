import { importFileContent } from 'components/importers/file/importer';

import storeImporter from 'components/importers/store/importer';

jest.mock('components/importers/store/importer');

const initialState = {
    nextEntityId: 1,
    entities: []
};

describe('file importer', () => {

    it('should dispatch import to store import', () => {
        importFileContent(initialState, '');

        expect(storeImporter).toBeCalled();
    });

    it('should add import result in current store', () => {
        const expectedFinalState = { id: 'anything' };
        storeImporter.mockImplementation(() => expectedFinalState);

        const state = importFileContent(initialState, '');

        expect(state).toEqual(expectedFinalState);
    });

});
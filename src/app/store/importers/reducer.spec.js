import { imports } from 'store/importers/actions';
import reducer from 'store/importers/reducer';

describe('imports', () => {

    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };

    const imported = {}, parent = {}, mapperWillReturn = (obj) => () => (obj);

    it('should add returned entity in state', () => {
        const mapper = mapperWillReturn({
            entities: [
                { id: 124, type: 'card' }
            ]
        });

        const action = imports(imported, parent, mapper);

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextEntityId: 125,
            entities: [
                { id: 124, type: 'card' }
            ]
        });
    });

});
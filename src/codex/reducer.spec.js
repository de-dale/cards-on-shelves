import * as actions from './actions';
import reducer from './reducer';
import FileSaver from 'file-saver';

jest.mock('file-saver');

describe('reducers', () => {

    const INITIAL_STATE = {
        name: 'Nouveau Codex',
        cards: []
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should never change state', () => {
        const codex = {
            ...INITIAL_STATE,
            cards: ['cards', 'whatever inside']
        };
        const saveCodex = actions.saveCodex(codex);

        const resultState = reducer(INITIAL_STATE, saveCodex);

        expect(resultState).toEqual(INITIAL_STATE);
    });

    it('should save a codex', () => {
        const codex = {
            name: 'Nom spécifique',
            cards: ['cards']
        };
        const saveCodex = actions.saveCodex(codex);

        reducer(INITIAL_STATE, saveCodex);

        expect(FileSaver.saveAs).toHaveBeenCalledWith(expect.any(Blob), 'Nom spécifique.json');
    });
});
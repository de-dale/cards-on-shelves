import * as actions from './actions';
import reducer from './reducer';
import FileSaver from 'file-saver';
import { addCodex } from './actions';

jest.mock('file-saver');

describe('codex', () => {

    const INITIAL_STATE = {
        nextEntityId: 1,
        entities: [
            {
                id: 1,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                children: [ 3 ],
                id: 2,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                id: 3,
                name: 'Une carte',
                type: 'card'
            }
        ]
    };

    const codex = {
        id: 1
    };

    const codexWithCard = {
        id: 2
    };

    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: []
    };

    it('should add a codex', () => {
        const action = addCodex({ name: 'Un Codex' });

        expect(reducer(EMPTY_STATE, action)).toEqual({
            nextEntityId: 2,
            entities: [
                {
                    id: 1,
                    type: 'codex',
                    name: 'Un Codex'
                }
            ]
        });
    });

    it('should never change state when saved', () => {
        const saveCodex = actions.saveCodex(codex);

        expect(reducer(INITIAL_STATE, saveCodex)).toEqual(INITIAL_STATE);
    });

    xit('should be saved as codex', () => {
        // TODO : Clarifier si on veut l'id du codex en entrée du save, ou le codex complet.
        const saveCodex = actions.saveCodex(codex);

        reducer(INITIAL_STATE, saveCodex);

        expect(FileSaver.saveAs).toHaveBeenCalledWith(aBlobContaining({
            id: 1,
            name: 'Un Codex',
            type: 'codex'
        }), 'Un Codex.json');
    });

    xit('should be saved as codex with cards', () => {
        const saveCodex = actions.saveCodex(codexWithCard);

        reducer(INITIAL_STATE, saveCodex);

        expect(FileSaver.saveAs).toHaveBeenCalledWith(aBlobContaining(
            {
                content: [ 3 ],
                id: 2,
                name: 'Un Codex',
                type: 'codex'
            },
            {
                content: [],
                id: 3,
                name: 'Une carte',
                type: 'card'
            }
        ), 'Un Codex.json');
    });

    it('should save all', () => {
        const saveAll = actions.saveAll();

        reducer(INITIAL_STATE, saveAll);

        expect(FileSaver.saveAs).toHaveBeenCalledWith(aBlobContaining(INITIAL_STATE), 'export_all.json');
    });

    function aBlobContaining(content) {
        return new Blob(
            [ JSON.stringify(content) ],
            { type: 'text/json;charset=utf-8' }
        );
    }
});
import * as actions from './actions';
import { addCodex } from './actions';
import reducer from 'components/codex/reducer';

import saveFile from './filesave';
jest.mock('./filesave');

describe('codex', () => {

    const INITIAL_STATE = {
        version: 'a version',
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
                children: [ 4 ],
                id: 3,
                name: 'Une carte',
                type: 'card'
            },
            {
                content: 'Par défaut',
                id: 4,
                type: 'title'
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

    it('should save a codex from id', () => {
        const saveCodex = actions.saveCodex(codex);

        reducer(INITIAL_STATE, saveCodex);

        expect(saveFile)
            .toHaveBeenCalledWith('Un Codex.json', {
                version: INITIAL_STATE.version,
                entities: [
                    {
                        id: 1,
                        name: 'Un Codex',
                        type: 'codex'
                    }
                ]
            });
    });

    it('should save a codex with cards', () => {
        const saveCodex = actions.saveCodex(codexWithCard);

        reducer(INITIAL_STATE, saveCodex);

        expect(saveFile)
            .toHaveBeenCalledWith('Un Codex.json', {
                version: INITIAL_STATE.version,
                entities: [
                    {
                        children: [ 3 ],
                        id: 2,
                        name: 'Un Codex',
                        type: 'codex'
                    },
                    {
                        children: [ 4 ],
                        id: 3,
                        name: 'Une carte',
                        type: 'card'
                    },
                    {
                        content: 'Par défaut',
                        id: 4,
                        type: 'title'
                    }
                ]
            });
    });

    it('should save all', () => {
        const saveAll = actions.saveAll();

        reducer(INITIAL_STATE, saveAll);

        expect(saveFile)
            .toHaveBeenCalledWith('export_all.json', INITIAL_STATE);
    });
});
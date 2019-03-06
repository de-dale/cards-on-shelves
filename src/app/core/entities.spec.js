import {
    addEntity,
    removeEntity,
    updateEntity
} from './entities';

describe('an entity', () => {

    const DEFAULT_STATE = {
        nextEntityId: 1,
        entities: []
    };

    const STATE_FILLED_WITH_ONE = {
        nextEntityId: 2,
        entities: [
            { id: 1, name: 'One' }
        ]
    };

    const STATE_FILLED_WITH_THREE = {
        nextEntityId: 4,
        entities: [
            { id: 1, name: 'One' },
            { id: 2, name: 'Two' },
            { id: 3, name: 'Three' }
        ]
    };

    const STATE_FILLED_WITH_NINE = {
        nextEntityId: 10,
        entities: [
            { id: 1, name: 'One', children: [ 4, 5 ] },
            { id: 2, name: 'Two', children: [ 4, 6, 9 ] },
            { id: 3, name: 'Three', children: [ 4, 7, 8 ] },
            { id: 4, name: 'Four' },
            { id: 5, name: 'Five' },
            { id: 6, name: 'Six' },
            { id: 7, name: 'Seven' },
            { id: 8, name: 'Eight' },
            { id: 9, name: 'Nine' }
        ]
    };

    it('should be added', () => {
        const state = addEntity(DEFAULT_STATE, { name: 'First entity' });

        expect(state).toEqual({
            nextEntityId: 2,
            entities: [
                { id: 1, name: 'First entity' }
            ]
        });
    });

    it('should be added when has id', () => {
        const state = addEntity(STATE_FILLED_WITH_ONE, { id: 12, name: 'Added entity' });

        expect(state).toEqual({
            nextEntityId: 13,
            entities: [
                { id: 1, name: 'One' },
                { id: 12, name: 'Added entity' }
            ]
        });
    });

    it('should be added to an existing parent', () => {
        const parentIdentifier = { id: 1 };
        const entity = { name: 'Second entity' };

        const state = addEntity(STATE_FILLED_WITH_ONE, entity, parentIdentifier);

        expect(state).toEqual({
            nextEntityId: 3,
            entities: [
                { id: 1, name: 'One', children: [ 2 ] },
                { id: 2, name: 'Second entity' }
            ]
        });
    });

    it('should be added to multiple existing parents', () => {
        const entity = { name: 'Added entity' };

        const state = addEntity(STATE_FILLED_WITH_THREE, entity, { id: 1 }, { id: 2 }, { id: 3 });

        expect(state).toEqual({
            nextEntityId: 5,
            entities: [
                { id: 1, name: 'One', children: [ 4 ] },
                { id: 2, name: 'Two', children: [ 4 ] },
                { id: 3, name: 'Three', children: [ 4 ] },
                { id: 4, name: 'Added entity' }
            ]
        });
    });

    it('should be removed', () => {
        const state = removeEntity(STATE_FILLED_WITH_THREE, { id: 2 });

        expect(state).toEqual({
            nextEntityId: 4,
            entities: [
                { id: 1, name: 'One' },
                { id: 3, name: 'Three' }
            ]
        });
    });

    it('should be removed from parents', () => {
        const state = removeEntity(STATE_FILLED_WITH_NINE, { id: 4 });

        expect(state).toEqual({
            nextEntityId: 10,
            entities: [
                { id: 1, name: 'One', children: [ 5 ] },
                { id: 2, name: 'Two', children: [ 6, 9 ] },
                { id: 3, name: 'Three', children: [ 7, 8 ] },
                { id: 5, name: 'Five' },
                { id: 6, name: 'Six' },
                { id: 7, name: 'Seven' },
                { id: 8, name: 'Eight' },
                { id: 9, name: 'Nine' }
            ]
        });
    });

    it('should be updated by field name', () => {
        const state = updateEntity(STATE_FILLED_WITH_NINE, { id: 4 }, 'name', 'Not exactly Four');

        expect(state).toEqual({
            nextEntityId: 10,
            entities: [
                { id: 1, name: 'One', children: [ 4, 5 ] },
                { id: 2, name: 'Two', children: [ 4, 6, 9 ] },
                { id: 3, name: 'Three', children: [ 4, 7, 8 ] },
                { id: 4, name: 'Not exactly Four' },
                { id: 5, name: 'Five' },
                { id: 6, name: 'Six' },
                { id: 7, name: 'Seven' },
                { id: 8, name: 'Eight' },
                { id: 9, name: 'Nine' }
            ]
        });
    });

});
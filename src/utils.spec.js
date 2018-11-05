import * as utils from './utils';

describe('log utils', () => {

    it('should have no side-effect', () => {
        const any = { name: 'any object' };

        const loggedObject = utils.log(any, '');

        expect(loggedObject).toEqual(any);
    });

});

describe('makeActionCreator utils', () => {

    it('should create action factory for given type', () => {
        const actionFactory = utils.makeActionCreator('action type');

        const action = actionFactory();

        expect(action).toEqual({
            type: 'action type'
        });
    });


    it('should create action factory with fields', () => {
        const actionFactory = utils.makeActionCreator('actiontype', 'field1', 'field2', 'field3');

        const action = actionFactory('one', 'two', 'three');

        expect(action).toEqual({
            type: 'actiontype',
            field1: 'one',
            field2: 'two',
            field3: 'three'
        });
    });


});
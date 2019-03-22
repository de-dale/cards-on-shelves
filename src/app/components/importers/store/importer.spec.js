import importStore from './importer';
import fs from 'fs';
import each from 'jest-each';

describe('imports', () => {

    const latest_version = '0.3.0';

    const EMPTY_STATE = {
        nextEntityId: 1,
        entities: [],
        version: latest_version
    };

    function getLatestFullState() {
        return readFileInVersion('whole-state.json', latest_version);
    }

    each([
        [ '0.2.0', '0.3.0' ],
        [ latest_version, latest_version ] ])
        .describe('from versions %s to %s', (origin, target) => {

            each([
                [ 'single-empty-card' ],
                [ 'multiple-empty-cards' ],
                [ 'single-card' ],
                [ 'multiple-cards' ],
                [ 'whole-state' ]
            ]).describe('%s is imported on', (cards) => {

                it('an empty state', () => {
                    imports.onEmptyState(cards);
                });

                it('an already filled state', () => {
                    imports.onGivenState(cards, 'added-on-full-state', getLatestFullState());
                });
            });

            const imports = {
                onEmptyState: (fileName) => verifyJsonMigration(EMPTY_STATE, origin, fileName, target, fileName),
                onGivenState: (fileName, stateName, state) => verifyJsonMigration(state, origin, fileName, target, stateName + '/' + fileName)
            };
        });
});

function verifyJsonMigration(initialState, origin, givenFileName, target, expectedFileName) {
    verifyFileMigration(initialState, origin, givenFileName + '.json', target, expectedFileName + '.json');
}

function verifyFileMigration(initialState, origin, givenFileName, target, expectedFileName) {
    expect(importStore(initialState, readFileInVersion(givenFileName, origin)))
        .toEqual(readFileInVersion(expectedFileName, target));
}

function readFileInVersion(fileName, version) {
    const fileContent = fs.readFileSync(__dirname + '/' + version + '/' + fileName);
    return JSON.parse(fileContent);
}
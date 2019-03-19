import importStore from './importer';
import fs from 'fs';

describe('migrate from 0.2.0 to 0.3.0', () => {

    it('success for single empty card', () => {
        assertFileIsCorrectlyMigrated('single-empty-card.json');
    });

    it('success for multiple empty cards', () => {
        assertFileIsCorrectlyMigrated('multiple-empty-cards.json');
    });

    it('success for single card', () => {
        assertFileIsCorrectlyMigrated('single-card.json');
    });
    
    it('success for multiple cards', () => {
        assertFileIsCorrectlyMigrated('multiple-cards.json');
    });
    
    it('success for whole state', () => {
        assertFileIsCorrectlyMigrated('whole-state.json');
    });

    function assertFileIsCorrectlyMigrated(fileName) {
        verifyFileMigration(fileName, '0.2.0', '0.3.0');
    }
});

function verifyFileMigration(fileName, origin, target) {
    expect(importStore(readFileInVersion(fileName, origin)))
        .toEqual(readFileInVersion(fileName, target));
}

function readFileInVersion(fileName, version) {
    const fileContent = fs.readFileSync(__dirname + '/' + version + '/' + fileName);
    return JSON.parse(fileContent);
}

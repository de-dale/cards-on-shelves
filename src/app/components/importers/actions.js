import { makeActionCreator } from 'utils';

const GENERIC_IMPORT = 'GENERIC_IMPORT';
const imports = makeActionCreator(GENERIC_IMPORT, 'input', 'parent', 'mapper');

export {
    GENERIC_IMPORT, imports
    
};


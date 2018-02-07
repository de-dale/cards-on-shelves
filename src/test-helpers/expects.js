'use strict'
import fs from 'fs';

const expects_dirs = 'src/test-expects/';

export function expectedFile(path){
    return fs.readFileSync(expects_dirs + path, 'utf-8').trim();
}

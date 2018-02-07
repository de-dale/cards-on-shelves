'use strict'
import * as idx from './index.js';
import { expectedFile } from './test-helpers/expects.js';

test('should be an hello world', () => {
    var rendered = idx.component();

    expect(rendered.outerHTML)
        .toBe('<div class="hello">Hello world</div>');
});

describe("Hello world", () => {
    it('should equals a String', () => {
        var rendered = idx.component();

        expect(rendered.outerHTML)
            .toBe('<div class="hello">Hello world</div>');
    });
    
    it('should equals a file', () => {
        var rendered = idx.component();
        var expected = expectedFile('hello_world.html');

        expect(rendered.outerHTML)
            .toBe(expected);
    });
})

var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'tony@example.com';
        var text = 'Hello! This is Tony.';
        var res = generateMessage(from, text);

        expect(res).toMatchObject({from, text})
        expect(typeof res.createdAt).toBe('number')
    });
});
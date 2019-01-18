var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'tony@example.com';
        var text = 'Hello! This is Tony.';
        var res = generateMessage(from, text);

        expect(res).toMatchObject({from, text})
        expect(typeof res.createdAt).toBe('number')
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitude = 1;
        var url = 'http://www.google.com/maps?q=1,1'
        var res = generateLocationMessage(from, latitude, longitude);

        expect(typeof res.createdAt).toBe('number')
        expect(res).toMatchObject({from, url})
    });
});
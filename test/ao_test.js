/**
 * Test case for ao.
 * Runs with nodeunit.
 */

var ao = require('../lib/ao.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Ao'] = function (test) {
    test.ok(ao);
    test.done();
};


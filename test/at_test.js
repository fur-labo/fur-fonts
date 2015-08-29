/**
 * Test case for at.
 * Runs with nodeunit.
 */

var at = require('../lib/at.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['At'] = function (test) {
    test.ok(at());
    test.done();
};


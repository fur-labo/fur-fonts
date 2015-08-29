/**
 * Test case for aa.
 * Runs with nodeunit.
 */

var aa = require('../lib/aa.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Aa'] = function (test) {
    test.ok(aa());
    test.done();
};


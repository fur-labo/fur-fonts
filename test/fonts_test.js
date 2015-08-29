/**
 * Test case for fonts.
 * Runs with nodeunit.
 */

var fonts = require('../lib/fonts.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Fonts'] = function(test){
    Object.keys(fonts).forEach(function(key){
        test.ok(fonts[key]());
    });
    test.done();
};


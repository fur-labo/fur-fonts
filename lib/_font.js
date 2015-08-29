/**
 * Read font file.
 * @memberof module:fur-fonts/lib
 * @function _font
 * @param {string} filename
 * @returns {*} font data.
 * @private
 */

"use strict";

var path = require('path'),
    fs = require('fs');

var assetsDir = path.resolve(__dirname, '../assets');

/** @lends _font */
function _font(filename) {
    return fs.readFileSync(path.resolve(assetsDir, filename));
}

module.exports = _font;
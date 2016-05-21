/**
 * Test case for fonts.
 * Runs with mocha.
 */
'use strict'

const fonts = require('../lib/fonts.js')
const assert = require('assert')

it('Fonts', () => {
  Object.keys(fonts).forEach((key) => {
    assert.ok(fonts[ key ]())
  })
})


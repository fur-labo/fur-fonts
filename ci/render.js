#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const path = require('path')
const mkdirp = require('mkdirp')
const svgpng = require('svgpng')
const writexml = require('writexml')
const expandglob = require('expandglob')
const filecopy = require('filecopy')
const os = require('os')
const apeTasking = require('ape-tasking')
const co = require('co')
const furFonts = require('../lib')

const basedir = path.resolve(__dirname, '..')
const exampleImageDir = path.resolve(basedir, 'doc/example/images')

mkdirp.sync(exampleImageDir)

process.chdir(basedir)

const IMAGE_WIDTH = 1024
const IMAGE_HEIGHT = 128

apeTasking.runTasks('render', [
  () => co(function * () {
    let destDirs = [
      'assets/fonts'
    ]
    for (let dest of destDirs) {
      yield new Promise((resolve, reject) =>
        mkdirp(dest, (err) => err ? reject(err) : resolve())
      )
      yield filecopy('third_party/**/+(*.ttf|*.svg|*.eot)', dest)
    }
  }),
  () => co(function * () {
    let w = IMAGE_WIDTH
    let h = IMAGE_HEIGHT
    let themes = Object.keys(furFonts)
    for (let theme of themes) {
      let name = `font-theme-${theme}`
      let url = [
        'data:application/x-font-ttf;base64',
        furFonts[ theme ]().toString('base64')
      ].join(',')
      let dest = path.join(exampleImageDir, `example-font-${theme}.svg`)
      yield writexml(dest, 'svg', {
        '@': {
          id: name,
          xmlns: 'http://www.w3.org/2000/svg',
          width: w,
          height: h,
          viewbox: [ 0, 0, w, h ].join(' ')
        },
        style: {
          '#': [
            `@font-face {font-family: "${name}";src: url("${url}")}`,
            `text{font-family: "${name}";}`
          ].join(os.EOL)
        },
        text: {
          '@': {
            x: w / 2,
            y: h / 2,
            'dominant-baseline': 'central',
            'text-anchor': 'middle',
            fill: '#38E',
            'font-size': '32'
          },
          '#': 'Grumpy wizards make toxic brew for the evil Queen and Jack.'
        }
      })
    }
  }),
  () => co(function * () {
    let filenames = yield expandglob('*.svg', { cwd: exampleImageDir })
    let config = filenames.map((filename) => {
      let name = path.basename(filename, '.svg')
      return {
        src: path.resolve(exampleImageDir, name + '.svg'),
        dest: path.resolve(exampleImageDir, name + '.png'),
        size: { width: IMAGE_WIDTH, height: IMAGE_HEIGHT }
      }
    })
    yield new Promise((resolve, reject) =>
      svgpng.byConf(config, (err) => err ? reject(err) : resolve())
    )
  })
], true)

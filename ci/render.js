#!/usr/bin/env node

/**
 * Build this project.
 */

"use strict";

var path = require('path'),
    mkdirp = require('mkdirp'),
    async = require('async'),
    fs = require('fs'),
    svgpng = require('svgpng'),
    expandglob = require('expandglob'),
    filecopy = require('filecopy'),
    os = require('os'),
    util = require('util'),
    apeTasking = require('ape-tasking'),
    coz = require('coz'),
    furFonts = require('../lib');

var basedir = path.resolve(__dirname, '..'),
    exampleImageDir = path.resolve(basedir, 'docs/example/images');

mkdirp.sync(exampleImageDir);

process.chdir(basedir);

var IMAGE_WIDTH = 1024,
    IMAGE_HEIGHT = 128;

apeTasking.runTasks('build', [
    //function collectFonts(callback) {
    //    var dest = [
    //        'assets/fonts'
    //    ];
    //    async.eachSeries(dest, function (dest, callback) {
    //        async.series([
    //            function (callback) {
    //                mkdirp(dest, callback);
    //            },
    //            function (callback) {
    //                filecopy('third_party/**/+(*.ttf|*.svg|*.eot)', dest, callback);
    //            }
    //        ], callback);
    //    }, callback);
    //},
    function renderImages(callback) {
        var w = IMAGE_WIDTH, h = IMAGE_HEIGHT;
        var themes = Object.keys(furFonts);
        async.eachSeries(themes, function (theme, callback) {
            var name = 'font-theme-' + theme,
                text = 'Grumpy wizards make toxic brew for the evil Queen and Jack.';
            var url = [
                'data:application/x-font-ttf;base64',
                furFonts[theme]().toString('base64')
            ].join(',');
            var content = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                util.format('<svg id="fur-testing-banner-svg" xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewbox="0 0 %d %d">', w, h, w, h),
                '<style><![CDATA[',
                util.format('@font-face {font-family: "%s";src: url("%s")}', name, url),
                util.format('text{font-family: "%s";}', name),
                ']]></style>',
                util.format('<text x="%d" y="%d" dominant-baseline="central" text-anchor="middle" fill="#38E" font-size="32">', w / 2, h / 2),
                util.format('<![CDATA[%s]]>', text),
                '</text>',
                '</svg>'
            ].join(os.EOL);
            var dest = path.join(exampleImageDir, "example-font-" + theme + '.svg');
            fs.writeFile(dest, content, callback);
        }, callback);
    },
    function renderPng(callback) {
        async.waterfall([
            function (callback) {
                expandglob('*.svg', {cwd: exampleImageDir}, callback);
            },
            function (filenames, callback) {
                var config = filenames.map(function (filename) {
                    var name = path.basename(filename, '.svg');
                    return {
                        src: path.resolve(exampleImageDir, name + '.svg'),
                        dest: path.resolve(exampleImageDir, name + '.png'),
                        size: {width: IMAGE_WIDTH, height: IMAGE_HEIGHT}
                    }
                });
                svgpng.byConf(config, callback);
            }
        ], callback);
    }
], true);


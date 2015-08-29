/**
 * Font data module.
 * @module fur-fonts/lib/fonts
 */

var path = require('path'),
    fs = require('fs');

var assetsDir = path.resolve(__dirname, '../assets');

function _read(filename) {
    return fs.readFileSync(path.resolve(assetsDir, filename));
}


/**
 * @function a
 * @returns {buffer} - data for theme "a".
 */
exports.a = function a() {
    return _read('fonts/Alef-Bold.ttf');
};
exports.a.$src = 'fonts/Alef-Bold.ttf';
exports.a.$type = 'ttf';


/**
 * @function b
 * @returns {buffer} - data for theme "b".
 */
exports.b = function b() {
    return _read('fonts/Alef-Regular.ttf');
};
exports.b.$src = 'fonts/Alef-Regular.ttf';
exports.b.$type = 'ttf';


/**
 * @function c
 * @returns {buffer} - data for theme "c".
 */
exports.c = function c() {
    return _read('fonts/Anonymous Pro B.ttf');
};
exports.c.$src = 'fonts/Anonymous Pro B.ttf';
exports.c.$type = 'ttf';


/**
 * @function d
 * @returns {buffer} - data for theme "d".
 */
exports.d = function d() {
    return _read('fonts/Anonymous Pro BI.ttf');
};
exports.d.$src = 'fonts/Anonymous Pro BI.ttf';
exports.d.$type = 'ttf';


/**
 * @function e
 * @returns {buffer} - data for theme "e".
 */
exports.e = function e() {
    return _read('fonts/Anonymous Pro I.ttf');
};
exports.e.$src = 'fonts/Anonymous Pro I.ttf';
exports.e.$type = 'ttf';


/**
 * @function f
 * @returns {buffer} - data for theme "f".
 */
exports.f = function f() {
    return _read('fonts/Anonymous Pro Minus B.ttf');
};
exports.f.$src = 'fonts/Anonymous Pro Minus B.ttf';
exports.f.$type = 'ttf';


/**
 * @function g
 * @returns {buffer} - data for theme "g".
 */
exports.g = function g() {
    return _read('fonts/Anonymous Pro Minus BI.ttf');
};
exports.g.$src = 'fonts/Anonymous Pro Minus BI.ttf';
exports.g.$type = 'ttf';


/**
 * @function h
 * @returns {buffer} - data for theme "h".
 */
exports.h = function h() {
    return _read('fonts/Anonymous Pro Minus I.ttf');
};
exports.h.$src = 'fonts/Anonymous Pro Minus I.ttf';
exports.h.$type = 'ttf';


/**
 * @function i
 * @returns {buffer} - data for theme "i".
 */
exports.i = function i() {
    return _read('fonts/Anonymous Pro Minus.ttf');
};
exports.i.$src = 'fonts/Anonymous Pro Minus.ttf';
exports.i.$type = 'ttf';


/**
 * @function j
 * @returns {buffer} - data for theme "j".
 */
exports.j = function j() {
    return _read('fonts/Anonymous Pro.ttf');
};
exports.j.$src = 'fonts/Anonymous Pro.ttf';
exports.j.$type = 'ttf';


/**
 * @function k
 * @returns {buffer} - data for theme "k".
 */
exports.k = function k() {
    return _read('fonts/Cantarell-Bold.ttf');
};
exports.k.$src = 'fonts/Cantarell-Bold.ttf';
exports.k.$type = 'ttf';


/**
 * @function l
 * @returns {buffer} - data for theme "l".
 */
exports.l = function l() {
    return _read('fonts/Cantarell-BoldOblique.ttf');
};
exports.l.$src = 'fonts/Cantarell-BoldOblique.ttf';
exports.l.$type = 'ttf';


/**
 * @function m
 * @returns {buffer} - data for theme "m".
 */
exports.m = function m() {
    return _read('fonts/Cantarell-Oblique.ttf');
};
exports.m.$src = 'fonts/Cantarell-Oblique.ttf';
exports.m.$type = 'ttf';


/**
 * @function n
 * @returns {buffer} - data for theme "n".
 */
exports.n = function n() {
    return _read('fonts/Cantarell-Regular.ttf');
};
exports.n.$src = 'fonts/Cantarell-Regular.ttf';
exports.n.$type = 'ttf';


/**
 * @function o
 * @returns {buffer} - data for theme "o".
 */
exports.o = function o() {
    return _read('fonts/Comfortaa-Bold.ttf');
};
exports.o.$src = 'fonts/Comfortaa-Bold.ttf';
exports.o.$type = 'ttf';


/**
 * @function p
 * @returns {buffer} - data for theme "p".
 */
exports.p = function p() {
    return _read('fonts/Comfortaa-Light.ttf');
};
exports.p.$src = 'fonts/Comfortaa-Light.ttf';
exports.p.$type = 'ttf';


/**
 * @function q
 * @returns {buffer} - data for theme "q".
 */
exports.q = function q() {
    return _read('fonts/Comfortaa-Regular.ttf');
};
exports.q.$src = 'fonts/Comfortaa-Regular.ttf';
exports.q.$type = 'ttf';


/**
 * @function r
 * @returns {buffer} - data for theme "r".
 */
exports.r = function r() {
    return _read('fonts/ComicNeue-Angular-Bold-Oblique.ttf');
};
exports.r.$src = 'fonts/ComicNeue-Angular-Bold-Oblique.ttf';
exports.r.$type = 'ttf';


/**
 * @function s
 * @returns {buffer} - data for theme "s".
 */
exports.s = function s() {
    return _read('fonts/ComicNeue-Angular-Bold.ttf');
};
exports.s.$src = 'fonts/ComicNeue-Angular-Bold.ttf';
exports.s.$type = 'ttf';


/**
 * @function t
 * @returns {buffer} - data for theme "t".
 */
exports.t = function t() {
    return _read('fonts/ComicNeue-Angular-Light-Oblique.ttf');
};
exports.t.$src = 'fonts/ComicNeue-Angular-Light-Oblique.ttf';
exports.t.$type = 'ttf';


/**
 * @function u
 * @returns {buffer} - data for theme "u".
 */
exports.u = function u() {
    return _read('fonts/ComicNeue-Angular-Light.ttf');
};
exports.u.$src = 'fonts/ComicNeue-Angular-Light.ttf';
exports.u.$type = 'ttf';


/**
 * @function v
 * @returns {buffer} - data for theme "v".
 */
exports.v = function v() {
    return _read('fonts/ComicNeue-Angular-Regular-Oblique.ttf');
};
exports.v.$src = 'fonts/ComicNeue-Angular-Regular-Oblique.ttf';
exports.v.$type = 'ttf';


/**
 * @function w
 * @returns {buffer} - data for theme "w".
 */
exports.w = function w() {
    return _read('fonts/ComicNeue-Angular-Regular.ttf');
};
exports.w.$src = 'fonts/ComicNeue-Angular-Regular.ttf';
exports.w.$type = 'ttf';


/**
 * @function x
 * @returns {buffer} - data for theme "x".
 */
exports.x = function x() {
    return _read('fonts/ComicNeue-Bold-Oblique.ttf');
};
exports.x.$src = 'fonts/ComicNeue-Bold-Oblique.ttf';
exports.x.$type = 'ttf';


/**
 * @function y
 * @returns {buffer} - data for theme "y".
 */
exports.y = function y() {
    return _read('fonts/ComicNeue-Bold.ttf');
};
exports.y.$src = 'fonts/ComicNeue-Bold.ttf';
exports.y.$type = 'ttf';


/**
 * @function z
 * @returns {buffer} - data for theme "z".
 */
exports.z = function z() {
    return _read('fonts/ComicNeue-Light-Oblique.ttf');
};
exports.z.$src = 'fonts/ComicNeue-Light-Oblique.ttf';
exports.z.$type = 'ttf';


/**
 * @function aa
 * @returns {buffer} - data for theme "aa".
 */
exports.aa = function aa() {
    return _read('fonts/ComicNeue-Light.ttf');
};
exports.aa.$src = 'fonts/ComicNeue-Light.ttf';
exports.aa.$type = 'ttf';


/**
 * @function ab
 * @returns {buffer} - data for theme "ab".
 */
exports.ab = function ab() {
    return _read('fonts/ComicNeue-Regular-Oblique.ttf');
};
exports.ab.$src = 'fonts/ComicNeue-Regular-Oblique.ttf';
exports.ab.$type = 'ttf';


/**
 * @function ac
 * @returns {buffer} - data for theme "ac".
 */
exports.ac = function ac() {
    return _read('fonts/ComicNeue-Regular.ttf');
};
exports.ac.$src = 'fonts/ComicNeue-Regular.ttf';
exports.ac.$type = 'ttf';


/**
 * @function ad
 * @returns {buffer} - data for theme "ad".
 */
exports.ad = function ad() {
    return _read('fonts/Dosis-Bold.ttf');
};
exports.ad.$src = 'fonts/Dosis-Bold.ttf';
exports.ad.$type = 'ttf';


/**
 * @function ae
 * @returns {buffer} - data for theme "ae".
 */
exports.ae = function ae() {
    return _read('fonts/Dosis-Book.ttf');
};
exports.ae.$src = 'fonts/Dosis-Book.ttf';
exports.ae.$type = 'ttf';


/**
 * @function af
 * @returns {buffer} - data for theme "af".
 */
exports.af = function af() {
    return _read('fonts/Dosis-ExtraBold.ttf');
};
exports.af.$src = 'fonts/Dosis-ExtraBold.ttf';
exports.af.$type = 'ttf';


/**
 * @function ag
 * @returns {buffer} - data for theme "ag".
 */
exports.ag = function ag() {
    return _read('fonts/Dosis-ExtraLight.ttf');
};
exports.ag.$src = 'fonts/Dosis-ExtraLight.ttf';
exports.ag.$type = 'ttf';


/**
 * @function ah
 * @returns {buffer} - data for theme "ah".
 */
exports.ah = function ah() {
    return _read('fonts/Dosis-Light.ttf');
};
exports.ah.$src = 'fonts/Dosis-Light.ttf';
exports.ah.$type = 'ttf';


/**
 * @function ai
 * @returns {buffer} - data for theme "ai".
 */
exports.ai = function ai() {
    return _read('fonts/Dosis-Medium.ttf');
};
exports.ai.$src = 'fonts/Dosis-Medium.ttf';
exports.ai.$type = 'ttf';


/**
 * @function aj
 * @returns {buffer} - data for theme "aj".
 */
exports.aj = function aj() {
    return _read('fonts/Dosis-SemiBold.ttf');
};
exports.aj.$src = 'fonts/Dosis-SemiBold.ttf';
exports.aj.$type = 'ttf';


/**
 * @function ak
 * @returns {buffer} - data for theme "ak".
 */
exports.ak = function ak() {
    return _read('fonts/EkMukta-Bold.ttf');
};
exports.ak.$src = 'fonts/EkMukta-Bold.ttf';
exports.ak.$type = 'ttf';


/**
 * @function al
 * @returns {buffer} - data for theme "al".
 */
exports.al = function al() {
    return _read('fonts/EkMukta-ExtraBold.ttf');
};
exports.al.$src = 'fonts/EkMukta-ExtraBold.ttf';
exports.al.$type = 'ttf';


/**
 * @function am
 * @returns {buffer} - data for theme "am".
 */
exports.am = function am() {
    return _read('fonts/EkMukta-ExtraLight.ttf');
};
exports.am.$src = 'fonts/EkMukta-ExtraLight.ttf';
exports.am.$type = 'ttf';


/**
 * @function an
 * @returns {buffer} - data for theme "an".
 */
exports.an = function an() {
    return _read('fonts/EkMukta-Light.ttf');
};
exports.an.$src = 'fonts/EkMukta-Light.ttf';
exports.an.$type = 'ttf';


/**
 * @function ao
 * @returns {buffer} - data for theme "ao".
 */
exports.ao = function ao() {
    return _read('fonts/EkMukta-Medium.ttf');
};
exports.ao.$src = 'fonts/EkMukta-Medium.ttf';
exports.ao.$type = 'ttf';


/**
 * @function ap
 * @returns {buffer} - data for theme "ap".
 */
exports.ap = function ap() {
    return _read('fonts/EkMukta-Regular.ttf');
};
exports.ap.$src = 'fonts/EkMukta-Regular.ttf';
exports.ap.$type = 'ttf';


/**
 * @function aq
 * @returns {buffer} - data for theme "aq".
 */
exports.aq = function aq() {
    return _read('fonts/EkMukta-SemiBold.ttf');
};
exports.aq.$src = 'fonts/EkMukta-SemiBold.ttf';
exports.aq.$type = 'ttf';


/**
 * @function ar
 * @returns {buffer} - data for theme "ar".
 */
exports.ar = function ar() {
    return _read('fonts/FreeMono.ttf');
};
exports.ar.$src = 'fonts/FreeMono.ttf';
exports.ar.$type = 'ttf';


/**
 * @function as
 * @returns {buffer} - data for theme "as".
 */
exports.as = function as() {
    return _read('fonts/FreeMonoBold.ttf');
};
exports.as.$src = 'fonts/FreeMonoBold.ttf';
exports.as.$type = 'ttf';


/**
 * @function at
 * @returns {buffer} - data for theme "at".
 */
exports.at = function at() {
    return _read('fonts/FreeMonoBoldOblique.ttf');
};
exports.at.$src = 'fonts/FreeMonoBoldOblique.ttf';
exports.at.$type = 'ttf';


/**
 * @function au
 * @returns {buffer} - data for theme "au".
 */
exports.au = function au() {
    return _read('fonts/FreeMonoOblique.ttf');
};
exports.au.$src = 'fonts/FreeMonoOblique.ttf';
exports.au.$type = 'ttf';


/**
 * @function av
 * @returns {buffer} - data for theme "av".
 */
exports.av = function av() {
    return _read('fonts/FreeSans.ttf');
};
exports.av.$src = 'fonts/FreeSans.ttf';
exports.av.$type = 'ttf';


/**
 * @function aw
 * @returns {buffer} - data for theme "aw".
 */
exports.aw = function aw() {
    return _read('fonts/FreeSansBold.ttf');
};
exports.aw.$src = 'fonts/FreeSansBold.ttf';
exports.aw.$type = 'ttf';


/**
 * @function ax
 * @returns {buffer} - data for theme "ax".
 */
exports.ax = function ax() {
    return _read('fonts/FreeSansBoldOblique.ttf');
};
exports.ax.$src = 'fonts/FreeSansBoldOblique.ttf';
exports.ax.$type = 'ttf';


/**
 * @function ay
 * @returns {buffer} - data for theme "ay".
 */
exports.ay = function ay() {
    return _read('fonts/FreeSansOblique.ttf');
};
exports.ay.$src = 'fonts/FreeSansOblique.ttf';
exports.ay.$type = 'ttf';


/**
 * @function az
 * @returns {buffer} - data for theme "az".
 */
exports.az = function az() {
    return _read('fonts/Metrophobic.ttf');
};
exports.az.$src = 'fonts/Metrophobic.ttf';
exports.az.$type = 'ttf';


/**
 * @function ba
 * @returns {buffer} - data for theme "ba".
 */
exports.ba = function ba() {
    return _read('fonts/MgOpenCosmeticaRegular.ttf');
};
exports.ba.$src = 'fonts/MgOpenCosmeticaRegular.ttf';
exports.ba.$type = 'ttf';


/**
 * @function bb
 * @returns {buffer} - data for theme "bb".
 */
exports.bb = function bb() {
    return _read('fonts/MgOpenModataBold.ttf');
};
exports.bb.$src = 'fonts/MgOpenModataBold.ttf';
exports.bb.$type = 'ttf';


/**
 * @function bc
 * @returns {buffer} - data for theme "bc".
 */
exports.bc = function bc() {
    return _read('fonts/MgOpenModataBoldOblique.ttf');
};
exports.bc.$src = 'fonts/MgOpenModataBoldOblique.ttf';
exports.bc.$type = 'ttf';


/**
 * @function bd
 * @returns {buffer} - data for theme "bd".
 */
exports.bd = function bd() {
    return _read('fonts/MgOpenModataOblique.ttf');
};
exports.bd.$src = 'fonts/MgOpenModataOblique.ttf';
exports.bd.$type = 'ttf';


/**
 * @function be
 * @returns {buffer} - data for theme "be".
 */
exports.be = function be() {
    return _read('fonts/MgOpenModataRegular.ttf');
};
exports.be.$src = 'fonts/MgOpenModataRegular.ttf';
exports.be.$type = 'ttf';


/**
 * @function bf
 * @returns {buffer} - data for theme "bf".
 */
exports.bf = function bf() {
    return _read('fonts/OCRA.ttf');
};
exports.bf.$src = 'fonts/OCRA.ttf';
exports.bf.$type = 'ttf';


/**
 * @function bg
 * @returns {buffer} - data for theme "bg".
 */
exports.bg = function bg() {
    return _read('fonts/OpenSans-Bold.ttf');
};
exports.bg.$src = 'fonts/OpenSans-Bold.ttf';
exports.bg.$type = 'ttf';


/**
 * @function bh
 * @returns {buffer} - data for theme "bh".
 */
exports.bh = function bh() {
    return _read('fonts/OpenSans-BoldItalic.ttf');
};
exports.bh.$src = 'fonts/OpenSans-BoldItalic.ttf';
exports.bh.$type = 'ttf';


/**
 * @function bi
 * @returns {buffer} - data for theme "bi".
 */
exports.bi = function bi() {
    return _read('fonts/OpenSans-CondBold.ttf');
};
exports.bi.$src = 'fonts/OpenSans-CondBold.ttf';
exports.bi.$type = 'ttf';


/**
 * @function bj
 * @returns {buffer} - data for theme "bj".
 */
exports.bj = function bj() {
    return _read('fonts/OpenSans-CondLight.ttf');
};
exports.bj.$src = 'fonts/OpenSans-CondLight.ttf';
exports.bj.$type = 'ttf';


/**
 * @function bk
 * @returns {buffer} - data for theme "bk".
 */
exports.bk = function bk() {
    return _read('fonts/OpenSans-CondLightItalic.ttf');
};
exports.bk.$src = 'fonts/OpenSans-CondLightItalic.ttf';
exports.bk.$type = 'ttf';


/**
 * @function bl
 * @returns {buffer} - data for theme "bl".
 */
exports.bl = function bl() {
    return _read('fonts/OpenSans-ExtraBold.ttf');
};
exports.bl.$src = 'fonts/OpenSans-ExtraBold.ttf';
exports.bl.$type = 'ttf';


/**
 * @function bm
 * @returns {buffer} - data for theme "bm".
 */
exports.bm = function bm() {
    return _read('fonts/OpenSans-ExtraBoldItalic.ttf');
};
exports.bm.$src = 'fonts/OpenSans-ExtraBoldItalic.ttf';
exports.bm.$type = 'ttf';


/**
 * @function bn
 * @returns {buffer} - data for theme "bn".
 */
exports.bn = function bn() {
    return _read('fonts/OpenSans-Italic.ttf');
};
exports.bn.$src = 'fonts/OpenSans-Italic.ttf';
exports.bn.$type = 'ttf';


/**
 * @function bo
 * @returns {buffer} - data for theme "bo".
 */
exports.bo = function bo() {
    return _read('fonts/OpenSans-Light.ttf');
};
exports.bo.$src = 'fonts/OpenSans-Light.ttf';
exports.bo.$type = 'ttf';


/**
 * @function bp
 * @returns {buffer} - data for theme "bp".
 */
exports.bp = function bp() {
    return _read('fonts/OpenSans-LightItalic.ttf');
};
exports.bp.$src = 'fonts/OpenSans-LightItalic.ttf';
exports.bp.$type = 'ttf';


/**
 * @function bq
 * @returns {buffer} - data for theme "bq".
 */
exports.bq = function bq() {
    return _read('fonts/OpenSans-Regular.ttf');
};
exports.bq.$src = 'fonts/OpenSans-Regular.ttf';
exports.bq.$type = 'ttf';


/**
 * @function br
 * @returns {buffer} - data for theme "br".
 */
exports.br = function br() {
    return _read('fonts/OpenSans-Semibold.ttf');
};
exports.br.$src = 'fonts/OpenSans-Semibold.ttf';
exports.br.$type = 'ttf';


/**
 * @function bs
 * @returns {buffer} - data for theme "bs".
 */
exports.bs = function bs() {
    return _read('fonts/OpenSans-SemiboldItalic.ttf');
};
exports.bs.$src = 'fonts/OpenSans-SemiboldItalic.ttf';
exports.bs.$type = 'ttf';


/**
 * @function bt
 * @returns {buffer} - data for theme "bt".
 */
exports.bt = function bt() {
    return _read('fonts/Roboto-Black.ttf');
};
exports.bt.$src = 'fonts/Roboto-Black.ttf';
exports.bt.$type = 'ttf';


/**
 * @function bu
 * @returns {buffer} - data for theme "bu".
 */
exports.bu = function bu() {
    return _read('fonts/Roboto-BlackItalic.ttf');
};
exports.bu.$src = 'fonts/Roboto-BlackItalic.ttf';
exports.bu.$type = 'ttf';


/**
 * @function bv
 * @returns {buffer} - data for theme "bv".
 */
exports.bv = function bv() {
    return _read('fonts/Roboto-Bold.ttf');
};
exports.bv.$src = 'fonts/Roboto-Bold.ttf';
exports.bv.$type = 'ttf';


/**
 * @function bw
 * @returns {buffer} - data for theme "bw".
 */
exports.bw = function bw() {
    return _read('fonts/Roboto-BoldItalic.ttf');
};
exports.bw.$src = 'fonts/Roboto-BoldItalic.ttf';
exports.bw.$type = 'ttf';


/**
 * @function bx
 * @returns {buffer} - data for theme "bx".
 */
exports.bx = function bx() {
    return _read('fonts/Roboto-Italic.ttf');
};
exports.bx.$src = 'fonts/Roboto-Italic.ttf';
exports.bx.$type = 'ttf';


/**
 * @function by
 * @returns {buffer} - data for theme "by".
 */
exports.by = function by() {
    return _read('fonts/Roboto-Light.ttf');
};
exports.by.$src = 'fonts/Roboto-Light.ttf';
exports.by.$type = 'ttf';


/**
 * @function bz
 * @returns {buffer} - data for theme "bz".
 */
exports.bz = function bz() {
    return _read('fonts/Roboto-LightItalic.ttf');
};
exports.bz.$src = 'fonts/Roboto-LightItalic.ttf';
exports.bz.$type = 'ttf';


/**
 * @function ca
 * @returns {buffer} - data for theme "ca".
 */
exports.ca = function ca() {
    return _read('fonts/Roboto-Medium.ttf');
};
exports.ca.$src = 'fonts/Roboto-Medium.ttf';
exports.ca.$type = 'ttf';


/**
 * @function cb
 * @returns {buffer} - data for theme "cb".
 */
exports.cb = function cb() {
    return _read('fonts/Roboto-MediumItalic.ttf');
};
exports.cb.$src = 'fonts/Roboto-MediumItalic.ttf';
exports.cb.$type = 'ttf';


/**
 * @function cc
 * @returns {buffer} - data for theme "cc".
 */
exports.cc = function cc() {
    return _read('fonts/Roboto-Regular.ttf');
};
exports.cc.$src = 'fonts/Roboto-Regular.ttf';
exports.cc.$type = 'ttf';


/**
 * @function cd
 * @returns {buffer} - data for theme "cd".
 */
exports.cd = function cd() {
    return _read('fonts/Roboto-Thin.ttf');
};
exports.cd.$src = 'fonts/Roboto-Thin.ttf';
exports.cd.$type = 'ttf';


/**
 * @function ce
 * @returns {buffer} - data for theme "ce".
 */
exports.ce = function ce() {
    return _read('fonts/Roboto-ThinItalic.ttf');
};
exports.ce.$src = 'fonts/Roboto-ThinItalic.ttf';
exports.ce.$type = 'ttf';


/**
 * @function cf
 * @returns {buffer} - data for theme "cf".
 */
exports.cf = function cf() {
    return _read('fonts/RobotoCondensed-Bold.ttf');
};
exports.cf.$src = 'fonts/RobotoCondensed-Bold.ttf';
exports.cf.$type = 'ttf';


/**
 * @function cg
 * @returns {buffer} - data for theme "cg".
 */
exports.cg = function cg() {
    return _read('fonts/RobotoCondensed-BoldItalic.ttf');
};
exports.cg.$src = 'fonts/RobotoCondensed-BoldItalic.ttf';
exports.cg.$type = 'ttf';


/**
 * @function ch
 * @returns {buffer} - data for theme "ch".
 */
exports.ch = function ch() {
    return _read('fonts/RobotoCondensed-Italic.ttf');
};
exports.ch.$src = 'fonts/RobotoCondensed-Italic.ttf';
exports.ch.$type = 'ttf';


/**
 * @function ci
 * @returns {buffer} - data for theme "ci".
 */
exports.ci = function ci() {
    return _read('fonts/RobotoCondensed-Light.ttf');
};
exports.ci.$src = 'fonts/RobotoCondensed-Light.ttf';
exports.ci.$type = 'ttf';


/**
 * @function cj
 * @returns {buffer} - data for theme "cj".
 */
exports.cj = function cj() {
    return _read('fonts/RobotoCondensed-LightItalic.ttf');
};
exports.cj.$src = 'fonts/RobotoCondensed-LightItalic.ttf';
exports.cj.$type = 'ttf';


/**
 * @function ck
 * @returns {buffer} - data for theme "ck".
 */
exports.ck = function ck() {
    return _read('fonts/RobotoCondensed-Regular.ttf');
};
exports.ck.$src = 'fonts/RobotoCondensed-Regular.ttf';
exports.ck.$type = 'ttf';


/**
 * @function cl
 * @returns {buffer} - data for theme "cl".
 */
exports.cl = function cl() {
    return _read('fonts/SourceCodePro-Black.ttf');
};
exports.cl.$src = 'fonts/SourceCodePro-Black.ttf';
exports.cl.$type = 'ttf';


/**
 * @function cm
 * @returns {buffer} - data for theme "cm".
 */
exports.cm = function cm() {
    return _read('fonts/SourceCodePro-Bold.ttf');
};
exports.cm.$src = 'fonts/SourceCodePro-Bold.ttf';
exports.cm.$type = 'ttf';


/**
 * @function cn
 * @returns {buffer} - data for theme "cn".
 */
exports.cn = function cn() {
    return _read('fonts/SourceCodePro-ExtraLight.ttf');
};
exports.cn.$src = 'fonts/SourceCodePro-ExtraLight.ttf';
exports.cn.$type = 'ttf';


/**
 * @function co
 * @returns {buffer} - data for theme "co".
 */
exports.co = function co() {
    return _read('fonts/SourceCodePro-Light.ttf');
};
exports.co.$src = 'fonts/SourceCodePro-Light.ttf';
exports.co.$type = 'ttf';


/**
 * @function cp
 * @returns {buffer} - data for theme "cp".
 */
exports.cp = function cp() {
    return _read('fonts/SourceCodePro-Medium.ttf');
};
exports.cp.$src = 'fonts/SourceCodePro-Medium.ttf';
exports.cp.$type = 'ttf';


/**
 * @function cq
 * @returns {buffer} - data for theme "cq".
 */
exports.cq = function cq() {
    return _read('fonts/SourceCodePro-Regular.ttf');
};
exports.cq.$src = 'fonts/SourceCodePro-Regular.ttf';
exports.cq.$type = 'ttf';


/**
 * @function cr
 * @returns {buffer} - data for theme "cr".
 */
exports.cr = function cr() {
    return _read('fonts/SourceCodePro-Semibold.ttf');
};
exports.cr.$src = 'fonts/SourceCodePro-Semibold.ttf';
exports.cr.$type = 'ttf';


/**
 * @function cs
 * @returns {buffer} - data for theme "cs".
 */
exports.cs = function cs() {
    return _read('fonts/SourceSerifPro-Bold.ttf');
};
exports.cs.$src = 'fonts/SourceSerifPro-Bold.ttf';
exports.cs.$type = 'ttf';


/**
 * @function ct
 * @returns {buffer} - data for theme "ct".
 */
exports.ct = function ct() {
    return _read('fonts/SourceSerifPro-Regular.ttf');
};
exports.ct.$src = 'fonts/SourceSerifPro-Regular.ttf';
exports.ct.$type = 'ttf';


/**
 * @function cu
 * @returns {buffer} - data for theme "cu".
 */
exports.cu = function cu() {
    return _read('fonts/SourceSerifPro-Semibold.ttf');
};
exports.cu.$src = 'fonts/SourceSerifPro-Semibold.ttf';
exports.cu.$type = 'ttf';


/**
 * @function cv
 * @returns {buffer} - data for theme "cv".
 */
exports.cv = function cv() {
    return _read('fonts/Squarish Sans CT Regular SC.ttf');
};
exports.cv.$src = 'fonts/Squarish Sans CT Regular SC.ttf';
exports.cv.$type = 'ttf';


/**
 * @function cw
 * @returns {buffer} - data for theme "cw".
 */
exports.cw = function cw() {
    return _read('fonts/Squarish Sans CT Regular.ttf');
};
exports.cw.$src = 'fonts/Squarish Sans CT Regular.ttf';
exports.cw.$type = 'ttf';


/**
 * @function cx
 * @returns {buffer} - data for theme "cx".
 */
exports.cx = function cx() {
    return _read('fonts/Transport Medium Greek.ttf');
};
exports.cx.$src = 'fonts/Transport Medium Greek.ttf';
exports.cx.$type = 'ttf';


/**
 * @function cy
 * @returns {buffer} - data for theme "cy".
 */
exports.cy = function cy() {
    return _read('fonts/Ubuntu-B.ttf');
};
exports.cy.$src = 'fonts/Ubuntu-B.ttf';
exports.cy.$type = 'ttf';


/**
 * @function cz
 * @returns {buffer} - data for theme "cz".
 */
exports.cz = function cz() {
    return _read('fonts/Ubuntu-BI.ttf');
};
exports.cz.$src = 'fonts/Ubuntu-BI.ttf';
exports.cz.$type = 'ttf';


/**
 * @function da
 * @returns {buffer} - data for theme "da".
 */
exports.da = function da() {
    return _read('fonts/Ubuntu-C.ttf');
};
exports.da.$src = 'fonts/Ubuntu-C.ttf';
exports.da.$type = 'ttf';


/**
 * @function db
 * @returns {buffer} - data for theme "db".
 */
exports.db = function db() {
    return _read('fonts/Ubuntu-L.ttf');
};
exports.db.$src = 'fonts/Ubuntu-L.ttf';
exports.db.$type = 'ttf';


/**
 * @function dc
 * @returns {buffer} - data for theme "dc".
 */
exports.dc = function dc() {
    return _read('fonts/Ubuntu-LI.ttf');
};
exports.dc.$src = 'fonts/Ubuntu-LI.ttf';
exports.dc.$type = 'ttf';


/**
 * @function dd
 * @returns {buffer} - data for theme "dd".
 */
exports.dd = function dd() {
    return _read('fonts/Ubuntu-M.ttf');
};
exports.dd.$src = 'fonts/Ubuntu-M.ttf';
exports.dd.$type = 'ttf';


/**
 * @function de
 * @returns {buffer} - data for theme "de".
 */
exports.de = function de() {
    return _read('fonts/Ubuntu-MI.ttf');
};
exports.de.$src = 'fonts/Ubuntu-MI.ttf';
exports.de.$type = 'ttf';


/**
 * @function df
 * @returns {buffer} - data for theme "df".
 */
exports.df = function df() {
    return _read('fonts/Ubuntu-R.ttf');
};
exports.df.$src = 'fonts/Ubuntu-R.ttf';
exports.df.$type = 'ttf';


/**
 * @function dg
 * @returns {buffer} - data for theme "dg".
 */
exports.dg = function dg() {
    return _read('fonts/Ubuntu-RI.ttf');
};
exports.dg.$src = 'fonts/Ubuntu-RI.ttf';
exports.dg.$type = 'ttf';


/**
 * @function dh
 * @returns {buffer} - data for theme "dh".
 */
exports.dh = function dh() {
    return _read('fonts/UbuntuMono-B.ttf');
};
exports.dh.$src = 'fonts/UbuntuMono-B.ttf';
exports.dh.$type = 'ttf';


/**
 * @function di
 * @returns {buffer} - data for theme "di".
 */
exports.di = function di() {
    return _read('fonts/UbuntuMono-BI.ttf');
};
exports.di.$src = 'fonts/UbuntuMono-BI.ttf';
exports.di.$type = 'ttf';


/**
 * @function dj
 * @returns {buffer} - data for theme "dj".
 */
exports.dj = function dj() {
    return _read('fonts/UbuntuMono-R.ttf');
};
exports.dj.$src = 'fonts/UbuntuMono-R.ttf';
exports.dj.$type = 'ttf';


/**
 * @function dk
 * @returns {buffer} - data for theme "dk".
 */
exports.dk = function dk() {
    return _read('fonts/UbuntuMono-RI.ttf');
};
exports.dk.$src = 'fonts/UbuntuMono-RI.ttf';
exports.dk.$type = 'ttf';




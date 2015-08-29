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
 * @retusn {buffer} - data for theme "a".
 */
exports.a = function a() {
    return _read('fonts/Alef-Bold.ttf');
};

/**
 * @function b
 * @retusn {buffer} - data for theme "b".
 */
exports.b = function b() {
    return _read('fonts/Alef-Regular.ttf');
};

/**
 * @function c
 * @retusn {buffer} - data for theme "c".
 */
exports.c = function c() {
    return _read('fonts/Anonymous Pro B.ttf');
};

/**
 * @function d
 * @retusn {buffer} - data for theme "d".
 */
exports.d = function d() {
    return _read('fonts/Anonymous Pro BI.ttf');
};

/**
 * @function e
 * @retusn {buffer} - data for theme "e".
 */
exports.e = function e() {
    return _read('fonts/Anonymous Pro I.ttf');
};

/**
 * @function f
 * @retusn {buffer} - data for theme "f".
 */
exports.f = function f() {
    return _read('fonts/Anonymous Pro Minus B.ttf');
};

/**
 * @function g
 * @retusn {buffer} - data for theme "g".
 */
exports.g = function g() {
    return _read('fonts/Anonymous Pro Minus BI.ttf');
};

/**
 * @function h
 * @retusn {buffer} - data for theme "h".
 */
exports.h = function h() {
    return _read('fonts/Anonymous Pro Minus I.ttf');
};

/**
 * @function i
 * @retusn {buffer} - data for theme "i".
 */
exports.i = function i() {
    return _read('fonts/Anonymous Pro Minus.ttf');
};

/**
 * @function j
 * @retusn {buffer} - data for theme "j".
 */
exports.j = function j() {
    return _read('fonts/Anonymous Pro.ttf');
};

/**
 * @function k
 * @retusn {buffer} - data for theme "k".
 */
exports.k = function k() {
    return _read('fonts/Cantarell-Bold.ttf');
};

/**
 * @function l
 * @retusn {buffer} - data for theme "l".
 */
exports.l = function l() {
    return _read('fonts/Cantarell-BoldOblique.ttf');
};

/**
 * @function m
 * @retusn {buffer} - data for theme "m".
 */
exports.m = function m() {
    return _read('fonts/Cantarell-Oblique.ttf');
};

/**
 * @function n
 * @retusn {buffer} - data for theme "n".
 */
exports.n = function n() {
    return _read('fonts/Cantarell-Regular.ttf');
};

/**
 * @function o
 * @retusn {buffer} - data for theme "o".
 */
exports.o = function o() {
    return _read('fonts/Comfortaa-Bold.ttf');
};

/**
 * @function p
 * @retusn {buffer} - data for theme "p".
 */
exports.p = function p() {
    return _read('fonts/Comfortaa-Light.ttf');
};

/**
 * @function q
 * @retusn {buffer} - data for theme "q".
 */
exports.q = function q() {
    return _read('fonts/Comfortaa-Regular.ttf');
};

/**
 * @function r
 * @retusn {buffer} - data for theme "r".
 */
exports.r = function r() {
    return _read('fonts/ComicNeue-Angular-Bold-Oblique.ttf');
};

/**
 * @function s
 * @retusn {buffer} - data for theme "s".
 */
exports.s = function s() {
    return _read('fonts/ComicNeue-Angular-Bold.ttf');
};

/**
 * @function t
 * @retusn {buffer} - data for theme "t".
 */
exports.t = function t() {
    return _read('fonts/ComicNeue-Angular-Light-Oblique.ttf');
};

/**
 * @function u
 * @retusn {buffer} - data for theme "u".
 */
exports.u = function u() {
    return _read('fonts/ComicNeue-Angular-Light.ttf');
};

/**
 * @function v
 * @retusn {buffer} - data for theme "v".
 */
exports.v = function v() {
    return _read('fonts/ComicNeue-Angular-Regular-Oblique.ttf');
};

/**
 * @function w
 * @retusn {buffer} - data for theme "w".
 */
exports.w = function w() {
    return _read('fonts/ComicNeue-Angular-Regular.ttf');
};

/**
 * @function x
 * @retusn {buffer} - data for theme "x".
 */
exports.x = function x() {
    return _read('fonts/ComicNeue-Bold-Oblique.ttf');
};

/**
 * @function y
 * @retusn {buffer} - data for theme "y".
 */
exports.y = function y() {
    return _read('fonts/ComicNeue-Bold.ttf');
};

/**
 * @function z
 * @retusn {buffer} - data for theme "z".
 */
exports.z = function z() {
    return _read('fonts/ComicNeue-Light-Oblique.ttf');
};

/**
 * @function aa
 * @retusn {buffer} - data for theme "aa".
 */
exports.aa = function aa() {
    return _read('fonts/ComicNeue-Light.ttf');
};

/**
 * @function ab
 * @retusn {buffer} - data for theme "ab".
 */
exports.ab = function ab() {
    return _read('fonts/ComicNeue-Regular-Oblique.ttf');
};

/**
 * @function ac
 * @retusn {buffer} - data for theme "ac".
 */
exports.ac = function ac() {
    return _read('fonts/ComicNeue-Regular.ttf');
};

/**
 * @function ad
 * @retusn {buffer} - data for theme "ad".
 */
exports.ad = function ad() {
    return _read('fonts/Dosis-Bold.ttf');
};

/**
 * @function ae
 * @retusn {buffer} - data for theme "ae".
 */
exports.ae = function ae() {
    return _read('fonts/Dosis-Book.ttf');
};

/**
 * @function af
 * @retusn {buffer} - data for theme "af".
 */
exports.af = function af() {
    return _read('fonts/Dosis-ExtraBold.ttf');
};

/**
 * @function ag
 * @retusn {buffer} - data for theme "ag".
 */
exports.ag = function ag() {
    return _read('fonts/Dosis-ExtraLight.ttf');
};

/**
 * @function ah
 * @retusn {buffer} - data for theme "ah".
 */
exports.ah = function ah() {
    return _read('fonts/Dosis-Light.ttf');
};

/**
 * @function ai
 * @retusn {buffer} - data for theme "ai".
 */
exports.ai = function ai() {
    return _read('fonts/Dosis-Medium.ttf');
};

/**
 * @function aj
 * @retusn {buffer} - data for theme "aj".
 */
exports.aj = function aj() {
    return _read('fonts/Dosis-SemiBold.ttf');
};

/**
 * @function ak
 * @retusn {buffer} - data for theme "ak".
 */
exports.ak = function ak() {
    return _read('fonts/EkMukta-Bold.ttf');
};

/**
 * @function al
 * @retusn {buffer} - data for theme "al".
 */
exports.al = function al() {
    return _read('fonts/EkMukta-ExtraBold.ttf');
};

/**
 * @function am
 * @retusn {buffer} - data for theme "am".
 */
exports.am = function am() {
    return _read('fonts/EkMukta-ExtraLight.ttf');
};

/**
 * @function an
 * @retusn {buffer} - data for theme "an".
 */
exports.an = function an() {
    return _read('fonts/EkMukta-Light.ttf');
};

/**
 * @function ao
 * @retusn {buffer} - data for theme "ao".
 */
exports.ao = function ao() {
    return _read('fonts/EkMukta-Medium.ttf');
};

/**
 * @function ap
 * @retusn {buffer} - data for theme "ap".
 */
exports.ap = function ap() {
    return _read('fonts/EkMukta-Regular.ttf');
};

/**
 * @function aq
 * @retusn {buffer} - data for theme "aq".
 */
exports.aq = function aq() {
    return _read('fonts/EkMukta-SemiBold.ttf');
};

/**
 * @function ar
 * @retusn {buffer} - data for theme "ar".
 */
exports.ar = function ar() {
    return _read('fonts/FreeMono.ttf');
};

/**
 * @function as
 * @retusn {buffer} - data for theme "as".
 */
exports.as = function as() {
    return _read('fonts/FreeMonoBold.ttf');
};

/**
 * @function at
 * @retusn {buffer} - data for theme "at".
 */
exports.at = function at() {
    return _read('fonts/FreeMonoBoldOblique.ttf');
};

/**
 * @function au
 * @retusn {buffer} - data for theme "au".
 */
exports.au = function au() {
    return _read('fonts/FreeMonoOblique.ttf');
};

/**
 * @function av
 * @retusn {buffer} - data for theme "av".
 */
exports.av = function av() {
    return _read('fonts/FreeSans.ttf');
};

/**
 * @function aw
 * @retusn {buffer} - data for theme "aw".
 */
exports.aw = function aw() {
    return _read('fonts/FreeSansBold.ttf');
};

/**
 * @function ax
 * @retusn {buffer} - data for theme "ax".
 */
exports.ax = function ax() {
    return _read('fonts/FreeSansBoldOblique.ttf');
};

/**
 * @function ay
 * @retusn {buffer} - data for theme "ay".
 */
exports.ay = function ay() {
    return _read('fonts/FreeSansOblique.ttf');
};

/**
 * @function az
 * @retusn {buffer} - data for theme "az".
 */
exports.az = function az() {
    return _read('fonts/Metrophobic.ttf');
};

/**
 * @function ba
 * @retusn {buffer} - data for theme "ba".
 */
exports.ba = function ba() {
    return _read('fonts/MgOpenCosmeticaRegular.ttf');
};

/**
 * @function bb
 * @retusn {buffer} - data for theme "bb".
 */
exports.bb = function bb() {
    return _read('fonts/MgOpenModataBold.ttf');
};

/**
 * @function bc
 * @retusn {buffer} - data for theme "bc".
 */
exports.bc = function bc() {
    return _read('fonts/MgOpenModataBoldOblique.ttf');
};

/**
 * @function bd
 * @retusn {buffer} - data for theme "bd".
 */
exports.bd = function bd() {
    return _read('fonts/MgOpenModataOblique.ttf');
};

/**
 * @function be
 * @retusn {buffer} - data for theme "be".
 */
exports.be = function be() {
    return _read('fonts/MgOpenModataRegular.ttf');
};

/**
 * @function bf
 * @retusn {buffer} - data for theme "bf".
 */
exports.bf = function bf() {
    return _read('fonts/OCRA.ttf');
};

/**
 * @function bg
 * @retusn {buffer} - data for theme "bg".
 */
exports.bg = function bg() {
    return _read('fonts/OpenSans-Bold.ttf');
};

/**
 * @function bh
 * @retusn {buffer} - data for theme "bh".
 */
exports.bh = function bh() {
    return _read('fonts/OpenSans-BoldItalic.ttf');
};

/**
 * @function bi
 * @retusn {buffer} - data for theme "bi".
 */
exports.bi = function bi() {
    return _read('fonts/OpenSans-CondBold.ttf');
};

/**
 * @function bj
 * @retusn {buffer} - data for theme "bj".
 */
exports.bj = function bj() {
    return _read('fonts/OpenSans-CondLight.ttf');
};

/**
 * @function bk
 * @retusn {buffer} - data for theme "bk".
 */
exports.bk = function bk() {
    return _read('fonts/OpenSans-CondLightItalic.ttf');
};

/**
 * @function bl
 * @retusn {buffer} - data for theme "bl".
 */
exports.bl = function bl() {
    return _read('fonts/OpenSans-ExtraBold.ttf');
};

/**
 * @function bm
 * @retusn {buffer} - data for theme "bm".
 */
exports.bm = function bm() {
    return _read('fonts/OpenSans-ExtraBoldItalic.ttf');
};

/**
 * @function bn
 * @retusn {buffer} - data for theme "bn".
 */
exports.bn = function bn() {
    return _read('fonts/OpenSans-Italic.ttf');
};

/**
 * @function bo
 * @retusn {buffer} - data for theme "bo".
 */
exports.bo = function bo() {
    return _read('fonts/OpenSans-Light.ttf');
};

/**
 * @function bp
 * @retusn {buffer} - data for theme "bp".
 */
exports.bp = function bp() {
    return _read('fonts/OpenSans-LightItalic.ttf');
};

/**
 * @function bq
 * @retusn {buffer} - data for theme "bq".
 */
exports.bq = function bq() {
    return _read('fonts/OpenSans-Regular.ttf');
};

/**
 * @function br
 * @retusn {buffer} - data for theme "br".
 */
exports.br = function br() {
    return _read('fonts/OpenSans-Semibold.ttf');
};

/**
 * @function bs
 * @retusn {buffer} - data for theme "bs".
 */
exports.bs = function bs() {
    return _read('fonts/OpenSans-SemiboldItalic.ttf');
};

/**
 * @function bt
 * @retusn {buffer} - data for theme "bt".
 */
exports.bt = function bt() {
    return _read('fonts/Roboto-Black.ttf');
};

/**
 * @function bu
 * @retusn {buffer} - data for theme "bu".
 */
exports.bu = function bu() {
    return _read('fonts/Roboto-BlackItalic.ttf');
};

/**
 * @function bv
 * @retusn {buffer} - data for theme "bv".
 */
exports.bv = function bv() {
    return _read('fonts/Roboto-Bold.ttf');
};

/**
 * @function bw
 * @retusn {buffer} - data for theme "bw".
 */
exports.bw = function bw() {
    return _read('fonts/Roboto-BoldItalic.ttf');
};

/**
 * @function bx
 * @retusn {buffer} - data for theme "bx".
 */
exports.bx = function bx() {
    return _read('fonts/Roboto-Italic.ttf');
};

/**
 * @function by
 * @retusn {buffer} - data for theme "by".
 */
exports.by = function by() {
    return _read('fonts/Roboto-Light.ttf');
};

/**
 * @function bz
 * @retusn {buffer} - data for theme "bz".
 */
exports.bz = function bz() {
    return _read('fonts/Roboto-LightItalic.ttf');
};

/**
 * @function ca
 * @retusn {buffer} - data for theme "ca".
 */
exports.ca = function ca() {
    return _read('fonts/Roboto-Medium.ttf');
};

/**
 * @function cb
 * @retusn {buffer} - data for theme "cb".
 */
exports.cb = function cb() {
    return _read('fonts/Roboto-MediumItalic.ttf');
};

/**
 * @function cc
 * @retusn {buffer} - data for theme "cc".
 */
exports.cc = function cc() {
    return _read('fonts/Roboto-Regular.ttf');
};

/**
 * @function cd
 * @retusn {buffer} - data for theme "cd".
 */
exports.cd = function cd() {
    return _read('fonts/Roboto-Thin.ttf');
};

/**
 * @function ce
 * @retusn {buffer} - data for theme "ce".
 */
exports.ce = function ce() {
    return _read('fonts/Roboto-ThinItalic.ttf');
};

/**
 * @function cf
 * @retusn {buffer} - data for theme "cf".
 */
exports.cf = function cf() {
    return _read('fonts/RobotoCondensed-Bold.ttf');
};

/**
 * @function cg
 * @retusn {buffer} - data for theme "cg".
 */
exports.cg = function cg() {
    return _read('fonts/RobotoCondensed-BoldItalic.ttf');
};

/**
 * @function ch
 * @retusn {buffer} - data for theme "ch".
 */
exports.ch = function ch() {
    return _read('fonts/RobotoCondensed-Italic.ttf');
};

/**
 * @function ci
 * @retusn {buffer} - data for theme "ci".
 */
exports.ci = function ci() {
    return _read('fonts/RobotoCondensed-Light.ttf');
};

/**
 * @function cj
 * @retusn {buffer} - data for theme "cj".
 */
exports.cj = function cj() {
    return _read('fonts/RobotoCondensed-LightItalic.ttf');
};

/**
 * @function ck
 * @retusn {buffer} - data for theme "ck".
 */
exports.ck = function ck() {
    return _read('fonts/RobotoCondensed-Regular.ttf');
};

/**
 * @function cl
 * @retusn {buffer} - data for theme "cl".
 */
exports.cl = function cl() {
    return _read('fonts/SourceCodePro-Black.ttf');
};

/**
 * @function cm
 * @retusn {buffer} - data for theme "cm".
 */
exports.cm = function cm() {
    return _read('fonts/SourceCodePro-Bold.ttf');
};

/**
 * @function cn
 * @retusn {buffer} - data for theme "cn".
 */
exports.cn = function cn() {
    return _read('fonts/SourceCodePro-ExtraLight.ttf');
};

/**
 * @function co
 * @retusn {buffer} - data for theme "co".
 */
exports.co = function co() {
    return _read('fonts/SourceCodePro-Light.ttf');
};

/**
 * @function cp
 * @retusn {buffer} - data for theme "cp".
 */
exports.cp = function cp() {
    return _read('fonts/SourceCodePro-Medium.ttf');
};

/**
 * @function cq
 * @retusn {buffer} - data for theme "cq".
 */
exports.cq = function cq() {
    return _read('fonts/SourceCodePro-Regular.ttf');
};

/**
 * @function cr
 * @retusn {buffer} - data for theme "cr".
 */
exports.cr = function cr() {
    return _read('fonts/SourceCodePro-Semibold.ttf');
};

/**
 * @function cs
 * @retusn {buffer} - data for theme "cs".
 */
exports.cs = function cs() {
    return _read('fonts/SourceSerifPro-Bold.ttf');
};

/**
 * @function ct
 * @retusn {buffer} - data for theme "ct".
 */
exports.ct = function ct() {
    return _read('fonts/SourceSerifPro-Regular.ttf');
};

/**
 * @function cu
 * @retusn {buffer} - data for theme "cu".
 */
exports.cu = function cu() {
    return _read('fonts/SourceSerifPro-Semibold.ttf');
};

/**
 * @function cv
 * @retusn {buffer} - data for theme "cv".
 */
exports.cv = function cv() {
    return _read('fonts/Squarish Sans CT Regular SC.ttf');
};

/**
 * @function cw
 * @retusn {buffer} - data for theme "cw".
 */
exports.cw = function cw() {
    return _read('fonts/Squarish Sans CT Regular.ttf');
};

/**
 * @function cx
 * @retusn {buffer} - data for theme "cx".
 */
exports.cx = function cx() {
    return _read('fonts/Transport Medium Greek.ttf');
};

/**
 * @function cy
 * @retusn {buffer} - data for theme "cy".
 */
exports.cy = function cy() {
    return _read('fonts/Ubuntu-B.ttf');
};

/**
 * @function cz
 * @retusn {buffer} - data for theme "cz".
 */
exports.cz = function cz() {
    return _read('fonts/Ubuntu-BI.ttf');
};

/**
 * @function da
 * @retusn {buffer} - data for theme "da".
 */
exports.da = function da() {
    return _read('fonts/Ubuntu-C.ttf');
};

/**
 * @function db
 * @retusn {buffer} - data for theme "db".
 */
exports.db = function db() {
    return _read('fonts/Ubuntu-L.ttf');
};

/**
 * @function dc
 * @retusn {buffer} - data for theme "dc".
 */
exports.dc = function dc() {
    return _read('fonts/Ubuntu-LI.ttf');
};

/**
 * @function dd
 * @retusn {buffer} - data for theme "dd".
 */
exports.dd = function dd() {
    return _read('fonts/Ubuntu-M.ttf');
};

/**
 * @function de
 * @retusn {buffer} - data for theme "de".
 */
exports.de = function de() {
    return _read('fonts/Ubuntu-MI.ttf');
};

/**
 * @function df
 * @retusn {buffer} - data for theme "df".
 */
exports.df = function df() {
    return _read('fonts/Ubuntu-R.ttf');
};

/**
 * @function dg
 * @retusn {buffer} - data for theme "dg".
 */
exports.dg = function dg() {
    return _read('fonts/Ubuntu-RI.ttf');
};

/**
 * @function dh
 * @retusn {buffer} - data for theme "dh".
 */
exports.dh = function dh() {
    return _read('fonts/UbuntuMono-B.ttf');
};

/**
 * @function di
 * @retusn {buffer} - data for theme "di".
 */
exports.di = function di() {
    return _read('fonts/UbuntuMono-BI.ttf');
};

/**
 * @function dj
 * @retusn {buffer} - data for theme "dj".
 */
exports.dj = function dj() {
    return _read('fonts/UbuntuMono-R.ttf');
};

/**
 * @function dk
 * @retusn {buffer} - data for theme "dk".
 */
exports.dk = function dk() {
    return _read('fonts/UbuntuMono-RI.ttf');
};



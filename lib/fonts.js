/**
 * Font data module.
 * @module fur-fonts/lib/fonts
 */

const path = require('path')
const fs = require('fs')

const assetsDir = path.resolve(__dirname, '../assets')

function _read (filename) {
  return fs.readFileSync(path.resolve(assetsDir, filename))
}

/**
 * @function a
 * @returns {buffer} - data for theme "a".
 */
function a () {
  return _read('fonts/Alef-Bold.ttf')
}

exports.a = Object.assign(a, {
  $src: 'fonts/Alef-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function b
 * @returns {buffer} - data for theme "b".
 */
function b () {
  return _read('fonts/Alef-Regular.ttf')
}

exports.b = Object.assign(b, {
  $src: 'fonts/Alef-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function c
 * @returns {buffer} - data for theme "c".
 */
function c () {
  return _read('fonts/Anonymous Pro B.ttf')
}

exports.c = Object.assign(c, {
  $src: 'fonts/Anonymous Pro B.ttf',
  $type: 'ttf'
})

/**
 * @function d
 * @returns {buffer} - data for theme "d".
 */
function d () {
  return _read('fonts/Anonymous Pro BI.ttf')
}

exports.d = Object.assign(d, {
  $src: 'fonts/Anonymous Pro BI.ttf',
  $type: 'ttf'
})

/**
 * @function e
 * @returns {buffer} - data for theme "e".
 */
function e () {
  return _read('fonts/Anonymous Pro I.ttf')
}

exports.e = Object.assign(e, {
  $src: 'fonts/Anonymous Pro I.ttf',
  $type: 'ttf'
})

/**
 * @function f
 * @returns {buffer} - data for theme "f".
 */
function f () {
  return _read('fonts/Anonymous Pro Minus B.ttf')
}

exports.f = Object.assign(f, {
  $src: 'fonts/Anonymous Pro Minus B.ttf',
  $type: 'ttf'
})

/**
 * @function g
 * @returns {buffer} - data for theme "g".
 */
function g () {
  return _read('fonts/Anonymous Pro Minus BI.ttf')
}

exports.g = Object.assign(g, {
  $src: 'fonts/Anonymous Pro Minus BI.ttf',
  $type: 'ttf'
})

/**
 * @function h
 * @returns {buffer} - data for theme "h".
 */
function h () {
  return _read('fonts/Anonymous Pro Minus I.ttf')
}

exports.h = Object.assign(h, {
  $src: 'fonts/Anonymous Pro Minus I.ttf',
  $type: 'ttf'
})

/**
 * @function i
 * @returns {buffer} - data for theme "i".
 */
function i () {
  return _read('fonts/Anonymous Pro Minus.ttf')
}

exports.i = Object.assign(i, {
  $src: 'fonts/Anonymous Pro Minus.ttf',
  $type: 'ttf'
})

/**
 * @function j
 * @returns {buffer} - data for theme "j".
 */
function j () {
  return _read('fonts/Anonymous Pro.ttf')
}

exports.j = Object.assign(j, {
  $src: 'fonts/Anonymous Pro.ttf',
  $type: 'ttf'
})

/**
 * @function k
 * @returns {buffer} - data for theme "k".
 */
function k () {
  return _read('fonts/Cantarell-Bold.ttf')
}

exports.k = Object.assign(k, {
  $src: 'fonts/Cantarell-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function l
 * @returns {buffer} - data for theme "l".
 */
function l () {
  return _read('fonts/Cantarell-BoldOblique.ttf')
}

exports.l = Object.assign(l, {
  $src: 'fonts/Cantarell-BoldOblique.ttf',
  $type: 'ttf'
})

/**
 * @function m
 * @returns {buffer} - data for theme "m".
 */
function m () {
  return _read('fonts/Cantarell-Oblique.ttf')
}

exports.m = Object.assign(m, {
  $src: 'fonts/Cantarell-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function n
 * @returns {buffer} - data for theme "n".
 */
function n () {
  return _read('fonts/Cantarell-Regular.ttf')
}

exports.n = Object.assign(n, {
  $src: 'fonts/Cantarell-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function o
 * @returns {buffer} - data for theme "o".
 */
function o () {
  return _read('fonts/Comfortaa-Bold.ttf')
}

exports.o = Object.assign(o, {
  $src: 'fonts/Comfortaa-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function p
 * @returns {buffer} - data for theme "p".
 */
function p () {
  return _read('fonts/Comfortaa-Light.ttf')
}

exports.p = Object.assign(p, {
  $src: 'fonts/Comfortaa-Light.ttf',
  $type: 'ttf'
})

/**
 * @function q
 * @returns {buffer} - data for theme "q".
 */
function q () {
  return _read('fonts/Comfortaa-Regular.ttf')
}

exports.q = Object.assign(q, {
  $src: 'fonts/Comfortaa-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function r
 * @returns {buffer} - data for theme "r".
 */
function r () {
  return _read('fonts/ComicNeue-Angular-Bold-Oblique.ttf')
}

exports.r = Object.assign(r, {
  $src: 'fonts/ComicNeue-Angular-Bold-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function s
 * @returns {buffer} - data for theme "s".
 */
function s () {
  return _read('fonts/ComicNeue-Angular-Bold.ttf')
}

exports.s = Object.assign(s, {
  $src: 'fonts/ComicNeue-Angular-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function t
 * @returns {buffer} - data for theme "t".
 */
function t () {
  return _read('fonts/ComicNeue-Angular-Light-Oblique.ttf')
}

exports.t = Object.assign(t, {
  $src: 'fonts/ComicNeue-Angular-Light-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function u
 * @returns {buffer} - data for theme "u".
 */
function u () {
  return _read('fonts/ComicNeue-Angular-Light.ttf')
}

exports.u = Object.assign(u, {
  $src: 'fonts/ComicNeue-Angular-Light.ttf',
  $type: 'ttf'
})

/**
 * @function v
 * @returns {buffer} - data for theme "v".
 */
function v () {
  return _read('fonts/ComicNeue-Angular-Regular-Oblique.ttf')
}

exports.v = Object.assign(v, {
  $src: 'fonts/ComicNeue-Angular-Regular-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function w
 * @returns {buffer} - data for theme "w".
 */
function w () {
  return _read('fonts/ComicNeue-Angular-Regular.ttf')
}

exports.w = Object.assign(w, {
  $src: 'fonts/ComicNeue-Angular-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function x
 * @returns {buffer} - data for theme "x".
 */
function x () {
  return _read('fonts/ComicNeue-Bold-Oblique.ttf')
}

exports.x = Object.assign(x, {
  $src: 'fonts/ComicNeue-Bold-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function y
 * @returns {buffer} - data for theme "y".
 */
function y () {
  return _read('fonts/ComicNeue-Bold.ttf')
}

exports.y = Object.assign(y, {
  $src: 'fonts/ComicNeue-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function z
 * @returns {buffer} - data for theme "z".
 */
function z () {
  return _read('fonts/ComicNeue-Light-Oblique.ttf')
}

exports.z = Object.assign(z, {
  $src: 'fonts/ComicNeue-Light-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function aa
 * @returns {buffer} - data for theme "aa".
 */
function aa () {
  return _read('fonts/ComicNeue-Light.ttf')
}

exports.aa = Object.assign(aa, {
  $src: 'fonts/ComicNeue-Light.ttf',
  $type: 'ttf'
})

/**
 * @function ab
 * @returns {buffer} - data for theme "ab".
 */
function ab () {
  return _read('fonts/ComicNeue-Regular-Oblique.ttf')
}

exports.ab = Object.assign(ab, {
  $src: 'fonts/ComicNeue-Regular-Oblique.ttf',
  $type: 'ttf'
})

/**
 * @function ac
 * @returns {buffer} - data for theme "ac".
 */
function ac () {
  return _read('fonts/ComicNeue-Regular.ttf')
}

exports.ac = Object.assign(ac, {
  $src: 'fonts/ComicNeue-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function ad
 * @returns {buffer} - data for theme "ad".
 */
function ad () {
  return _read('fonts/Dosis-Bold.ttf')
}

exports.ad = Object.assign(ad, {
  $src: 'fonts/Dosis-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function ae
 * @returns {buffer} - data for theme "ae".
 */
function ae () {
  return _read('fonts/Dosis-Book.ttf')
}

exports.ae = Object.assign(ae, {
  $src: 'fonts/Dosis-Book.ttf',
  $type: 'ttf'
})

/**
 * @function af
 * @returns {buffer} - data for theme "af".
 */
function af () {
  return _read('fonts/Dosis-ExtraBold.ttf')
}

exports.af = Object.assign(af, {
  $src: 'fonts/Dosis-ExtraBold.ttf',
  $type: 'ttf'
})

/**
 * @function ag
 * @returns {buffer} - data for theme "ag".
 */
function ag () {
  return _read('fonts/Dosis-ExtraLight.ttf')
}

exports.ag = Object.assign(ag, {
  $src: 'fonts/Dosis-ExtraLight.ttf',
  $type: 'ttf'
})

/**
 * @function ah
 * @returns {buffer} - data for theme "ah".
 */
function ah () {
  return _read('fonts/Dosis-Light.ttf')
}

exports.ah = Object.assign(ah, {
  $src: 'fonts/Dosis-Light.ttf',
  $type: 'ttf'
})

/**
 * @function ai
 * @returns {buffer} - data for theme "ai".
 */
function ai () {
  return _read('fonts/Dosis-Medium.ttf')
}

exports.ai = Object.assign(ai, {
  $src: 'fonts/Dosis-Medium.ttf',
  $type: 'ttf'
})

/**
 * @function aj
 * @returns {buffer} - data for theme "aj".
 */
function aj () {
  return _read('fonts/Dosis-SemiBold.ttf')
}

exports.aj = Object.assign(aj, {
  $src: 'fonts/Dosis-SemiBold.ttf',
  $type: 'ttf'
})

/**
 * @function ak
 * @returns {buffer} - data for theme "ak".
 */
function ak () {
  return _read('fonts/EkMukta-Bold.ttf')
}

exports.ak = Object.assign(ak, {
  $src: 'fonts/EkMukta-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function al
 * @returns {buffer} - data for theme "al".
 */
function al () {
  return _read('fonts/EkMukta-ExtraBold.ttf')
}

exports.al = Object.assign(al, {
  $src: 'fonts/EkMukta-ExtraBold.ttf',
  $type: 'ttf'
})

/**
 * @function am
 * @returns {buffer} - data for theme "am".
 */
function am () {
  return _read('fonts/EkMukta-ExtraLight.ttf')
}

exports.am = Object.assign(am, {
  $src: 'fonts/EkMukta-ExtraLight.ttf',
  $type: 'ttf'
})

/**
 * @function an
 * @returns {buffer} - data for theme "an".
 */
function an () {
  return _read('fonts/EkMukta-Light.ttf')
}

exports.an = Object.assign(an, {
  $src: 'fonts/EkMukta-Light.ttf',
  $type: 'ttf'
})

/**
 * @function ao
 * @returns {buffer} - data for theme "ao".
 */
function ao () {
  return _read('fonts/EkMukta-Medium.ttf')
}

exports.ao = Object.assign(ao, {
  $src: 'fonts/EkMukta-Medium.ttf',
  $type: 'ttf'
})

/**
 * @function ap
 * @returns {buffer} - data for theme "ap".
 */
function ap () {
  return _read('fonts/EkMukta-Regular.ttf')
}

exports.ap = Object.assign(ap, {
  $src: 'fonts/EkMukta-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function aq
 * @returns {buffer} - data for theme "aq".
 */
function aq () {
  return _read('fonts/EkMukta-SemiBold.ttf')
}

exports.aq = Object.assign(aq, {
  $src: 'fonts/EkMukta-SemiBold.ttf',
  $type: 'ttf'
})

/**
 * @function ar
 * @returns {buffer} - data for theme "ar".
 */
function ar () {
  return _read('fonts/FreeMono.ttf')
}

exports.ar = Object.assign(ar, {
  $src: 'fonts/FreeMono.ttf',
  $type: 'ttf'
})

/**
 * @function as
 * @returns {buffer} - data for theme "as".
 */
function as () {
  return _read('fonts/FreeMonoBold.ttf')
}

exports.as = Object.assign(as, {
  $src: 'fonts/FreeMonoBold.ttf',
  $type: 'ttf'
})

/**
 * @function at
 * @returns {buffer} - data for theme "at".
 */
function at () {
  return _read('fonts/FreeMonoBoldOblique.ttf')
}

exports.at = Object.assign(at, {
  $src: 'fonts/FreeMonoBoldOblique.ttf',
  $type: 'ttf'
})

/**
 * @function au
 * @returns {buffer} - data for theme "au".
 */
function au () {
  return _read('fonts/FreeMonoOblique.ttf')
}

exports.au = Object.assign(au, {
  $src: 'fonts/FreeMonoOblique.ttf',
  $type: 'ttf'
})

/**
 * @function av
 * @returns {buffer} - data for theme "av".
 */
function av () {
  return _read('fonts/FreeSans.ttf')
}

exports.av = Object.assign(av, {
  $src: 'fonts/FreeSans.ttf',
  $type: 'ttf'
})

/**
 * @function aw
 * @returns {buffer} - data for theme "aw".
 */
function aw () {
  return _read('fonts/FreeSansBold.ttf')
}

exports.aw = Object.assign(aw, {
  $src: 'fonts/FreeSansBold.ttf',
  $type: 'ttf'
})

/**
 * @function ax
 * @returns {buffer} - data for theme "ax".
 */
function ax () {
  return _read('fonts/FreeSansBoldOblique.ttf')
}

exports.ax = Object.assign(ax, {
  $src: 'fonts/FreeSansBoldOblique.ttf',
  $type: 'ttf'
})

/**
 * @function ay
 * @returns {buffer} - data for theme "ay".
 */
function ay () {
  return _read('fonts/FreeSansOblique.ttf')
}

exports.ay = Object.assign(ay, {
  $src: 'fonts/FreeSansOblique.ttf',
  $type: 'ttf'
})

/**
 * @function bz
 * @returns {buffer} - data for theme "bz".
 */
function bz () {
  return _read('fonts/Metrophobic.ttf')
}

exports.bz = Object.assign(bz, {
  $src: 'fonts/Metrophobic.ttf',
  $type: 'ttf'
})

/**
 * @function ba
 * @returns {buffer} - data for theme "ba".
 */
function ba () {
  return _read('fonts/MgOpenCosmeticaRegular.ttf')
}

exports.ba = Object.assign(ba, {
  $src: 'fonts/MgOpenCosmeticaRegular.ttf',
  $type: 'ttf'
})

/**
 * @function bb
 * @returns {buffer} - data for theme "bb".
 */
function bb () {
  return _read('fonts/MgOpenModataBold.ttf')
}

exports.bb = Object.assign(bb, {
  $src: 'fonts/MgOpenModataBold.ttf',
  $type: 'ttf'
})

/**
 * @function bc
 * @returns {buffer} - data for theme "bc".
 */
function bc () {
  return _read('fonts/MgOpenModataBoldOblique.ttf')
}

exports.bc = Object.assign(bc, {
  $src: 'fonts/MgOpenModataBoldOblique.ttf',
  $type: 'ttf'
})

/**
 * @function bd
 * @returns {buffer} - data for theme "bd".
 */
function bd () {
  return _read('fonts/MgOpenModataOblique.ttf')
}

exports.bd = Object.assign(bd, {
  $src: 'fonts/MgOpenModataOblique.ttf',
  $type: 'ttf'
})

/**
 * @function be
 * @returns {buffer} - data for theme "be".
 */
function be () {
  return _read('fonts/MgOpenModataRegular.ttf')
}

exports.be = Object.assign(be, {
  $src: 'fonts/MgOpenModataRegular.ttf',
  $type: 'ttf'
})

/**
 * @function bf
 * @returns {buffer} - data for theme "bf".
 */
function bf () {
  return _read('fonts/OCRA.ttf')
}

exports.bf = Object.assign(bf, {
  $src: 'fonts/OCRA.ttf',
  $type: 'ttf'
})

/**
 * @function bg
 * @returns {buffer} - data for theme "bg".
 */
function bg () {
  return _read('fonts/OpenSans-Bold.ttf')
}

exports.bg = Object.assign(bg, {
  $src: 'fonts/OpenSans-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function bh
 * @returns {buffer} - data for theme "bh".
 */
function bh () {
  return _read('fonts/OpenSans-BoldItalic.ttf')
}

exports.bh = Object.assign(bh, {
  $src: 'fonts/OpenSans-BoldItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bi
 * @returns {buffer} - data for theme "bi".
 */
function bi () {
  return _read('fonts/OpenSans-CondBold.ttf')
}

exports.bi = Object.assign(bi, {
  $src: 'fonts/OpenSans-CondBold.ttf',
  $type: 'ttf'
})

/**
 * @function bj
 * @returns {buffer} - data for theme "bj".
 */
function bj () {
  return _read('fonts/OpenSans-CondLight.ttf')
}

exports.bj = Object.assign(bj, {
  $src: 'fonts/OpenSans-CondLight.ttf',
  $type: 'ttf'
})

/**
 * @function bk
 * @returns {buffer} - data for theme "bk".
 */
function bk () {
  return _read('fonts/OpenSans-CondLightItalic.ttf')
}

exports.bk = Object.assign(bk, {
  $src: 'fonts/OpenSans-CondLightItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bl
 * @returns {buffer} - data for theme "bl".
 */
function bl () {
  return _read('fonts/OpenSans-ExtraBold.ttf')
}

exports.bl = Object.assign(bl, {
  $src: 'fonts/OpenSans-ExtraBold.ttf',
  $type: 'ttf'
})

/**
 * @function bm
 * @returns {buffer} - data for theme "bm".
 */
function bm () {
  return _read('fonts/OpenSans-ExtraBoldItalic.ttf')
}

exports.bm = Object.assign(bm, {
  $src: 'fonts/OpenSans-ExtraBoldItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bn
 * @returns {buffer} - data for theme "bn".
 */
function bn () {
  return _read('fonts/OpenSans-Italic.ttf')
}

exports.bn = Object.assign(bn, {
  $src: 'fonts/OpenSans-Italic.ttf',
  $type: 'ttf'
})

/**
 * @function bo
 * @returns {buffer} - data for theme "bo".
 */
function bo () {
  return _read('fonts/OpenSans-Light.ttf')
}

exports.bo = Object.assign(bo, {
  $src: 'fonts/OpenSans-Light.ttf',
  $type: 'ttf'
})

/**
 * @function bp
 * @returns {buffer} - data for theme "bp".
 */
function bp () {
  return _read('fonts/OpenSans-LightItalic.ttf')
}

exports.bp = Object.assign(bp, {
  $src: 'fonts/OpenSans-LightItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bq
 * @returns {buffer} - data for theme "bq".
 */
function bq () {
  return _read('fonts/OpenSans-Regular.ttf')
}

exports.bq = Object.assign(bq, {
  $src: 'fonts/OpenSans-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function br
 * @returns {buffer} - data for theme "br".
 */
function br () {
  return _read('fonts/OpenSans-Semibold.ttf')
}

exports.br = Object.assign(br, {
  $src: 'fonts/OpenSans-Semibold.ttf',
  $type: 'ttf'
})

/**
 * @function bs
 * @returns {buffer} - data for theme "bs".
 */
function bs () {
  return _read('fonts/OpenSans-SemiboldItalic.ttf')
}

exports.bs = Object.assign(bs, {
  $src: 'fonts/OpenSans-SemiboldItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bt
 * @returns {buffer} - data for theme "bt".
 */
function bt () {
  return _read('fonts/Roboto-Black.ttf')
}

exports.bt = Object.assign(bt, {
  $src: 'fonts/Roboto-Black.ttf',
  $type: 'ttf'
})

/**
 * @function bu
 * @returns {buffer} - data for theme "bu".
 */
function bu () {
  return _read('fonts/Roboto-BlackItalic.ttf')
}

exports.bu = Object.assign(bu, {
  $src: 'fonts/Roboto-BlackItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bv
 * @returns {buffer} - data for theme "bv".
 */
function bv () {
  return _read('fonts/Roboto-Bold.ttf')
}

exports.bv = Object.assign(bv, {
  $src: 'fonts/Roboto-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function bw
 * @returns {buffer} - data for theme "bw".
 */
function bw () {
  return _read('fonts/Roboto-BoldItalic.ttf')
}

exports.bw = Object.assign(bw, {
  $src: 'fonts/Roboto-BoldItalic.ttf',
  $type: 'ttf'
})

/**
 * @function bx
 * @returns {buffer} - data for theme "bx".
 */
function bx () {
  return _read('fonts/Roboto-Italic.ttf')
}

exports.bx = Object.assign(bx, {
  $src: 'fonts/Roboto-Italic.ttf',
  $type: 'ttf'
})

/**
 * @function by
 * @returns {buffer} - data for theme "by".
 */
function by () {
  return _read('fonts/Roboto-Light.ttf')
}

exports.by = Object.assign(by, {
  $src: 'fonts/Roboto-Light.ttf',
  $type: 'ttf'
})

/**
 * @function cz
 * @returns {buffer} - data for theme "cz".
 */
function cz () {
  return _read('fonts/Roboto-LightItalic.ttf')
}

exports.cz = Object.assign(cz, {
  $src: 'fonts/Roboto-LightItalic.ttf',
  $type: 'ttf'
})

/**
 * @function ca
 * @returns {buffer} - data for theme "ca".
 */
function ca () {
  return _read('fonts/Roboto-Medium.ttf')
}

exports.ca = Object.assign(ca, {
  $src: 'fonts/Roboto-Medium.ttf',
  $type: 'ttf'
})

/**
 * @function cb
 * @returns {buffer} - data for theme "cb".
 */
function cb () {
  return _read('fonts/Roboto-MediumItalic.ttf')
}

exports.cb = Object.assign(cb, {
  $src: 'fonts/Roboto-MediumItalic.ttf',
  $type: 'ttf'
})

/**
 * @function cc
 * @returns {buffer} - data for theme "cc".
 */
function cc () {
  return _read('fonts/Roboto-Regular.ttf')
}

exports.cc = Object.assign(cc, {
  $src: 'fonts/Roboto-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function cd
 * @returns {buffer} - data for theme "cd".
 */
function cd () {
  return _read('fonts/Roboto-Thin.ttf')
}

exports.cd = Object.assign(cd, {
  $src: 'fonts/Roboto-Thin.ttf',
  $type: 'ttf'
})

/**
 * @function ce
 * @returns {buffer} - data for theme "ce".
 */
function ce () {
  return _read('fonts/Roboto-ThinItalic.ttf')
}

exports.ce = Object.assign(ce, {
  $src: 'fonts/Roboto-ThinItalic.ttf',
  $type: 'ttf'
})

/**
 * @function cf
 * @returns {buffer} - data for theme "cf".
 */
function cf () {
  return _read('fonts/RobotoCondensed-Bold.ttf')
}

exports.cf = Object.assign(cf, {
  $src: 'fonts/RobotoCondensed-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function cg
 * @returns {buffer} - data for theme "cg".
 */
function cg () {
  return _read('fonts/RobotoCondensed-BoldItalic.ttf')
}

exports.cg = Object.assign(cg, {
  $src: 'fonts/RobotoCondensed-BoldItalic.ttf',
  $type: 'ttf'
})

/**
 * @function ch
 * @returns {buffer} - data for theme "ch".
 */
function ch () {
  return _read('fonts/RobotoCondensed-Italic.ttf')
}

exports.ch = Object.assign(ch, {
  $src: 'fonts/RobotoCondensed-Italic.ttf',
  $type: 'ttf'
})

/**
 * @function ci
 * @returns {buffer} - data for theme "ci".
 */
function ci () {
  return _read('fonts/RobotoCondensed-Light.ttf')
}

exports.ci = Object.assign(ci, {
  $src: 'fonts/RobotoCondensed-Light.ttf',
  $type: 'ttf'
})

/**
 * @function cj
 * @returns {buffer} - data for theme "cj".
 */
function cj () {
  return _read('fonts/RobotoCondensed-LightItalic.ttf')
}

exports.cj = Object.assign(cj, {
  $src: 'fonts/RobotoCondensed-LightItalic.ttf',
  $type: 'ttf'
})

/**
 * @function ck
 * @returns {buffer} - data for theme "ck".
 */
function ck () {
  return _read('fonts/RobotoCondensed-Regular.ttf')
}

exports.ck = Object.assign(ck, {
  $src: 'fonts/RobotoCondensed-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function cl
 * @returns {buffer} - data for theme "cl".
 */
function cl () {
  return _read('fonts/SourceCodePro-Black.ttf')
}

exports.cl = Object.assign(cl, {
  $src: 'fonts/SourceCodePro-Black.ttf',
  $type: 'ttf'
})

/**
 * @function cm
 * @returns {buffer} - data for theme "cm".
 */
function cm () {
  return _read('fonts/SourceCodePro-Bold.ttf')
}

exports.cm = Object.assign(cm, {
  $src: 'fonts/SourceCodePro-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function cn
 * @returns {buffer} - data for theme "cn".
 */
function cn () {
  return _read('fonts/SourceCodePro-ExtraLight.ttf')
}

exports.cn = Object.assign(cn, {
  $src: 'fonts/SourceCodePro-ExtraLight.ttf',
  $type: 'ttf'
})

/**
 * @function co
 * @returns {buffer} - data for theme "co".
 */
function co () {
  return _read('fonts/SourceCodePro-Light.ttf')
}

exports.co = Object.assign(co, {
  $src: 'fonts/SourceCodePro-Light.ttf',
  $type: 'ttf'
})

/**
 * @function cp
 * @returns {buffer} - data for theme "cp".
 */
function cp () {
  return _read('fonts/SourceCodePro-Medium.ttf')
}

exports.cp = Object.assign(cp, {
  $src: 'fonts/SourceCodePro-Medium.ttf',
  $type: 'ttf'
})

/**
 * @function cq
 * @returns {buffer} - data for theme "cq".
 */
function cq () {
  return _read('fonts/SourceCodePro-Regular.ttf')
}

exports.cq = Object.assign(cq, {
  $src: 'fonts/SourceCodePro-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function cr
 * @returns {buffer} - data for theme "cr".
 */
function cr () {
  return _read('fonts/SourceCodePro-Semibold.ttf')
}

exports.cr = Object.assign(cr, {
  $src: 'fonts/SourceCodePro-Semibold.ttf',
  $type: 'ttf'
})

/**
 * @function cs
 * @returns {buffer} - data for theme "cs".
 */
function cs () {
  return _read('fonts/SourceSerifPro-Bold.ttf')
}

exports.cs = Object.assign(cs, {
  $src: 'fonts/SourceSerifPro-Bold.ttf',
  $type: 'ttf'
})

/**
 * @function ct
 * @returns {buffer} - data for theme "ct".
 */
function ct () {
  return _read('fonts/SourceSerifPro-Regular.ttf')
}

exports.ct = Object.assign(ct, {
  $src: 'fonts/SourceSerifPro-Regular.ttf',
  $type: 'ttf'
})

/**
 * @function cu
 * @returns {buffer} - data for theme "cu".
 */
function cu () {
  return _read('fonts/SourceSerifPro-Semibold.ttf')
}

exports.cu = Object.assign(cu, {
  $src: 'fonts/SourceSerifPro-Semibold.ttf',
  $type: 'ttf'
})

/**
 * @function cv
 * @returns {buffer} - data for theme "cv".
 */
function cv () {
  return _read('fonts/Squarish Sans CT Regular SC.ttf')
}

exports.cv = Object.assign(cv, {
  $src: 'fonts/Squarish Sans CT Regular SC.ttf',
  $type: 'ttf'
})

/**
 * @function cw
 * @returns {buffer} - data for theme "cw".
 */
function cw () {
  return _read('fonts/Squarish Sans CT Regular.ttf')
}

exports.cw = Object.assign(cw, {
  $src: 'fonts/Squarish Sans CT Regular.ttf',
  $type: 'ttf'
})

/**
 * @function cx
 * @returns {buffer} - data for theme "cx".
 */
function cx () {
  return _read('fonts/Transport Medium Greek.ttf')
}

exports.cx = Object.assign(cx, {
  $src: 'fonts/Transport Medium Greek.ttf',
  $type: 'ttf'
})

/**
 * @function cy
 * @returns {buffer} - data for theme "cy".
 */
function cy () {
  return _read('fonts/Ubuntu-B.ttf')
}

exports.cy = Object.assign(cy, {
  $src: 'fonts/Ubuntu-B.ttf',
  $type: 'ttf'
})

/**
 * @function dz
 * @returns {buffer} - data for theme "dz".
 */
function dz () {
  return _read('fonts/Ubuntu-BI.ttf')
}

exports.dz = Object.assign(dz, {
  $src: 'fonts/Ubuntu-BI.ttf',
  $type: 'ttf'
})

/**
 * @function da
 * @returns {buffer} - data for theme "da".
 */
function da () {
  return _read('fonts/Ubuntu-C.ttf')
}

exports.da = Object.assign(da, {
  $src: 'fonts/Ubuntu-C.ttf',
  $type: 'ttf'
})

/**
 * @function db
 * @returns {buffer} - data for theme "db".
 */
function db () {
  return _read('fonts/Ubuntu-L.ttf')
}

exports.db = Object.assign(db, {
  $src: 'fonts/Ubuntu-L.ttf',
  $type: 'ttf'
})

/**
 * @function dc
 * @returns {buffer} - data for theme "dc".
 */
function dc () {
  return _read('fonts/Ubuntu-LI.ttf')
}

exports.dc = Object.assign(dc, {
  $src: 'fonts/Ubuntu-LI.ttf',
  $type: 'ttf'
})

/**
 * @function dd
 * @returns {buffer} - data for theme "dd".
 */
function dd () {
  return _read('fonts/Ubuntu-M.ttf')
}

exports.dd = Object.assign(dd, {
  $src: 'fonts/Ubuntu-M.ttf',
  $type: 'ttf'
})

/**
 * @function de
 * @returns {buffer} - data for theme "de".
 */
function de () {
  return _read('fonts/Ubuntu-MI.ttf')
}

exports.de = Object.assign(de, {
  $src: 'fonts/Ubuntu-MI.ttf',
  $type: 'ttf'
})

/**
 * @function df
 * @returns {buffer} - data for theme "df".
 */
function df () {
  return _read('fonts/Ubuntu-R.ttf')
}

exports.df = Object.assign(df, {
  $src: 'fonts/Ubuntu-R.ttf',
  $type: 'ttf'
})

/**
 * @function dg
 * @returns {buffer} - data for theme "dg".
 */
function dg () {
  return _read('fonts/Ubuntu-RI.ttf')
}

exports.dg = Object.assign(dg, {
  $src: 'fonts/Ubuntu-RI.ttf',
  $type: 'ttf'
})

/**
 * @function dh
 * @returns {buffer} - data for theme "dh".
 */
function dh () {
  return _read('fonts/UbuntuMono-B.ttf')
}

exports.dh = Object.assign(dh, {
  $src: 'fonts/UbuntuMono-B.ttf',
  $type: 'ttf'
})

/**
 * @function di
 * @returns {buffer} - data for theme "di".
 */
function di () {
  return _read('fonts/UbuntuMono-BI.ttf')
}

exports.di = Object.assign(di, {
  $src: 'fonts/UbuntuMono-BI.ttf',
  $type: 'ttf'
})

/**
 * @function dj
 * @returns {buffer} - data for theme "dj".
 */
function dj () {
  return _read('fonts/UbuntuMono-R.ttf')
}

exports.dj = Object.assign(dj, {
  $src: 'fonts/UbuntuMono-R.ttf',
  $type: 'ttf'
})

/**
 * @function dk
 * @returns {buffer} - data for theme "dk".
 */
function dk () {
  return _read('fonts/UbuntuMono-RI.ttf')
}

exports.dk = Object.assign(dk, {
  $src: 'fonts/UbuntuMono-RI.ttf',
  $type: 'ttf'
})


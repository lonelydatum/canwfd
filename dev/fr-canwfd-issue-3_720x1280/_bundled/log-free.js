(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function text(on) {
	var time = arguments.length <= 1 || arguments[1] === undefined ? .9 : arguments[1];

	var tltext = new TimelineMax();
	tltext.from(on, .2, { opacity: 0 });
	tltext.to(on, .2, { opacity: 0 }, '+=' + time);

	return tltext;
}

exports.size = size;
exports.text = text;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

TweenLite.defaultEase = Power2.easeIn;
var start = function start() {

	var tl = new TimelineMax();

	tl.set(".frame1", { opacity: 1 });

	// TweenLite.to(".bg", 12, {x:0, ease:Linear.easeNone})
	tl.from(".t1", .3, { opacity: 0 });
	tl.from(".line", .5, { clip: 'rect(0px 330px 1280px 330px)' });

	// tl.to(".frame1", .3, {opacity:0})

	tl.add("f2", "+=3.5");

	tl.to(".frame2", .3, { opacity: 1 }, "f2");

	tl.from(".t2", .3, { opacity: 0 });
	tl.to(".t2", .3, { opacity: 0 }, '+=4.2');

	tl.from(".t22", .3, { opacity: 0 });
	tl.to(".t22", .3, { opacity: 0 }, '+=4.2');

	tl.from(".t2a", .3, { opacity: 0 });

	tl.from(".line2", .3, { clip: "0px 120px 2000px 120px" });

	tl.from(".t2b", .3, { opacity: 0 }, "+=.5");

	// tl.gotoAndPlay("f2")
};

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
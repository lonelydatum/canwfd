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

var start = function start() {
	var list = ["t1a", "t1b", "t1c", "t1d", "t1e", "t1f"];
	var tl = new TimelineMax();

	tl.set(".frame1", { opacity: 1 });

	TweenLite.to(".bg", 12, { x: 0, ease: Linear.easeNone });
	tl.from(".t1", .3, { opacity: 0 });
	tl.from(".line", .3, { clip: 'rect(0px 140px 600px 140px)' });

	tl.add((0, _commonJsCommonJs.text)('.t1a'), "+=.5");
	tl.add((0, _commonJsCommonJs.text)('.t1b'));
	tl.add((0, _commonJsCommonJs.text)('.t1c'));
	tl.add((0, _commonJsCommonJs.text)('.t1d'));
	tl.add((0, _commonJsCommonJs.text)('.t1e'));
	tl.add((0, _commonJsCommonJs.text)('.t1f'));
	tl.add((0, _commonJsCommonJs.text)('.t1g'));

	tl.add((0, _commonJsCommonJs.text)('.t1h', 2));
	tl.to([".t1", '.line'], .2, { opacity: 0 });

	tl.add("f2");

	tl.set(".frame2", { opacity: 1 });

	tl.from(".t2a", .3, { opacity: 0 });
	tl.from(".line2", .3, { clip: "rect(0px 200px 180px 200px)" });

	tl.from(".t2b", .3, { opacity: 0 }, '+=.5');

	// tl.gotoAndPlay("f2")
};

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map

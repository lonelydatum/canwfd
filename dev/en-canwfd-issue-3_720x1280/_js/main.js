import {text, textList} from '../../_common/js/common.js'

TweenLite.defaultEase = Power2.easeIn
const start = ()=>{
	
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})

	// TweenLite.to(".bg", 12, {x:0, ease:Linear.easeNone})
	TweenLite.from(".bg2", 12, {x:-100, ease:Linear.easeNone})
	tl.from(".t1", .6, {opacity:0, x:"-=200", ease:Power2.easeInOut}, "f2")
	
	tl.from(".line", .5, {clip: 'rect(0px 120px 1200px 120px)'})

	
	
	// tl.to(".frame1", .3, {opacity:0})
	
	

	tl.add("f2", "+=3.2")

	tl.to(".frame2", .3, {opacity:1}, "f2")

	tl.from(".t2", .3, {opacity:0})
	tl.to(".t2", .3, {opacity:0}, '+=4.2')

	tl.from(".t22", .3, {opacity:0})
	tl.to(".t22", .3, {opacity:0}, '+=4.2')


	tl.from(".t2a", .3, {opacity:0})
	
	tl.from(".line2", .3, {clip: `0px 120px 2000px 120px`})

	tl.from(".t2b", .3, {opacity:0}, "+=.5")

	

	// tl.gotoAndPlay("f2")
	
}

start()

module.exports = {};


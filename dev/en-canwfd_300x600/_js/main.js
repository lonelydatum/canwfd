import {text, textList} from '../../_common/js/common.js'

TweenLite.defaultEase = Power2.easeIn
const start = ()=>{
	
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})

	// TweenLite.to(".bg", 12, {x:0, ease:Linear.easeNone})
	tl.from(".t1", .3, {opacity:0})
	tl.from(".line", .5, {clip: 'rect(0px 120px 1200px 120px)'})

	textList(tl)

	tl.add("f2")

	tl.set(".frame2", {opacity:1})


	tl.from(".t2a", .3, {opacity:0})
	tl.from(".line2", .3, {clip: `rect(0px 50px 1200px 50px`})

	tl.from(".t2b", .3, {opacity:0}, '+=.5')

	// tl.gotoAndPlay("f2")
	
}

start()

module.exports = {};


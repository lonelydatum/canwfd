

import {text, textList} from '../../_common/js/common.js'

TweenLite.defaultEase = Power2.easeIn
const start = ()=>{
	
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})
	tl.set(".end", {opacity:0})

	// TweenLite.to(".bg", 12, {x:0, ease:Linear.easeNone})
	// tl.from(".t1", .3, {opacity:0})
	
	TweenLite.from(".bg2", 12, {x:-100, ease:Linear.easeNone})
	
	for(let i=1;i<=8;i++){
		
		const id = `.end${i}`

		tl.set(id, {opacity:1}, '+=.35')
		
	}

	tl.from(".line", .5, {clip: 'rect(0px 120px 1200px 120px)'}, 1)

	// tl.to(".frame1", .3, {opacity:0}, "+=4")
	
	

	tl.add("f2", "+=4")

	tl.to(".frame2", .3, {opacity:1}, "f2")

	tl.from(".t2", .3, {opacity:0})
	tl.to(".t2", .3, {opacity:0}, '+=4.2')
	tl.from(".t2a", .3, {opacity:0})
	
	tl.from(".line2", .3, {clip: `0px 120px 2000px 120px`})

	tl.from(".t2b", .3, {opacity:0}, "+=.5")

	

	// tl.gotoAndPlay("f2")
	
}

start()

module.exports = {};


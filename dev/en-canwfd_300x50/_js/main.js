import {text, textList} from '../../_common/js/common.js'


const start = ()=>{
	const list = ["t1a", "t1b", "t1c", "t1d", "t1e", "t1f"]
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})

	// TweenLite.to(".bg", 12, {x:0, ease:Linear.easeNone})
	tl.from(".t1", .3, {opacity:0})
	tl.from(".line", .3, {clip: 'rect(0px 20px 100px 20px)'})

	textList(tl)
	

	tl.add("f2")

	tl.set(".frame2", {opacity:1})


	tl.from(".t2a", .3, {opacity:0})
	tl.from(".line2", .3, {clip: `rect(0px 20px 100px 20px)`})

	tl.from(".t2b", .3, {opacity:0}, '+=.5')

	// tl.gotoAndPlay("f2")
	
}


start()

module.exports = {};


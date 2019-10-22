import {text} from '../../_common/js/common.js'


const start = ()=>{
	const list = ["t1a", "t1b", "t1c", "t1d", "t1e", "t1f"]
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})

	TweenLite.to(".bg", 12, {x:0, ease:Linear.easeNone})
	tl.from(".t1", .3, {opacity:0})
	tl.from(".line", .3, {clip: 'rect(0px 180px 600px 180px)'})

	tl.add( text('.t1a'), "+=.5" )
	tl.add( text('.t1b') )
	tl.add( text('.t1c') )
	tl.add( text('.t1d') )
	tl.add( text('.t1e') )
	tl.add( text('.t1f') )
	tl.add( text('.t1g') )
	
	
	tl.add( text('.t1h', 2))
	tl.to([".t1", '.line'], .2, {opacity:0})

	tl.add("f2")

	tl.set(".frame2", {opacity:1})


	tl.from(".t2a", .3, {opacity:0})
	tl.from(".line2", .3, {clip: `rect(0px 50px 600px 50px)`})

	tl.from(".t2b", .3, {opacity:0}, '+=.5')

	// tl.gotoAndPlay("f2")
	
}


start()

module.exports = {};


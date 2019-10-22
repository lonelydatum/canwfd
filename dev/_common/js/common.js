const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut


function text(on, time=.6){
	const tltext = new TimelineMax()
	tltext.from(on, .2, {opacity:0})
	tltext.to(on, .2, {opacity:0}, `+=${time}`)

	return tltext
}

function textList(tl){
	TweenLite.to(".bg", 9, {x:0, ease:Linear.easeNone})
	tl.add( text('.t1a'), "+=.5" )
	tl.add( text('.t1b', '.7') )
	tl.add( text('.t1c', '.6') )
	tl.add( text('.t1d', '.5') )
	// tl.add( text('.t1e', '.5') )
	// tl.add( text('.t1f', '.4') )
	// tl.add( text('.t1g', '.4') )
	tl.add( text('.t1h', 1.8))

	tl.to([".t1", '.line'], .2, {opacity:0})
}

function issues(tl, lineTime=1){

	TweenLite.from(".bg2", 12, {x:-100, ease:Linear.easeNone})
	
	for(let i=1;i<=8;i++){		
		const id = `.end${i}`
		tl.set(id, {opacity:1}, '+=.35')		
	}

	tl.from(".line", .5, {clip: 'rect(0px 120px 1200px 120px)'}, lineTime)
}



export {size, text, textList, issues}
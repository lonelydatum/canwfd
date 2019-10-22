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
	tl.add( text('.t1a'), "+=.5" )
	tl.add( text('.t1b', '.7') )
	tl.add( text('.t1c', '.6') )
	tl.add( text('.t1d', '.5') )
	tl.add( text('.t1e', '.5') )
	tl.add( text('.t1f', '.4') )
	tl.add( text('.t1g', '.4') )
	tl.add( text('.t1h', 1.8))

	tl.to([".t1", '.line'], .2, {opacity:0})
}



export {size, text, textList}
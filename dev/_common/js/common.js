const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut


function text(on, time=.9){
	const tltext = new TimelineMax()
	tltext.from(on, .2, {opacity:0})
	tltext.to(on, .2, {opacity:0}, `+=${time}`)

	return tltext
}



export {size, text}
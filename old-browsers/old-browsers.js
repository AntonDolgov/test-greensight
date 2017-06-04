//для старых IE
if(top.VBArray) {
	var ie9 = document.createElement('div');
	document.getElementsByTagName("head")[0].appendChild(ie9);
	ie9.outerHTML = '<!--[if lte IE 9]><link rel="stylesheet" href="old-browsers/ie.css"><![endif]-->';
}

//для браузеров, не поддерживающих shape-outside (firefox, IE)
document.write('<link rel="stylesheet" href="old-browsers/shape-outside.css">');
document.addEventListener("DOMContentLoaded", removeShapeOutside);

function removeShapeOutside() {
	var elems = document.getElementsByClassName("main-content__description");

	for(var i = 0; i < elems.length; i++) {
		elems[i].classList.add("not-before");
	}
}


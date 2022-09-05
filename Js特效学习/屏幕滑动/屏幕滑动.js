function $(id) {
	return document.getElementById(id);
}
function show(id) {
	$(id).style.display = "block";
}
function hide(id) {
	$(id).style.display = "none";
}
//封装scroll家族
function scroll() {
	if(window.pagYOffset != null) {
		return {
			left: window.pageXOffset,
			top:window.pageYOffset
		}
	}else if(document.compatMode === "CSS1Compat") {
		return {
			left: document.documentElement.scrollleft,
			top:document.documentElement.scrollTop
		}
	}
	return {
		left: document.body.scrollLeft,
		top: document.body.scrollTop
	}
}
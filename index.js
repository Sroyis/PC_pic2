var oWrap = document.getElementById("wrap");
var aDiv = oWrap.getElementsByTagName("div");
var iLength = Math.floor(aDiv.length / 2);
var iwidth = parseInt(document.documentElement.clientWidth / 5);
//			alert(iwidth)
switchPos(iLength);
for (var i = 0; i < aDiv.length; i++) {
	aDiv[i].index = i;
	aDiv[i].onclick = function() {
		num = this.index;
		switchPos(this.index)
	}
}
var num = 4;

function switchPos(a) {
	var iNowa = iNowb = a;
	aDiv[a].style.cssText = "transform: translateX(0) translateZ(100px) rotateY(0deg);z-index: 100;"
	var arr = [a];
	var count = 0;
	for (var j = 0; j < iLength; j++) {
		iNowa--;
		iNowa = iNowa < 0 ? aDiv.length - 1 : iNowa;
		aDiv[iNowa].style.cssText = "transform: translateX(" + (-iwidth / iLength) * (count + 1 + j) + "px) rotateY(" + (60 / iLength) * (count + 1 + j) + "deg) translateZ(" + (-iwidth / iLength) * (count + 1 + j) + "px);"
	}
	for (var k = 0; k < iLength; k++) {
		iNowb++;
		iNowb = iNowb == aDiv.length ? 0 : iNowb;
		aDiv[iNowb].style.cssText = "transform: translateX(" + (iwidth / iLength) * (count + k + 1) + "px) rotateY(" + (-60 / iLength) * (count + 1 + k) + "deg) translateZ(" + (-iwidth / iLength) * (count + 1 + k) + "px);"
	}
}
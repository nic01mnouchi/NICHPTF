onload = function() {
	var i = 0;
	arrImgElements = $("div#container").children("div");
	while(typeof arrImgElements[i] != "undefined") {
		arrImgElements[i].addEventListener("mouseover", onMouse);
		arrImgElements[i].addEventListener("mouseout", outMouse);
		i++;
	}
	$(".icon").click(function() {
		location.href = "./index.html";
	});
	$(".btn1").click(function() {
		location.href = "./work.html";
	});
	$(".btn2").click(function() {
		location.href = "./project.html";
	});
	$(".btn3").click(function() {
		location.href = "./technology.html";
	});
	$(".btn4").click(function() {
		location.href = "./inquiry.html";
	});

	$(".btn1").mouseover(function() {
		$(".btn1").removeClass("outmouse");
		$(".btn1").addClass("onmouse");
	});
	$(".btn1").mouseout(function() {
		$(".btn1").removeClass("onmouse");
		$(".btn1").addClass("outmouse");
	});
	$(".btn2").mouseover(function() {
		$(".btn2").removeClass("outmouse");
		$(".btn2").addClass("onmouse");
	});
	$(".btn2").mouseout(function() {
		$(".btn2").removeClass("onmouse");
		$(".btn2").addClass("outmouse");
	});
	$(".btn3").mouseover(function() {
		$(".btn3").removeClass("outmouse");
		$(".btn3").addClass("onmouse");
	});
	$(".btn3").mouseout(function() {
		$(".btn3").removeClass("onmouse");
		$(".btn3").addClass("outmouse");
	});
	$(".btn4").mouseover(function() {
		$(".btn4").removeClass("outmouse");
		$(".btn4").addClass("onmouse");
	});
	$(".btn4").mouseout(function() {
		$(".btn4").removeClass("onmouse");
		$(".btn4").addClass("outmouse");
	});

	loop((Math.floor( Math.random() * 4 ) + 1));
}

//Hover
function onMouse(e) {
	onObj(e.currentTarget.id);
/*
	$("div#container div#" + e.currentTarget.id).removeClass("outmouse");
	$("div#container div#" + e.currentTarget.id).addClass("onmouse");

	$("div#container div#" + e.currentTarget.id + "_b").removeClass("outmouse");
	$("div#container div#" + e.currentTarget.id + "_b").addClass("onmouse");
*/
}
// Out
function outMouse(e) {
	offObj(e.currentTarget.id);
/*
	$("div#container div#" + e.currentTarget.id).removeClass("onmouse");
	$("div#container div#" + e.currentTarget.id).addClass("outmouse");

	$("div#container div#" + e.currentTarget.id + "_b").removeClass("onmouse");
	$("div#container div#" + e.currentTarget.id + "_b").addClass("outmouse");
*/
}


function loop(_target) {
	setTimeout(function() {
		onObj("img" + _target);
		setTimeout(function() {
			offObj("img" + _target);
		}, 3000);

		loop((Math.floor( Math.random() * 4 ) + 1));
	}, (3000 + Math.floor( Math.random() * 5000 )));
}


function onObj(_objId) {
	$("div#container div#" + _objId).removeClass("outmouse");
	$("div#container div#" + _objId).addClass("onmouse");

	$("div#container div#" + _objId + "_b").removeClass("outmouse");
	$("div#container div#" + _objId + "_b").addClass("onmouse");
}
function offObj(_objId) {
	$("div#container div#" + _objId).removeClass("onmouse");
	$("div#container div#" + _objId).addClass("outmouse");

	$("div#container div#" + _objId + "_b").removeClass("onmouse");
	$("div#container div#" + _objId + "_b").addClass("outmouse");
}
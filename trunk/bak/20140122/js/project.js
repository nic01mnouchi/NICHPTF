onload = function() {
	var arrImgElements = new Array();
	var i = 1;

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



	// 位置調整
	while(0 < $("#project div#container div#img-list_material-" + i).size()) {
		console.log(i);
		$("div#container div#img-list_material-" + i + " div.info").css({
			"width": $("div#container div#img-list_material-" + i)[0].clientWidth,
			"height": $("div#container div#img-list_material-" + i)[0].clientHeight
		});
		i++;
	}

	// すべての要素にマウスイベントを追加
	i = 0;
	arrImgElements = $("#project div#container").children("div");
	while(typeof arrImgElements[i] != "undefined") {
		arrImgElements[i].addEventListener("mouseover", onMouse);
		arrImgElements[i].addEventListener("mouseout", outMouse);
		i++;
	}
}

// Hover
function onMouse(e) {
	$("div#container  div#" + e.currentTarget.id + " div.info").removeClass("outmouse");
	$("div#container  div#" + e.currentTarget.id + " div.info").addClass("onmouse");

	$("div#container  div#" + e.currentTarget.id + " div.info div#cover").removeClass("outmouse");
	$("div#container  div#" + e.currentTarget.id + " div.info div#cover").addClass("onmouse");

	$("div#container  div#" + e.currentTarget.id + " div.info div#text").removeClass("outmouse");
	$("div#container  div#" + e.currentTarget.id + " div.info div#text").addClass("onmouse");
}
// Out
function outMouse(e) {
	$("div#container  div#" + e.currentTarget.id + " div.info").removeClass("onmouse");
	$("div#container  div#" + e.currentTarget.id + " div.info").addClass("outmouse");

	$("div#container  div#" + e.currentTarget.id + " div.info div#cover").removeClass("onmouse");
	$("div#container  div#" + e.currentTarget.id + " div.info div#cover").addClass("outmouse");

	$("div#container  div#" + e.currentTarget.id + " div.info div#text").removeClass("onmouse");
	$("div#container  div#" + e.currentTarget.id + " div.info div#text").addClass("outmouse");
}

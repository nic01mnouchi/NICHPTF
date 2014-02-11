onload = function() {
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
}



$(document).ready(function(){

//	  $('#midashi').toggle("drop", {direction: "left"}, 1500);
	  $('#midashi').toggle("drop", {direction: "left"}, 400);

//	  $('#gazou').toggle("drop", {direction: "up"}, 2000);
	  $('#gazou').toggle("drop", {direction: "up"}, 400);

//	  $('#setsumei').toggle("drop", {direction: "right"}, 1500);
	  $('#setsumei').toggle("drop", {direction: "right"}, 400);

  $('#work').click(function(){
//	    $('#midashi').toggle("drop", {direction: "left"}, 1500);
	    $('#midashi').toggle("drop", {direction: "left"}, 250);

//	    $('#setsumei').toggle("drop", {direction: "right"}, 1500);
	    $('#setsumei').toggle("drop", {direction: "right"}, 250);

//	    $('#gazou').toggle("drop", {direction: "up"}, 1500);
	    $('#gazou').toggle("drop", {direction: "up"}, 250);

     $(this).delay(1500).queue(function() {
       redirect('../work/index.html');
       $(this).dequeue();
     });
  });

  $('#technology').click(function(){
//	    $('#midashi').toggle("drop", {direction: "left"}, 1500);
	    $('#midashi').toggle("drop", {direction: "left"}, 250);

//	    $('#setsumei').toggle("drop", {direction: "right"}, 1500);
	    $('#setsumei').toggle("drop", {direction: "right"}, 250);

    $('#gazou').toggle("drop", {direction: "up"}, 250);

     $(this).delay(1500).queue(function() {
       redirect('../technology/index.html');
       $(this).dequeue();
     });
  });

});

function redirect(url){
  location.href(url);
}

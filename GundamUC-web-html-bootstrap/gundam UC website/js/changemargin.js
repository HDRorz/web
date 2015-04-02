$(document).ready(function(){

var w = $("html").width();


if(w > 1024)
	{
	$(".brand").css("margin-left",(w - 1024)/2+15),
	$(".navbar-inner .nav").css("padding-left",(w - 1024)/2 + 112+10);
	$("#turntotop").css("left",(w - 1024)/2 + 1024 - 50);
	}
else
	{
	$(".brand").css("margin-left","15"),
	$(".navbar-inner .nav").css("padding-left","112+10");
	$("#turntotop").css("left",w - 50);
	}


	
});
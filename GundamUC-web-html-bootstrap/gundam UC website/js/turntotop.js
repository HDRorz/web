$(window).ready(function () {
	$("#turntotop").fadeOut("fast");
})
var scroll_to_top_arrow_is_visible = false;
	$(window).scroll(function () {
		var docDocElemScrollTop = document.documentElement.scrollTop;
		var docBodyScrollTop = document.body.scrollTop;
		if((docDocElemScrollTop+docBodyScrollTop>250) && (scroll_to_top_arrow_is_visible==false)){
			$("#turntotop").fadeIn("slow");
			scroll_to_top_arrow_is_visible = true;
		}
		if((docDocElemScrollTop+docBodyScrollTop<=250) && (scroll_to_top_arrow_is_visible==true)){
			$("#turntotop").fadeOut("fast");
			scroll_to_top_arrow_is_visible = false;
		}
	});
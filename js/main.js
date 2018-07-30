$(function () {
	var preload = $(".pre-load");
	var line = preload.children('.line').first();
	$(window).load(function () {
		preload.addClass('hidden');
		line.on("transitionend", function (e){
			preload.css("display","none")
		});
	});
});
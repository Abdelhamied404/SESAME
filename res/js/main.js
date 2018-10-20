$(document).ready(function() {
	
	// INITIATE THE FOOTER
    siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
	$(window).resize(function() {
		siteFooter();
	});
	
	

	$("#cocktails").click(function () {
		$("#cocktails-menu").show();
	});

	$("#eggrolls").click(function () {
		$("#eggrolls-menu").show();
	});

	$("#spicy").click(function () {
		$("#spicy-menu").show();
	});

	$("#soups").click(function () {
		$("#soups-menu").show();
	});

	$(".exitBtn").click(function () {
		$(".hover-menu").hide();
	});


	$(".plate").click(function () {
		$(this).children(".check").toggle();
	})










});












// 

function siteFooter() {
	var siteContent = $('#site-content');
	var siteContentHeight = siteContent.height();
	var siteContentWidth = siteContent.width();

	var siteFooter = $('#site-footer');
	var siteFooterHeight = siteFooter.height();
	var siteFooterWidth = siteFooter.width();

	siteContent.css({
		"margin-bottom" : siteFooterHeight + 45
	});
}
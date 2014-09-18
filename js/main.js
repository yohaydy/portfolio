
function loadContent(){
	$("#section").load( "/portfolio.html" );
}

	$("#portfolio").on("click", function(){
		$("#section").load( "/portfolio.html" );
		$(this).addClass('active').siblings().removeClass('active');
})
	$("#about").on("click", function(){
		$("#section").load( "/about.html" );
		$(this).addClass('active').siblings().removeClass('active');	
})
	$("#contact").on("click", function(){
		$("#section").load( "/contact.html" );
		$(this).addClass('active').siblings().removeClass('active');
})

loadContent();

window.onload = function() {

 $("a.grouped_elements").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});

};

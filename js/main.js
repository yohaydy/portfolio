
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
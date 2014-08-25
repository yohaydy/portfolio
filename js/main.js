
// $inner = '<ul id="gallery">
// 				<li><a href="img/gallery1.jpg"><img src="img/gallery1.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery2.jpg"><img src="img/gallery2.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery3.jpg"><img src="img/gallery3.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery4.jpg"><img src="img/gallery4.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery5.jpg"><img src="img/gallery5.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery6.jpg"><img src="img/gallery6.jpg" alt=""><p>Just some experementation</p></a></li>
// 			</ul>'


function loadContent(){
	$("#section").load( "/portfolio.html" );
}

	$("#portfolio").on("click", function(){$("#section").load( "/portfolio.html" );
	$('#portfolio').siblings().removeClass('active');
	$('#portfolio').addClass('active');})
	$("#about").on("click", function(){$("#section").load( "/about.html" );
	$('#about').siblings().removeClass('active');
	$('#about').addClass('active')	})
	$("#contact").on("click", function(){$("#section").load( "/contact.html" );
	$('#contact').siblings().removeClass('active');
	$('#contact').addClass('active')
})

loadContent();

// $inner = '<ul id="gallery">
// 				<li><a href="img/gallery1.jpg"><img src="img/gallery1.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery2.jpg"><img src="img/gallery2.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery3.jpg"><img src="img/gallery3.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery4.jpg"><img src="img/gallery4.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery5.jpg"><img src="img/gallery5.jpg" alt=""><p>Just some experementation</p></a></li>
// 				<li><a href="img/gallery6.jpg"><img src="img/gallery6.jpg" alt=""><p>Just some experementation</p></a></li>
// 			</ul>'

$portfolio = '<ul id="gallery"><li><a href="img/gallery1.jpg"><img src="img/gallery1.jpg" alt=""><p>Just some experementation</p></a></li><li><a href="img/gallery2.jpg"><img src="img/gallery2.jpg" alt=""><p>Just some experementation</p></a></li><li><a href="img/gallery3.jpg"><img src="img/gallery3.jpg" alt=""><p>Just some experementation</p></a></li><li><a href="img/gallery4.jpg"><img src="img/gallery4.jpg" alt=""><p>Just some experementation</p></a></li><li><a href="img/gallery5.jpg"><img src="img/gallery5.jpg" alt=""><p>Just some experementation</p></a></li><li><a href="img/gallery6.jpg"><img src="img/gallery6.jpg" alt=""><p>Just some experementation</p></a></li></ul>';
$about = '<img src="img/photo.jpg" alt="Photograph of Oscar" class="profile-photo"><h3>About</h3><p> Hi, I am Oscar Rukmans! This is my design portfolio where I share all of my favorite work. When I am not designing things, I enjoy exercising, playing video games, drinking good cofee, and more.</p>';
$contact = '<section id="primary"><h3>General Information</h3><p>I am not currently looking for new design work, but I am available for speaking gigs and similar engagements. If you have any questions, please don not hesitate to contact me!</p><p>Please use phone contact for urgent inquiries. Otherwise, Facebook and email are the best way to reach me.</p></section><section id="secondary"><h3>Contact Details</h3><ul class="contact-info"><li class="phone"><a href="tel:37126591192">+37126591192</a></li><li class="mail"><a href="mailto:oskars.rukmans@gmail.com">oskars.rukmans@gmail.com</a></li><li class="twitter"><a href="https://twitter.com/kokosina88">@kokosina88</a></li></ul>';

function loadContent(){
	$("#section").html($portfolio)
}

	$("#portfolio").on("click", function(){$("#section").html($portfolio);
	$('#portfolio').siblings().removeClass('active');
	$('#portfolio').addClass('active');})
	$("#about").on("click", function(){$("#section").html($about);
	$('#about').siblings().removeClass('active');
	$('#about').addClass('active')	})
	$("#contact").on("click", function(){$("#section").html($contact);
	$('#contact').siblings().removeClass('active');
	$('#contact').addClass('active')
})

loadContent();
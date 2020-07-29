var fullPage = {
	go:function(){
		jQuery('#fullpage').fullpage({
			anchors: ['inicio.html', 'nosotros.html', 'clientes.html', 'equipo.html', 'contacto.html'],
			menu: '#menu',
			slidesNavigation: true,
			fadingEffect: true,
			scrollOverflow: true,
			responsiveWidth:0,
			receptivoAltura:0,
			scrollOverflowOptions: {
				click:false,
				preventDefaultException: {tagName: /.*/}
			},
			afterRender: function(){
				jQuery('.ly-latin-loader').fadeOut('slow');
				animarBolas();
			},
			afterLoad: function(anchorLink, index){
				if(anchorLink == 'nosotros.html' || anchorLink == 'clientes.html' || anchorLink == 'equipo.html'){
					jQuery('.main-header').removeClass().addClass('main-header');
					jQuery('.main-header').addClass('nos');
				}

				if(anchorLink == 'inicio.html'){
					jQuery('.main-header').removeClass('cont');
					jQuery('.main-header').removeClass('nos');
				}

				if(anchorLink == 'contacto.html'){
					jQuery('.main-header').removeClass().addClass('main-header');
					jQuery('.main-header').addClass('cont');
				}
			},
			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);
		
				if(index == 2 && direction == 'up'){
					jQuery('.main-header').removeClass('nos');
				}

				if(index == 5 && direction =='up'){
					jQuery('.main-header').removeClass('cont');
				}
			}
		});
	}
}

var menuHead = {
	go:function(){
		jQuery('#nav-icon').on('click', function(){
			jQuery('.main-nav').addClass('open');
		});
		jQuery('#nav-icon-close').on('click', function(){
			jQuery('.main-nav').removeClass('open');
		});
	}
}

var eqDeta = {
	go:function(){
		jQuery('.lista-equipo > div a').on('click', function(e){
			e.preventDefault();
			var dataEq = jQuery(this).attr('data-eq');
			jQuery('#' + dataEq).fadeIn();
		});

		jQuery('.ly-eqdeta .close').on('click', function(){
			jQuery(this).parent().fadeOut();
		});

		jQuery(document).keyup(function(e) {
			if(e.keyCode === 27){
				jQuery('.ly-eqdeta').fadeOut();
			}
		});
	}
}

var menuNav = {
	go:function(){
		jQuery('#menu a').on('click', function(e){
			jQuery('.main-nav').removeClass('open');
		});
	}
}

var validInput = {
	go:function(){
		jQuery('#nombre, #titulo, #compania').on('input', function () { 
			this.value = this.value.replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]\s/g,'');
		});
		
		jQuery('#telefono').on('input', function () { 
			this.value = this.value.replace(/[^0-9]/g,'');
		});
	}
}

var bgImage = {
	go:function(){
		setTimeout(function() { 
			jQuery('.section.home .ct').addClass('zoom');
		}, 2000);
	}
}

function animarBolas(){
	//desktop
	$('#bubble1').css('left','230px')
	$('#bubble1').css('top','320px')

	$('#bubble2').css('left','180px')
	$('#bubble2').css('top','280px')

	$('#bubble3').css('left','160px')
	$('#bubble3').css('top','480px')

	$('#bubble4').css('left','140px')
	$('#bubble4').css('top','380px')

	$('#bubble5').css('left','280px')
	$('#bubble5').css('top','230px')

	$('#bubble6').css('left','380px')
	$('#bubble6').css('top','730px')

	$('#bubble7').css('left','430px')
	$('#bubble7').css('top','-60px')

	$('#bubble8').css('left','1230px')
	$('#bubble8').css('top','-40px')

	$('#bubble9').css('left','1580px')
	$('#bubble9').css('top','120px')

	$('#bubble10').css('left','1530px')
	$('#bubble10').css('top','420px')

	$('#bubble11').css('left','1530px')
	$('#bubble11').css('top','620px')

	//Mobile
	$('#bubble1_mb').css('left','100px')
	$('#bubble1_mb').css('top','520px')

	$('#bubble2_mb').css('left','50px')
	$('#bubble2_mb').css('top','530px')

	$('#bubble3_mb').css('left','90px')
	$('#bubble3_mb').css('top','500px')

	$('#bubble4_mb').css('left','140px')
	$('#bubble4_mb').css('top','580px')

	$('#bubble5_mb').css('left','280px')
	$('#bubble5_mb').css('top','230px')

	$('#bubble6_mb').css('left','380px')
	$('#bubble6_mb').css('top','730px')

	$('#bubble7_mb').css('left','230px')
	$('#bubble7_mb').css('top','-20px')

	$('#bubble8_mb').css('left','330px')
	$('#bubble8_mb').css('top','-40px')

	$('#bubble9_mb').css('left','300px')
	$('#bubble9_mb').css('top','120px')

	$('#bubble10_mb').css('left','230px')
	$('#bubble10_mb').css('top','420px')

	$('#bubble11_mb').css('left','330px')
	$('#bubble11_mb').css('top','620px')

	var dur1 = 60;
	var dur = 32;
	//animaciones

	
	gsap.to(".img-fondo", {x: -850, duration: 20, scaleX:1.2, scaleY:1.2, yoyo:true, repeat:-1, ease:Linear.easeNone});

	gsap.to("#bubble1", {rotation: 160, x: 1900, y:-200, duration: dur1, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble2", {rotation: -156, x: 600, y:-260, duration: dur1, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble3", {rotation: 156, x: 350, y:-260, duration: dur1, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble4", {rotation: 356, x: 950, y:-560, duration: dur1, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble5", {rotation: 356, x: 950, y:-40, duration: dur1, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble6", {rotation: 356, x: 1350, y:-540, duration: dur1, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble7", {rotation: 356, x: 1350, y:0, duration: dur1, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble8", {rotation: 356, x: 1340, y:-400, duration: dur1, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble9", {rotation: 356, x: 1340, y:-600, duration: dur1, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble10", {rotation: -356, x: 740, y:-500, duration: dur1, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble11", {rotation: 356, x: 1540, y:-200, duration: dur1, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});

	gsap.to("#bubble1_mb", {rotation: 160, x: 400, y:-200, duration: dur, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble2_mb", {rotation: -156, x: 300, y:-260, duration: dur, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble3_mb", {rotation: 156, x: 150, y:-260, duration: dur, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble4_mb", {rotation: 356, x: 450, y:-560, duration: dur, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble5_mb", {rotation: 356, x: 450, y:-40, duration: dur, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble6_mb", {rotation: 356, x: 500, y:-540, duration: dur, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble7_mb", {rotation: 356, x: 540, y:0, duration: dur, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble8_mb", {rotation: 356, x: -450, y:400, duration: dur, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble9_mb", {rotation: 356, x: -300, y:600, duration: dur, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble10_mb", {rotation: -356, x: -240, y:500, duration: dur, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});
	gsap.to("#bubble11_mb", {rotation: 356, x: -540, y:200, duration: dur, scaleY:2, scaleX:2, yoyo:true, repeat:-1, ease:Linear.easeNone});

	/*
	var bubbles_width;
	var bubbles_height;

	$('.bubbles').ready(function($){
		bubbles_width = $(this).width();
		bubbles_height = $(this).height();

		//alert('posx:' + posx_random + ' - Posy:' + posy_random);

		$( ".bubble" ).each(function( index ) {
			var posx_random;
			var posy_random;
			posx_random = Math.floor(Math.random() * bubbles_width);
			posy_random = Math.floor(Math.random() * bubbles_height);
		  	console.log('hola' + index)
		  	$(this).css({'left': posx_random, 'top': posy_random});

		});

	}); 
*/
	var texto1_ = new SplitText('.texto1', {type:"words, chars"});
	var texto2_ = new SplitText('.texto2', {type:"words, chars"});
	var texto3_ = new SplitText('.texto3', {type:"words, chars"});
	var texto4_ = new SplitText('.texto4', {type:"words, chars"});
	var texto5_ = new SplitText('.texto5', {type:"words, chars"});
	var texto6_ = new SplitText('.texto6', {type:"words, chars"});

	TweenLite.set('.texto1', {perspective:400});
	TweenLite.set('.texto2', {perspective:400});
	TweenLite.set('.texto3', {perspective:400});
	TweenLite.set('.texto4', {perspective:400});
	TweenLite.set('.texto5', {perspective:400});
	TweenLite.set('.texto6', {perspective:400});

	//TweenMax.staggerFrom(texto1_.chars, 1.2, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut, delay:2}, 0.02);

	
	var tl = gsap.timeline({repeat: -1, repeatDelay: 1});
	tl.staggerFrom(texto2_.chars, 0.4, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut, delay:1}, 0.02);
	tl.staggerTo(texto2_.chars, 0.6, {opacity:0, x:80,  ease:Back.easeOut, delay:1}, 0.03);
	tl.staggerFrom(texto1_.chars, 0.4, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.02);
	tl.staggerTo(texto1_.chars, 0.6, {opacity:0, x:80,  ease:Back.easeOut, delay:1}, 0.03);
	tl.staggerFrom(texto3_.chars, 0.4, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.02);
	tl.staggerTo(texto3_.chars, 0.6, {opacity:0, x:80,  ease:Back.easeOut, delay:2}, 0.01);
	tl.staggerFrom(texto4_.words, 1, {opacity:0, y:120,  ease:Back.easeOut}, 0.12);
	tl.staggerTo(texto4_.chars, 0.6, {opacity:0, x:80,  ease:Back.easeOut, delay:2}, 0.01);
	tl.staggerFrom(texto5_.chars, 0.4, {opacity:0, x:-60,  ease:Back.easeOut}, 0.02);
	tl.staggerTo(texto5_.chars, 0.6, {opacity:0, x:80,  ease:Back.easeOut, delay:2}, 0.01);
	tl.staggerFrom(texto6_.chars, 0.4, {opacity:0, x:-60,  ease:Back.easeOut}, 0.02);
	tl.staggerTo(texto6_.chars, 0.6, {opacity:0, x:80,  ease:Back.easeOut, delay:2}, 0.01);
	
	//tl.to("#id", {y: 50, duration: 1});
	//tl.to("#id", {opacity: 0, duration: 1});


	/*
	
	TweenMax.staggerFrom(texto1_.chars, 1.2, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut, delay:2}, 0.02, function(){
		TweenMax.staggerTo(texto1_.chars, 0.8, {opacity:0, x:80,  ease:Back.easeOut, delay:.64}, 0.02);
	});

	TweenLite.set('.texto2', {perspective:400});
	TweenMax.staggerFrom(texto2_.chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut, delay:1}, 0.02, function(){
		TweenMax.staggerTo(texto2_.chars, 0.8, {opacity:0, x:80,  ease:Back.easeOut, delay:.32}, 0.02);
	});

	TweenLite.set('.texto3', {perspective:400});
	TweenMax.staggerFrom(texto3_.chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut, delay:1}, 0.02, function(){
		TweenMax.staggerTo(texto3_.chars, 0.8, {opacity:0, x:80,  ease:Back.easeOut, delay:.60}, 0.02);
	});
	*/

};


jQuery(document).ready(function(){
	fullPage.go();
	menuHead.go();
	eqDeta.go();
	menuNav.go();
	validInput.go();
	//bgImage.go();

	$(window).bind("orientationchange", function(event){
		location.reload();
	});

});










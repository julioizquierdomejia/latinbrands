var fullPage = {
	go:function(){
		jQuery('#fullpage').fullpage({
			anchors: ['inicio.html', 'nosotros.html', 'clientes.html', 'equipo.html', 'contacto.html'],
			menu: '#menu',
			slidesNavigation: true,
			fadingEffect: true,
			scrollOverflow: true,
			scrollOverflowOptions: {
				click:false,    
				preventDefaultException: {tagName: /.*/}
			},
			afterRender: function(){
				jQuery('.ly-latin-loader').fadeOut('slow');
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

jQuery(document).ready(function(){
	fullPage.go();
	menuHead.go();
	eqDeta.go();
	menuNav.go();
	validInput.go();
	bgImage.go();


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

	

//analizamos el alto y ancho del div que contiene las bubbles
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
	
	

	


});










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










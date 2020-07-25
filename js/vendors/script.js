var validateForm = {
	load: function(){
    jQuery.validator.addMethod("lettersonly", function(value, element) {
      return this.optional(element) || /^[ a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/i.test(value);
    }, "Letters only please");
    jQuery.validator.addMethod("laxEmail", function(value, element) {
      return this.optional( element ) || /[a-z0-9_\.%\+\-]+@[a-z0-9]+\.[a-z]+/.test( value );
    }, 'Please enter a valid email address.');

		jQuery("#getInTouch").validate({
			rules: {
        nombre: { 
          required: true,
          lettersonly: true
        },
        titulo: { 
          required: true,
          lettersonly: true
        },
        compania: { 
          required: true,
          lettersonly: true
        },
        telefono: {
          required: true,
					number: true
        },
				email: {
					required: true,
					laxEmail: true
				},
        mensaje: "required"
			},
			messages: {
        nombre: "Por favor ingrese los datos correctos",
        titulo: "Por favor ingrese los datos correctos",
        compania: "Por favor ingrese los datos correctos",
        telefono: "Por favor coloque su número de teléfono",
				email: {
					required: "Por favor coloque su email",
					laxEmail: "Su email no parece ser válido"
				},
				mensaje: "Por favor coloque su mensaje en el campo"
			},
			submitHandler: function(form) {
        $.ajax({
          url: form.action,
          type: form.method,
          data: jQuery(form).serialize(),
          success: function(response) {
            jQuery("#getInTouch input[type='text'], #getInTouch textarea").val('').removeClass('valid');
            window.location.href = 'gracias.html';
          }
        });
    	}
		});	

	}
}

var sendForm = {
	load: function(){

	}
}

jQuery(document).ready(function(){
  validateForm.load();
})
<?php

  $Contact["nombre"] 		  = $_POST['nombre'];
  $Contact["titulo"]	    = $_POST['titulo'];
  $Contact["compania"] 		= $_POST['compania'];
	$Contact["email"] 		  = $_POST['email'];
	$Contact["telefono"] 		= $_POST['telefono'];
	$Contact["mensaje"] 	  = $_POST['mensaje'];
	$Contact["radio1"]      = $_POST['radio1'];
	
	if(isset( $Contact["nombre"] ) )

		{

			$msg_title 		=  "Tienes un contacto de la web";
			$msg_destino 	=  "mariajose@emotiv.pe, jose@emotiv.pe, carlos@emotiv.pe, miguel@emotiv.pe, jack@emotiv.pe";
			
			$to = $msg_destino;

			$headers = "From: " . strip_tags($Contact["email"]) . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=utf-8\r\n";

			$msg_content 	=  "Tienes un email enviado desde la web latinbrands<br><br>
			De: ".$Contact["nombre"]."<br>
			Quiero: ".$Contact["radio1"]."<br>
			Email: ".$Contact["email"]."<br>
			Teléfono: ".$Contact["telefono"]."<br>
			Empresa: ".$Contact["compania"]."<br>
			Mensaje: ".$Contact["mensaje"];
			@mail($to, $msg_title, $msg_content, $headers);

			echo '¡Mensaje enviado,<br> en breve nos contactaremos contigo!';

		} else {
			echo 'Entrada no permitida';
		}
		
	die;

?>
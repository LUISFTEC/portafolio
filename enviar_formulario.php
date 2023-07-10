<?php
// Recuperar los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tema = $_POST['tema'];
$mensaje = $_POST['mensaje'];

// Configurar el correo electrónico
$destinatario = 'luisftec2022@gmail.com';
$asunto = 'Nuevo mensaje del formulario de contacto';
$mensajeCorreo = "Nombre: $nombre\n";
$mensajeCorreo .= "Email: $email\n";
$mensajeCorreo .= "Tema: $tema\n";
$mensajeCorreo .= "Mensaje: $mensaje\n";

// Enviar el correo electrónico
$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();
mail($destinatario, $asunto, $mensajeCorreo, $headers);

// Redirigir al usuario a una página de confirmación
header('Location: confirmacion.html');
?>

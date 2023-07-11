<?php session_start(); ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de envío</title>
    <link rel="stylesheet" href="estilo.css">
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            background-color: #cacaca;
        }

        .contenedor {
            display: inline-block;
            padding: 20px;
            background-color: rgba(128, 128, 128, 0.2);
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            border: 1px solid #ddd;
            max-width: 100%;
            position: relative;
        }

        h1, p, ul {
            margin: 0;
            padding: 0;
        }

        p {
            margin-bottom: 20px;
        }

        ul {
            text-align: left;
            list-style-type: none;
            margin-bottom: 20px;
            padding-left: 0;
        }

        ul li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 10px;
        }

        ul li strong {
            width: 120px;
            margin-right: 10px;
        }

        .truncado {
            display: inline-block;
            max-width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .footer {
            font-family: inherit;
            font-size: inherit;
            color: inherit;
            text-align: inherit;
            margin-top: 20px;
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <h1>¡Mensaje enviado con éxito!</h1>
        <p>Gracias por contactarme. He recibido los siguientes datos:</p>
        
        <ul>
            <li><strong>Nombre:</strong> <span class="truncado"><?php echo substr($_SESSION['nombre'], 0, 50); ?></span></li>
            <li><strong>Email:</strong> <span class="truncado"><?php echo substr($_SESSION['email'], 0, 50); ?></span></li>
            <li><strong>Tema:</strong> <span class="truncado"><?php echo substr($_SESSION['tema'], 0, 50); ?></span></li>
            <li><strong>Mensaje:</strong> <span class="truncado"><?php echo substr($_SESSION['mensaje'], 0, 100); ?></span></li>
        </ul>

        <span class="footer">
            @luisftec
        </span>
    </div>
</body>
</html>

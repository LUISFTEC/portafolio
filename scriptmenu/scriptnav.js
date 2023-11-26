    // JavaScript para ocultar/mostrar la barra de navegación
    let ultimaPosicionScroll = window.pageYOffset; // Guarda la última posición del scroll
    
    window.onscroll = function() {
        let posicionActualScroll = window.pageYOffset;
        if (ultimaPosicionScroll > posicionActualScroll) {
            document.getElementById("miBarraNavegacion").style.top = "0";
        } else {
            document.getElementById("miBarraNavegacion").style.top = "-60px"; // Ajusta este valor según la altura de tu barra de navegación
        }
        ultimaPosicionScroll = posicionActualScroll;
    }
    
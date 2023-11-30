// JavaScript para ocultar/mostrar la barra de navegación
let ultimaPosicionScroll = window.pageYOffset; // Guarda la última posición del scroll

window.onscroll = function () {
  let posicionActualScroll = window.pageYOffset;
  // Verifica si el ancho de la ventana es mayor que un cierto valor, p.ej. 768px
  if (window.innerWidth > 858) {
    if (ultimaPosicionScroll > posicionActualScroll) {
      document.getElementById("miBarraNavegacion").style.top = "0";
    } else {
      document.getElementById("miBarraNavegacion").style.top = "-60px"; // Ajusta este valor según la altura de tu barra de navegación
    }
  } else {
    // En pantallas pequeñas (modo responsivo), siempre muestra la barra de navegación
    document.getElementById("miBarraNavegacion").style.top = "0";
  }
  ultimaPosicionScroll = posicionActualScroll;
};

document.querySelectorAll("#menu a").forEach(enlace => {
  enlace.addEventListener('click', () => {
      document.getElementById('check').checked = false;
  });
});

// JavaScritp  para el subir / detecta si estamos en el inicio y lo oculta leugo muestra cuando no lo esta

window.addEventListener('scroll', function() {
  var alturaInicio = document.getElementById('inicio').offsetHeight; // Obtén la altura de la sección 'inicio'
  var botonSubir = document.querySelector('.subir-inicio'); // Selecciona el botón de 'Subir'

  if (window.pageYOffset > alturaInicio) {
    botonSubir.style.display = 'block'; // Muestra el botón si el desplazamiento supera la altura de 'inicio'
  } else {
    botonSubir.style.display = 'none'; // Oculta el botón si el desplazamiento es menor que la altura de 'inicio'
  }
});


// JavaScritp  para el subir / suave contorl del seplazamiento sutil


function desplazamientoSuaveHaciaArriba(duracion) {
  const inicio = window.pageYOffset;
  const destino = 0;
  let inicioTiempo = null;

  function paso(tiempoActual) {
      if (inicioTiempo === null) inicioTiempo = tiempoActual;
      const tiempoTranscurrido = tiempoActual - inicioTiempo;
      const porcentaje = Math.min(tiempoTranscurrido / duracion, 1);

      window.scrollTo(0, inicio + (destino - inicio) * porcentaje);

      if (tiempoTranscurrido < duracion) {
          requestAnimationFrame(paso);
      }
  }

  requestAnimationFrame(paso);
}

document.querySelector('.subir-inicio').addEventListener('click', function(event) {
  event.preventDefault();
  desplazamientoSuaveHaciaArriba(1000); // 2000 milisegundos (2 segundos) para el desplazamiento
});


//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("bd").classList.add("barra-progreso3");
    document.getElementById("ps").classList.add("barra-progreso4");
    document.getElementById("pr").classList.add("barra-progreso5");
  }
}
// Detectar el scrolling para mostrar u ocultar el footer
window.onscroll = function () {
  mostrarOcultarFooter();
};

// Función para mostrar u ocultar el footer
function mostrarOcultarFooter() {
  var footer = document.querySelector("footer");
  var alturaViewport = window.innerHeight;
  var alturaContenido = document.body.clientHeight;
  var scrollActual = window.pageYOffset;

  // Mostrar el footer si el scroll está cerca del final del contenido
  if (alturaContenido - (scrollActual + alturaViewport) < 50) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
}
// Variables para el seguimiento del scroll
var lastScrollTop = 0;
var scrollingUp = false;

// Función para mostrar/ocultar la sección del menú al hacer scroll
function mostrarOcultarMenu() {
  var header = document.querySelector(".contenido-header");
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // El usuario está desplazándose hacia abajo
    scrollingUp = false;
    header.style.transform = "translateY(-100%)";
    header.style.backgroundColor = "transparent";
  } else {
    // El usuario está desplazándose hacia arriba
    scrollingUp = true;
    header.style.transform = "translateY(0)";
    header.style.backgroundColor = "#333A42";
  }

  lastScrollTop = st;

  if (scrollingUp) {
    header.style.borderTopLeftRadius = "10px";
    header.style.borderTopRightRadius = "10px";
  } else {
    header.style.borderTopLeftRadius = "0px";
    header.style.borderTopRightRadius = "0px";
  }
}
// Detectar el scroll para mostrar/ocultar la sección del menú
window.onscroll = function () {
  efectoHabilidades();
  mostrarOcultarFooter();
  mostrarOcultarMenu(); // Agregamos esta llamada a la función
};

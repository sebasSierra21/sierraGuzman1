const carousel = document.getElementById('myCarousel');
const images = carousel.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  images[currentIndex].classList.add('active');
}

function showNextImage() {
  currentIndex++;
  showImage(currentIndex);
}

setInterval(showNextImage, 6000);

showImage(currentIndex);

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navBar = document.querySelector(".nav-bar");

  menuToggle.addEventListener("click", function() {
    navBar.classList.toggle("nav-open");
  });

  // Agrega este código adicional
  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      navBar.classList.remove("nav-open");
    }
  });
});


//Carrusel infinito 
function cambiarTamanoPantalla() {
  const listaClientes = document.getElementById('lista-clientes');
  const boxClientes = document.querySelectorAll('.box-clientes');
  const anchoSlide = boxClientes[0].offsetWidth;
  const numSlides = boxClientes.length;
  const listaAncho = anchoSlide * numSlides;

  // Eliminar los elementos clonados existentes
  while (listaClientes.firstChild) {
    listaClientes.removeChild(listaClientes.firstChild);
  }

  // Clonar los elementos de la lista
  for (let i = 0; i < numSlides; i++) {
    const clone = boxClientes[i].cloneNode(true);
    listaClientes.appendChild(clone);
  }

  // Establecer el ancho de la lista para contener todos los elementos
  listaClientes.style.width = listaAncho + 'px';

  // Iniciar la animación del carrusel
  let posicion = 0;
  const velocidad = 1; // Ajusta la velocidad de desplazamiento según tus necesidades

  function moverCarrusel() {
    posicion -= velocidad;
    listaClientes.style.transform = `translateX(${posicion}px)`;

    // Reiniciar el carrusel cuando llega al final
    if (posicion <= -listaAncho) {
      posicion = 0;
    }

    requestAnimationFrame(moverCarrusel);
  }

  moverCarrusel();
}

window.addEventListener('load', cambiarTamanoPantalla);

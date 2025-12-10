const cards = document.querySelectorAll('.flip-card');
        
        cards.forEach(card => {
            card.addEventListener('click', function() {
                // Esto pone o quita la clase "flipped" que activa tu CSS
                this.classList.toggle('flipped');
            });
        });

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav-link");

// Función maestra para cerrar el menú suavemente
const closeMenu = () => {
    console.log("Cerrando menú con animación...");
    
    // 1. Agregamos una clase temporal para decir "se está cerrando"
    // Esto servirá para mantener el header quieto en CSS
    document.body.classList.add("menu-closing");
    
    // 2. Quitamos la clase que muestra el menú (empieza la animación de salida)
    document.body.classList.remove("show-mobile-menu");

    // 3. Esperamos lo que dura tu transición CSS (300ms = 0.3s)
    setTimeout(() => {
        // 4. Limpiamos la clase temporal
        document.body.classList.remove("menu-closing");
    }, 300); 
};

// Alternar menú con el botón de hamburguesa
if (menuOpenButton) {
    menuOpenButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isMenuOpen = document.body.classList.contains("show-mobile-menu");
        
        if (isMenuOpen) {
            closeMenu();
        } else {
            console.log("Abriendo menú...");
            document.body.classList.add("show-mobile-menu");
        }
    });
}

// Cerrar menú con el botón X
if (menuCloseButton) {
    menuCloseButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });
}

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

// Header hide/show on scroll (Tu lógica original intacta)
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    if (window.innerWidth >= 900) { 
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('hide-header');
        } else {
            header.classList.remove('hide-header');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
});


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  
 centeredSlides: true,  // Obligatorio
  centeredSlidesBounds: false, // Ayuda a que no se descuadre en los bordes
  slidesPerView: "auto", // <--- TRUCO PRO: Deja que CSS decida el ancho, suele centrar mejor
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, // (Opcional) Hace que los puntos se vean más modernos
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});
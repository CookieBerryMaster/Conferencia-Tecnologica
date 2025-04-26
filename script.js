// Esta seccion es para hacer un header y footer dinamico :D
const header = document.querySelector('header')
const footer = document.querySelector('footer')

//Para agregar automaticamente el contenido dentro de todos los headers
 header.innerHTML = `
<nav class="navbar">
                <div class="logo">
                <a href="index.html"><img src="LogoUamBlanco.png"></a>
                </div> 
                <ul class="paginas">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="conferencia.html">Eventos</a></li>
                    <li><a href="Registro.html">Registro</a></li>
                </ul>
        </nav>
 `;

//Para agregar automaticamente el contenido dentro de todos los footers
footer.innerHTML = `
<div class="containerFooter">
            <div class="footer-content">
                <h3>Contáctanos</h3>
                <p>Email: Infoejemplo@uamv.edu.ni</p>
                <p>Teléfono: +(505) 2278-3800</p>
                <p>Managua - Nicaragua</p>
            </div>
            <div class="footer-content">
                <h3>Admisión</h3>
                <ul class="list">
                <li><a href="">Proceso de Admisión y Aranceles</a></li>
                <li><a href="">Examen Vocacional</a></li>
                </ul>
            </div>
            <div class="footer-content">
                <h3>Siguenos!</h3>
                <ul class="social-icons">
                <li><a href=""><i class="fab fa-facebook"></i></a></li>
                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
                <li><a href=""><i class="fab fa-instagram"></i></a></li>
            </ul>
            </div>
        </div> <!-- termina el container -->
        <div class="bottom">
            <p>&copy; 2025 - Universidad Americana - UAM</p>
        </div>
 `;

// para el carrusel
const swiper = new Swiper('.swiper', {

    loop: true,

    autoplay:{
        delay: 3000,
        disableOnInteraction: false
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
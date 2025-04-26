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


 //Logica de Select
 const selectBtn = document.querySelector(".select-btn"),
 item = document.querySelectorAll(".events");
 
 selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
    });

    item.forEach(events => {
        events.addEventListener("click", () =>{
            events.classList.toggle("checked");
        })

    });

//Validacion de datos
document.getElementById('btnRegistrar').addEventListener('click', function(event) {
    event.preventDefault(); 

    let valid = true;

    // Elimina los mensajes de error previos evitando el stack de mensajes de error
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Validar que un nombre se encuentre en el campo "nombre completo"
    const nombre = document.getElementById('nombre').value;
    const nombreError = document.createElement('p');
    nombreError.classList.add('error-message');
    nombreError.style.color = 'red';

    if (!nombre.trim()) {
        nombreError.textContent = 'El nombre completo es obligatorio.';
        document.querySelector('#nombre').parentNode.appendChild(nombreError);
        nombreError.classList.add('show');  // Mostrar el mensaje con animación
        valid = false;
    }

    // Validar formato de correo
    const correo = document.getElementById('correo').value;
    const correoError = document.createElement('p');
    correoError.classList.add('error-message');
    correoError.style.color = 'red';

    const correoRegex = /^[a-zA-Z0-9._%+-]+@uamv\.edu\.ni$/;

    if (!correoRegex.test(correo)) {
        correoError.textContent = 'El correo debe tener el formato "usuario@uamv.edu.ni".';
        document.querySelector('#correo').parentNode.appendChild(correoError);
        correoError.classList.add('show');
        valid = false;
    }

    // Validar eventos seleccionados
    const eventosSeleccionados = document.querySelectorAll('.events.checked');
    const eventosError = document.createElement('p');
    eventosError.classList.add('error-message');
    eventosError.style.color = 'red';

    if (eventosSeleccionados.length === 0) {
        eventosError.textContent = 'Debes seleccionar al menos un evento.';
        document.querySelector('.form-container').appendChild(eventosError);
        eventosError.classList.add('show');
        valid = false;
    }

    // Si todo es válido
    if (valid) {
        alert('Formulario enviado correctamente!');
    }
});
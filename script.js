// Obtener elementos del DOM
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const redirectBtn = document.getElementById('redirectBtn');

// Función para abrir el popup
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Función para cerrar el popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Función para redirigir a otra página
redirectBtn.addEventListener('click', () => {
  window.location.href = 'https://www.hbomax.com'; // Cambia esta URL por la que desees
});

// Cerrar el popup si se hace clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// 🌿 Controle do menu lateral
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  menuToggle.classList.remove('active');
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});

// 🌾 Cabeçalho transparente com sombra ao rolar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

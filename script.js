// Scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    alvo.scrollIntoView({ behavior: 'smooth' });
    });
});

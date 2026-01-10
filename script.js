const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar-default');
const menuLinks = document.querySelectorAll('.menu-link');

// Alterna o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (!navbar.classList.contains('hidden')) {
      navbar.classList.add('hidden');
    }
  });
});
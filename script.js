// Theme Selector (Light, Dark Gray, Dark Black)
const themeSelector = document.getElementById('theme-selector');
const html = document.documentElement;

// Available themes
const themes = {
  light: { class: '', storage: 'light' },
  dark: { class: 'dark', storage: 'dark' },
  black: { class: 'dark black-mode', storage: 'black' }
};

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  if (themeSelector) {
    themeSelector.value = savedTheme;
  }
}

// Apply theme to document
function applyTheme(themeName) {
  const theme = themes[themeName];
  
  // Remove all theme classes
  html.classList.remove('dark', 'black-mode');
  
  // Apply new theme
  if (theme.class) {
    theme.class.split(' ').forEach(cls => {
      if (cls) html.classList.add(cls);
    });
  }
  
  // Save to localStorage
  localStorage.setItem('theme', themeName);
}

// Theme selector change event
if (themeSelector) {
  themeSelector.addEventListener('change', (e) => {
    applyTheme(e.target.value);
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initTheme);

// Also initialize immediately in case DOM is already loaded
initTheme();

// Navigation Active State Detection
function updateActiveNavItem() {
  const navItems = document.querySelectorAll('.nav-item');
  const currentPage = getCurrentPageName();
  
  navItems.forEach(item => {
    const itemPage = item.dataset.page;
    
    if (itemPage === currentPage) {
      // Add active state
      item.classList.add('active-nav');
      item.classList.remove('text-gray-600', 'dark:text-gray-400');
      item.classList.add('text-blue-600', 'dark:text-blue-400');
      
      // Find the color for this item and apply
      const colors = {
        'index': { text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10' },
        'ensaio': { text: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10' },
        'programacao': { text: 'text-pink-600 dark:text-pink-400', bg: 'bg-pink-500/10' },
        'hinos': { text: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-500/10' },
        'perfil': { text: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10' }
      };
      
      const color = colors[itemPage] || colors['index'];
      item.className = `nav-item active-nav flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${color.text} group`;
    } else {
      // Remove active state
      item.classList.remove('active-nav');
      item.className = 'nav-item flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group';
    }
  });
}

function getCurrentPageName() {
  const pathname = window.location.pathname;
  if (pathname.includes('ensaio')) return 'ensaio';
  if (pathname.includes('programacao')) return 'programacao';
  if (pathname.includes('hinosfuturos')) return 'hinos';
  if (pathname.includes('youthregistration')) return 'perfil';
  return 'index';
}

// Update active nav on page load
document.addEventListener('DOMContentLoaded', updateActiveNavItem);
updateActiveNavItem();

// Menu Toggle for Bottom Navigation (keep existing)
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar-default');
const menuLinks = document.querySelectorAll('.menu-link');

// Se os elementos existem, adiciona event listeners
if (menuToggle && navbar) {
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
}

// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const carouselTrack = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  let autoPlayInterval;

  function updateCarousel() {
    const offset = currentSlide * -100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.remove('bg-white/60');
        indicator.classList.add('bg-white');
      } else {
        indicator.classList.add('bg-white/60');
        indicator.classList.remove('bg-white');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Event listeners
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      goToSlide(parseInt(indicator.dataset.slide));
      resetAutoPlay();
    });
  });

  // Initialize carousel
  updateCarousel();
  startAutoPlay();

  // Pause autoplay on hover (optional, remove if not desired)
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    startAutoPlay();
  });
});
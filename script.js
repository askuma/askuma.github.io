// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  themeToggle.innerHTML = newTheme === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.innerHTML = navMenu.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Close mobile menu after clicking
    navMenu.classList.remove('active');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Sticky navbar
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }

  if (scrollTop > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  lastScrollTop = scrollTop;
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .highlight, .role').forEach(el => {
  observer.observe(el);
});

// Add hover effects to chips
document.querySelectorAll('.chips li').forEach(chip => {
  chip.addEventListener('mouseenter', () => {
    chip.style.transform = 'scale(1.05)';
    chip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  });

  chip.addEventListener('mouseleave', () => {
    chip.style.transform = 'scale(1)';
    chip.style.boxShadow = 'none';
  });
});

// Add click effects to contact links
document.querySelectorAll('.hero__card a').forEach(link => {
  link.addEventListener('click', (e) => {
    // Add a subtle animation
    link.style.transform = 'scale(0.95)';
    setTimeout(() => {
      link.style.transform = 'scale(1)';
    }, 150);
  });
});
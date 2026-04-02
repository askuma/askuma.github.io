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

// --- Agile Roles SVG Interactivity ---
const svg = document.querySelector('.hero__illustration svg');
let rolesData = {};

// Load roles data from JSON
fetch('roles-data.json')
  .then(res => res.json())
  .then(data => { rolesData = data; attachRoleHover(); });

function attachRoleHover() {
  if (!svg) return;
  // Map SVG circles to role names
  const roleMap = [
    { selector: 'circle[cx="210"][cy="90"]', role: 'Project Manager' },
    { selector: 'circle[cx="210"][cy="30"]', role: 'Scrum Master' },
    { selector: 'circle[cx="90"]', role: 'Product Owner' },
    { selector: 'circle[cx="330"]', role: 'Stakeholders' },
    { selector: 'circle[cx="210"][cy="160"]', role: 'Team' }
  ];

  // Create popup
  let popup = document.createElement('div');
  popup.className = 'role-popup';
  popup.style.position = 'fixed';
  popup.style.display = 'none';
  popup.style.zIndex = 9999;
  popup.style.minWidth = '220px';
  popup.style.maxWidth = '320px';
  popup.style.background = 'var(--card)';
  popup.style.color = 'var(--text)';
  popup.style.border = '1px solid var(--accent)';
  popup.style.borderRadius = '14px';
  popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
  popup.style.padding = '18px 18px 12px 18px';
  popup.style.pointerEvents = 'none';
  popup.style.transition = 'opacity 0.2s';
  popup.style.fontSize = '15px';
  document.body.appendChild(popup);

  roleMap.forEach(({ selector, role }) => {
    const el = svg.querySelector(selector);
    if (!el) return;
    el.style.cursor = 'pointer';
    el.addEventListener('mouseenter', e => {
      showRolePopup(role, e);
      el.setAttribute('stroke', '#fff');
      el.setAttribute('stroke-width', '3');
    });
    el.addEventListener('mousemove', e => {
      moveRolePopup(e);
    });
    el.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
      el.removeAttribute('stroke');
      el.removeAttribute('stroke-width');
    });
  });

  function showRolePopup(role, evt) {
    const data = rolesData[role];
    if (!data) return;
    popup.innerHTML = `<div style="font-weight:700;font-size:17px;color:${data.color}">${data.label}</div><div style="margin:6px 0 10px 0;font-size:13px;color:var(--muted)">${data.summary}</div><ul style="margin:0 0 0 18px;padding:0 0 0 0;font-size:14px;">${data.details.map(d=>`<li>${d}</li>`).join('')}</ul>`;
    popup.style.display = 'block';
    moveRolePopup(evt);
    popup.style.opacity = 1;
  }
  function moveRolePopup(evt) {
    popup.style.left = (evt.clientX + 18) + 'px';
    popup.style.top = (evt.clientY - 10) + 'px';
  }
}
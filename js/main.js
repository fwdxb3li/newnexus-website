// Language switcher
const langSwitch = document.querySelector('.lang-switch');
if (langSwitch) {
  const langBtn = langSwitch.querySelector('.lang-btn');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitch.classList.toggle('open');
  });
  document.addEventListener('click', () => langSwitch.classList.remove('open'));
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu-overlay');

if (hamburger && overlay) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));

// Active nav link
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .menu-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === current) a.classList.add('active');
});

// Contact form (no backend wired yet — shows confirmation locally)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.querySelector('.form-success');
    contactForm.reset();
    contactForm.style.display = 'none';
    if (success) success.classList.add('show');
  });
}

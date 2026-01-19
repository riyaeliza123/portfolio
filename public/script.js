// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .publication-item, .education-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-toggle');
const sidebarNav = document.getElementById('sidebar-nav');

if (hamburger && sidebarNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebarNav.classList.toggle('active');
  });

  // Close sidebar when clicking on a link
  sidebarNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      sidebarNav.classList.remove('active');
    });
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !sidebarNav.contains(e.target)) {
      hamburger.classList.remove('active');
      sidebarNav.classList.remove('active');
    }
  });

  // Change hamburger icon color based on scroll position
  const heroSection = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (heroSection) {
      const heroBottom = heroSection.offsetHeight;
      if (window.scrollY < heroBottom - 50) {
        hamburger.classList.add('at-header');
      } else {
        hamburger.classList.remove('at-header');
      }
    }
  });

  // Set initial state
  if (heroSection && window.scrollY < heroSection.offsetHeight - 50) {
    hamburger.classList.add('at-header');
  }
}

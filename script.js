const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

document.querySelectorAll('.faq-question').forEach(function(item) {
  item.addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
  });
});

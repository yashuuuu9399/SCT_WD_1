const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Scroll background change
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle nav menu on mobile
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// ScrollReveal setup
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 200
});

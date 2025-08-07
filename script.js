// Toggle navigation menu on mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Auto-rotate testimonials
let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 5000); // change every 5 seconds

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for subscribing to Gifty's Closet!");
  newsletterForm.reset();
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Your message has been sent. We’ll get back to you soon!");
  contactForm.reset();
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

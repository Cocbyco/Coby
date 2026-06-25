// EcoGrow Co. — Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // FAQ accordion
  document.querySelectorAll('.faq-item__question').forEach(function(question) {
    question.addEventListener('click', function() {
      var answer = this.nextElementSibling;
      answer.classList.toggle('faq-item__answer--open');
    });
  });

  // Mobile menu toggle
  var menuButton = document.querySelector('.mobile-menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function() {
      mobileNav.classList.toggle('mobile-nav--open');
      menuButton.setAttribute('aria-expanded',
        mobileNav.classList.contains('mobile-nav--open').toString()
      );
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
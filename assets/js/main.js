// Main JavaScript file
console.log("Hello from main.js!");

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('.header__nav');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      hamburger.classList.toggle('is-toggled-x'); // New class for 'X' state
      navMenu.classList.toggle('is-open');
    });
  }
});
/* Description: Custom JS file */

/* Navigation */
const toggle = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar");

// Toggle mobile menu
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

// Event listeners
toggle.addEventListener("click", toggleMenu, false);

const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = 'Back to top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const menuBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  sidebar.classList.toggle('open', isMenuOpen);
  overlay.classList.toggle('active', isMenuOpen);
  menuBtn.setAttribute('aria-expanded', String(isMenuOpen));
}
menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

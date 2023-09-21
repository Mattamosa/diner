// Hamburger Menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;



// Places just the current year into footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();


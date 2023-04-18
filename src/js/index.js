/*? no js js needed from me */

// click menu
const openMenu = document.getElementById("openMenu");
const menuNavbar = document.querySelector(".menuNavbar");
const closeMenu = document.getElementById("closeMenu");
openMenu.addEventListener("click", () => {
  menuNavbar.classList.add("openMenu");
});
closeMenu.addEventListener("click", () => {
  menuNavbar.classList.remove("openMenu");
});

// scrool menu
const nav = document.getElementsByTagName("nav")[0];
const navLink = document.querySelector("nav a");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("scroll");
    navLink.style.color = "#2d2d2d";
    openMenu.style.color = "#2d2d2d";
  } else {
    nav.classList.remove("scroll");
    navLink.style.color = "#fff";
    openMenu.style.color = "#fff";
  }
});

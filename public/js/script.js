// nav fixed
const header = document.querySelector("header");
const fixNav = header.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > fixNav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};

// navbar
const nav = document.querySelector("#nav");
const navMenu = document.querySelector("#nav-menu");
const list = document.querySelector("ul");

function toggleNav() {
  nav.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  header.classList.toggle("bg-opacity-10");
}
nav.addEventListener("click", toggleNav);

list.addEventListener("click", function () {
  nav.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
  header.classList.add("bg-opacity-10");
});

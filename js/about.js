const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksAll = document.querySelectorAll(".nav-links li");
const links = document.querySelectorAll(".nav-links li");
const scrool = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  scrool.classList.toggle("overflow-hidden");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

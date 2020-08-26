const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navLinksAll = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

const typed = new Typed(".typed", {
  stringsElement: "#cadenas-texto",
  typeSpeed: 90,
  startDelay: 2000,
  backSpeed: 90,
  smartBackspace: false,
  shuffle: false,
  backDelay: 500,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: "|",
  contentType: "html",
});

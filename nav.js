// Initial entrance
window.onload = () => {
  gsap.to("#mainNav", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });
};

// Scroll handle
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  window.scrollY > 50
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
});

// Mobile Logic
const toggle = document.getElementById("navToggle");
const overlay = document.getElementById("mobileOverlay");
const mobileHomeBtn = document.getElementById("mobileHomeBtn");
const mobileSubMenu = document.getElementById("mobileSubMenu");
const mobileChevron = document.getElementById("mobileChevron");

let isMenuOpen = false;

toggle.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  toggle.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = isMenuOpen ? "hidden" : "";
});

mobileHomeBtn.addEventListener("click", () => {
  mobileSubMenu.classList.toggle("open");
  mobileChevron.classList.toggle("rotated");
});

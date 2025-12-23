gsap.registerPlugin(ScrollTrigger);

// Entrance Animation Logic
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer",
    start: "top 85%",
    toggleActions: "play none none none",
  },
});

tl.to("#logo", { opacity: 1, y: 0, duration: 1, ease: "power4.out" })
  .to("#motto", { opacity: 1, duration: 1 }, "-=0.7")
  .to(".stk-label", { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 }, "-=0.8")
  .to(".stk-link", { opacity: 1, y: 0, stagger: 0.05, duration: 0.6 }, "-=0.8")
  .to(
    ".stk-news-item",
    { opacity: 1, x: 0, stagger: 0.1, duration: 0.8 },
    "-=0.8"
  )
  .to("#newsletter", { opacity: 1, scale: 1, duration: 0.8 }, "-=0.5")
  .to(
    ".stk-icon",
    { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 },
    "-=0.5"
  );

// Subtle Glow Drift
gsap.to("#glow", {
  x: "20%",
  y: "10%",
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Interactive Button Feedback
document.querySelector(".stk-btn").addEventListener("click", function () {
  const email = document.querySelector(".stk-input").value;

  if (email) {
    // Redirects the user to the 404 page
    window.location.href = "/404.html";
  } else {
    alert("Please enter an email address.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileHomeToggle = document.getElementById("mobileHomeToggle");
  const mobileSubMenu = document.getElementById("mobileSubMenu");

  // 1. Cinematic Entry
  setTimeout(() => {
    nav.classList.add("reveal");
  }, 300);

  // 2. Scroll Handler
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // 3. Desktop 3D Tilt
  const desktopLinks = document.querySelectorAll(".menu-items .nav-link");
  desktopLinks.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / 5;
      const tiltY = (centerX - x) / 5;
      item.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = `none`;
    });
  });

  // 4. Mobile Toggle logic
  mobileToggle.addEventListener("click", () => {
    const isActive = mobileToggle.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
    document.body.style.overflow = isActive ? "hidden" : "auto";

    // Reset submenu if closing
    if (!isActive) {
      mobileSubMenu.classList.remove("active");
      mobileHomeToggle.classList.remove("open");
    }
  });

  // 5. Mobile Dropdown Logic
  mobileHomeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    mobileHomeToggle.classList.toggle("open");
    mobileSubMenu.classList.toggle("active");

    // Color accent change when open
    mobileHomeToggle.style.color = mobileSubMenu.classList.contains("active")
      ? "var(--accent-indigo)"
      : "var(--text-silver)";
  });

  // Close on link click (except the toggle itself)
  const closeLinks = document.querySelectorAll(
    ".mobile-link:not(#mobileHomeToggle), .mobile-sub-link"
  );
  closeLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileToggle.classList.remove("active");
      mobileOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("mainFooter");
  // const newsletter = document.getElementById("newsletter");
  // const subMsg = document.getElementById("subMsg");

  // 1. Cinematic Scroll Observer
  const observerOptions = {
    threshold: 0.15,
  };

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footer.classList.add("visible");
      }
    });
  }, observerOptions);

  footerObserver.observe(footer);

  // 2. 3D Depth & Cursor Reactive Micro-Tilt (Desktop)
  const footerItems = document.querySelectorAll(".footer-item");

  footerItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (centerY - y) / 15;
      const tiltY = (x - centerX) / 15;

      item.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateZ(0)`;
    });
  });

  // 3. Newsletter Logic
  // newsletter.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const btn = newsletter.querySelector(".subscribe-btn");
  //   const input = newsletter.querySelector(".email-input");

  //   btn.innerHTML = "Verifying...";
  //   btn.disabled = true;

  //   setTimeout(() => {
  //     btn.style.background = "#059669";
  //     btn.innerHTML = "Success";
  //     subMsg.style.opacity = "1";
  //     input.value = "";
  //   }, 1500);
  // });

  // 4. Parallax Background Shift
  window.addEventListener("scroll", () => {
    const scrollPos = window.pageYOffset;
    const footerTop = footer.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPos > footerTop - windowHeight) {
      const yOffset = (scrollPos - footerTop) * 0.1;
      document.querySelector(
        ".footer-glow"
      ).style.transform = `translateX(-50%) translateY(${yOffset}px)`;
    }
  });
});

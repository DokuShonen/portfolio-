(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover)").matches;
  const projectsSection = document.getElementById("projects");
  if (projectsSection && finePointer && !reduceMotion) {
    const lamp = document.createElement("div");
    lamp.className = "projects-lamp";
    projectsSection.style.position = "relative";
    projectsSection.appendChild(lamp);
    let lx = 0, ly = 0, tx = 0, ty = 0, rafId = null;
    const loop = () => {
      lx += (tx - lx) * 0.08;
      ly += (ty - ly) * 0.08;
      lamp.style.transform = `translate(${lx}px, ${ly}px)`;
      if (Math.abs(tx - lx) > 0.5 || Math.abs(ty - ly) > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else { rafId = null; }
    };
    projectsSection.addEventListener("pointermove", (e) => {
      const r = projectsSection.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
  }
  const heroGrid = document.querySelector(".hero-bg-grid");
  if (heroGrid && !reduceMotion) {
    let tickingG = false;
    const drive = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = Math.min(1, window.scrollY / max); // 0 -> 1 sur toute la page
      const travel = p * 900; // px de sol défilés
      heroGrid.style.setProperty("--grid-travel", `${travel.toFixed(1)}px`);
      heroGrid.style.setProperty("--sun-shift", `${(p * 260).toFixed(1)}px`);
      heroGrid.style.setProperty("--sun-fade", `${Math.max(0, Math.min(1, 1.25 - p)).toFixed(2)}`);
      heroGrid.style.setProperty("--grid-opacity", `${Math.max(0.55, 1 - p * 0.45).toFixed(2)}`);
      tickingG = false;
    };
    window.addEventListener("scroll", () => {
      if (!tickingG) { requestAnimationFrame(drive); tickingG = true; }
    }, { passive: true });
    window.addEventListener("resize", () => { if (!tickingG) { requestAnimationFrame(drive); tickingG = true; } });
    drive();
  }
  const formWrapper = document.querySelector(".contact-form-wrapper");
  if (formWrapper && finePointer && !reduceMotion) {
    const glow = document.createElement("div");
    glow.className = "form-aura";
    formWrapper.prepend(glow);
    let gx = 50, gy = 50;
    formWrapper.addEventListener("pointermove", (e) => {
      const r = formWrapper.getBoundingClientRect();
      gx = ((e.clientX - r.left) / r.width) * 100;
      gy = ((e.clientY - r.top) / r.height) * 100;
      glow.style.background =
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(0,255,136,0.10), transparent 55%)`;
    });
    formWrapper.addEventListener("pointerleave", () => { glow.style.background = ""; });
  }
})();
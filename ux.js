(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sessionStorage.getItem("boot-seen")) {
    const style = document.createElement("style");
    style.textContent =
      ".boot-screen{display:none!important}body.booting>*:not(.boot-screen){visibility:visible!important}";
    document.head.appendChild(style);
    const killBoot = () => {
      const b = document.querySelector(".boot-screen");
      if (b) { b.remove(); document.body.classList.remove("booting"); }
      else setTimeout(killBoot, 30);
    };
    killBoot();
  } else {
    sessionStorage.setItem("boot-seen", "1");
  }
  const isEN = document.documentElement.lang.toLowerCase().startsWith('en');
  const SECTIONS = isEN ? [
    { label: "Home",          hint: "#hero",       kw: "home hero start index accueil" },
    { label: "About",         hint: "#about",      kw: "about qui suis je formation education" },
    { label: "Background",    hint: "#experience", kw: "background experience education work parcours" },
    { label: "Skills",        hint: "#skills",     kw: "skills technos stack langages technologies" },
    { label: "Projects",      hint: "#projects",   kw: "projects work portfolio projets réalisations" },
    { label: "Maquis Manager", hint: "#projects",  kw: "django python featured stock" },
    { label: "Résumé (FR)",   hint: "https://kinda-cv.vercel.app/", kw: "cv resume français pdf parcours", ext: true },
    { label: "Résumé (EN)",   hint: "https://cveng.vercel.app/", kw: "cv resume english pdf", ext: true },
    { label: "Contact",       hint: "#contact",    kw: "contact email message hire" },
    { label: "GitHub",        hint: "https://github.com/DokuShonen", kw: "github code repos", ext: true },
    { label: "LinkedIn",      hint: "https://www.linkedin.com/in/ulrich-kinda-0766b6289", kw: "linkedin network professional", ext: true },
  ] : [
    { label: "Accueil",        hint: "#hero",       kw: "home hero accueil start" },
    { label: "À propos",       hint: "#about",      kw: "about qui suis je formation" },
    { label: "Parcours",       hint: "#experience", kw: "parcours expérience stage formation diplôme" },
    { label: "Compétences",    hint: "#skills",     kw: "skills technos stack langages" },
    { label: "Projets",        hint: "#projects",   kw: "projets réalisations portfolio work" },
    { label: "Maquis Manager", hint: "#projects",   kw: "django python featured stock" },
    { label: "CV Français",    hint: "https://kinda-cv.vercel.app/", kw: "cv resume français pdf parcours", ext: true },
    { label: "CV English",     hint: "https://cveng.vercel.app/", kw: "cv resume english pdf" , ext: true },
    { label: "Contact",        hint: "#contact",    kw: "contact email message hire" },
    { label: "GitHub",         hint: "https://github.com/DokuShonen", kw: "github code repos", ext: true },
    { label: "LinkedIn",       hint: "https://www.linkedin.com/in/ulrich-kinda-0766b6289", kw: "linkedin réseau pro", ext: true },
  ];
  const TXT = isEN ? {
    placeholder: "Type a command... (help: ?)",
    empty: "// no results",
    footer: "↑↓ navigate · enter open · esc close",
    hint: 'Quick navigation <kbd>Ctrl</kbd>+<kbd>K</kbd>',
    top: "Back to top",
    errors: {
      name: "Error: name too short (min. 2 characters)",
      email: "Error: invalid email address",
      message: "Error: message too short (min. 10 characters)"
    }
  } : {
    placeholder: "Tapez une commande... (aide: ?)",
    empty: "// aucun résultat",
    footer: "↑↓ naviguer · entrée ouvrir · esc fermer",
    hint: 'Navigation rapide <kbd>Ctrl</kbd>+<kbd>K</kbd>',
    top: "Retour en haut",
    errors: {
      name: "Erreur : nom trop court (min. 2 caractères)",
      email: "Erreur : adresse email invalide",
      message: "Erreur : message trop court (min. 10 caractères)"
    }
  };
  const palette = document.createElement("div");
  palette.className = "cmd-palette";
  palette.hidden = true;
  palette.innerHTML = `
    <div class="cmd-box" role="dialog" aria-label="${isEN ? "Quick navigation" : "Navigation rapide"}">
      <div class="cmd-input-row">
        <span class="cmd-chevron">❯</span>
        <input type="text" class="cmd-input" placeholder="${TXT.placeholder}" autocomplete="off" spellcheck="false">
        <kbd class="cmd-kbd">esc</kbd>
      </div>
      <ul class="cmd-results" role="listbox"></ul>
      <div class="cmd-footer">${TXT.footer}</div>
    </div>
  `;
  document.body.appendChild(palette);
  const input = palette.querySelector(".cmd-input");
  const listEl = palette.querySelector(".cmd-results");
  let results = [];
  let selected = 0;
  const renderResults = () => {
    listEl.innerHTML = "";
    if (!results.length) {
      const li = document.createElement("li");
      li.className = "cmd-empty";
      li.textContent = TXT.empty;
      listEl.appendChild(li);
      return;
    }
    results.forEach((r, i) => {
      const li = document.createElement("li");
      li.className = "cmd-item" + (i === selected ? " selected" : "");
      li.setAttribute("role", "option");
      li.innerHTML = `
        <span class="cmd-cmd">${r.ext ? "curl" : "cd"} ${r.label.toLowerCase().replace(/\s+/g, "-")}</span>
        <span class="cmd-hint">${r.hint}</span>`;
      li.addEventListener("click", () => go(r));
      li.addEventListener("pointermove", () => { selected = i; renderResults(); });
      listEl.appendChild(li);
    });
  };
  const filter = () => {
    let q = input.value.trim().toLowerCase();
    // Commandes shell acceptées : on ignore le verbe et on cherche l'argument
    const m = q.match(/^(cd|curl|ls|open|cat)\s+(.*)$/);
    if (m) q = m[2].trim();
    // Verbe seul ("cd", "ls"...) : tout afficher
    if (!q || q === "?" || /^(cd|curl|ls|open|cat)$/.test(input.value.trim().toLowerCase())) {
      results = SECTIONS.slice();
    } else {
      results = SECTIONS.filter((s) =>
        s.label.toLowerCase().includes(q) ||
        s.kw.includes(q) ||
        s.hint.toLowerCase().includes(q));
    }
    selected = 0;
    renderResults();
  };
  const go = (r) => {
    closePalette();
    if (r.ext) window.open(r.hint, "_blank");
    else {
      const el = document.querySelector(r.hint);
      if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
  };
  const openPalette = () => {
    palette.hidden = false;
    input.value = "";
    filter();
    requestAnimationFrame(() => input.focus());
  };
  const closePalette = () => { palette.hidden = true; };
  palette.addEventListener("pointerdown", (e) => { if (e.target === palette) closePalette(); });
  input.addEventListener("input", filter);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); selected = Math.min(selected + 1, results.length - 1); renderResults(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); selected = Math.max(selected - 1, 0); renderResults(); }
    else if (e.key === "Enter" && results[selected]) { go(results[selected]); }
    else if (e.key === "Escape") { closePalette(); }
  });
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      palette.hidden ? openPalette() : closePalette();
    }
  });
  const progress = document.createElement("div");
  progress.className = "ux-scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);
  const topBtn = document.createElement("button");
  topBtn.className = "ux-top-btn magnetic";
  topBtn.type = "button";
  topBtn.setAttribute("aria-label", TXT.top);
  topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  topBtn.hidden = true;
  document.body.appendChild(topBtn);
  topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  let ticking = false;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${ratio})`;
    topBtn.hidden = window.scrollY < 600;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();
  const form = document.getElementById("contactForm");
  if (form) {
    const fields = [
      { id: "name",    test: (v) => v.trim().length >= 2,  msg: TXT.errors.name },
      { id: "email",   test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: TXT.errors.email },
      { id: "message", test: (v) => v.trim().length >= 10, msg: TXT.errors.message },
    ];
    fields.forEach(({ id, test, msg }) => {
      const field = document.getElementById(id);
      if (!field) return;
      const group = field.closest(".form-group");
      const err = document.createElement("span");
      err.className = "form-error";
      err.textContent = "$ " + msg;
      group.appendChild(err);
      const validate = () => {
        const ok = test(field.value);
        group.classList.toggle("has-error", !ok && field.value.length > 0);
        group.classList.toggle("is-valid", ok);
        return ok;
      };
      field.addEventListener("blur", validate);
      field.addEventListener("input", () => {
        if (group.classList.contains("has-error") || group.classList.contains("is-valid")) validate();
      });
    });
  }
  const heroButtons = document.querySelector(".hero-buttons");
  if (heroButtons && !document.getElementById("cmdHint")) {
    const hint = document.createElement("button");
    hint.id = "cmdHint";
    hint.type = "button";
    hint.className = "cmd-hint-btn";
    hint.innerHTML = TXT.hint;
    hint.addEventListener("click", openPalette);
    heroButtons.after(hint);
  }
})();
/* ---------- Uptime live dans le footer ---------- */
(() => {
  const el = document.querySelector("[data-fs-uptime]");
  if (!el) return;
  const t0 = Date.now();
  const fmt = () => {
    const s = Math.floor((Date.now() - t0) / 1000);
    const m = Math.floor(s / 60), hh = Math.floor(m / 60);
    return "uptime: " + (hh > 0 ? hh + "h " : "") + (m % 60) + "m " + (s % 60) + "s";
  };
  const tick = () => { el.textContent = fmt(); };
  tick();
  setInterval(tick, 1000);
})();

/* ---------- Horloge du panneau (header) ---------- */
(() => {
  const el = document.querySelector(".panel-clock [data-clock]");
  if (!el) return;
  const tick = () => {
    const d = new Date();
    el.textContent =
      String(d.getHours()).padStart(2, "0") + ":" +
      String(d.getMinutes()).padStart(2, "0");
  };
  tick();
  setInterval(tick, 5000);
})();

(() => {
  "use strict";

  const grid = document.getElementById("skillsTiles");
  if (!grid || grid.dataset.tilesReady) return;
  grid.dataset.tilesReady = "1";

  const isEN = document.documentElement.lang.toLowerCase().startsWith("en");

  /* ---------------------------------------------------------------
     Données : name / nom EN optionnel / catégorie / niveau (1-5) / icône
     Niveaux dérivés des anciennes jauges (>=90 => 5, >=80 => 4, >=75 => 3, >=70 => 2)
  --------------------------------------------------------------- */
  const SKILLS = [
    // Frontend
    { name: "HTML5 / CSS3",          cat: "frontend", level: 5, icon: "fab fa-html5" },
    { name: "JavaScript / TypeScript", cat: "frontend", level: 4, icon: "fab fa-js" },
    { name: "React / Angular",       cat: "frontend", level: 4, icon: "fab fa-react" },
    // Backend
    { name: "Python",                cat: "backend",  level: 5, icon: "fab fa-python" },
    { name: "Java / Spring Boot",    cat: "backend",  level: 4, icon: "fab fa-java" },
    { name: "FastAPI",               cat: "backend",  level: 4, icon: "fas fa-bolt" },
    { name: "API REST",              cat: "backend",  level: 4, icon: "fas fa-plug" },
    // IA & Data
    { name: "PyTorch / NLLB-200",    cat: "ia",       level: 4, icon: "fas fa-brain" },
    { name: "NLP / TALN",            cat: "ia",       level: 3, icon: "fas fa-language" },
    { name: "LoRA / PEFT",           cat: "ia",       level: 3, icon: "fas fa-sliders-h" },
    { name: "Pandas / Data Eng.",    cat: "ia",       level: 4, icon: "fas fa-table", nameEn: "Pandas / Data Eng." },
    // Mobile
    { name: "React Native",          cat: "mobile",   level: 4, icon: "fab fa-react" },
    { name: "Expo / Expo Router",    cat: "mobile",   level: 3, icon: "fas fa-cube" },
    { name: "Zustand",               cat: "mobile",   level: 3, icon: "fas fa-database" },
    { name: "Reanimated",            cat: "mobile",   level: 2, icon: "fas fa-wave-square" },
    { name: "Gesture Handler",       cat: "mobile",   level: 2, icon: "fas fa-hand-paper" },
    // Bases de données
    { name: "PostgreSQL",            cat: "bdd",      level: 4, icon: "fas fa-database" },
    { name: "MySQL / MariaDB",       cat: "bdd",      level: 4, icon: "fas fa-database" },
    { name: "Supabase",              cat: "bdd",      level: 3, icon: "fas fa-cloud" },
    { name: "Access / VBA",          cat: "bdd",      level: 3, icon: "fas fa-table" },
    // Systèmes & Outils
    { name: "Git / GitHub",          cat: "sys",      level: 5, icon: "fab fa-github" },
    { name: "Linux / Debian",        cat: "sys",      level: 4, icon: "fab fa-linux" },
    { name: "Windows",               cat: "sys",      level: 4, icon: "fab fa-windows" },
    { name: "Administration systèmes", cat: "sys",    level: 4, icon: "fas fa-server", nameEn: "Systems administration" },
    { name: "Maintenance informatique", cat: "sys",   level: 4, icon: "fas fa-tools", nameEn: "IT maintenance" },
    { name: "Dépannage",             cat: "sys",      level: 4, icon: "fas fa-bug", nameEn: "Troubleshooting" },
    // Bureautique
    { name: "Word",                  cat: "office",   level: 4, icon: "fas fa-file-word" },
    { name: "Excel",                 cat: "office",   level: 4, icon: "fas fa-file-excel" },
    { name: "PowerPoint",            cat: "office",   level: 3, icon: "fas fa-file-powerpoint" }
  ];

  /* Compteur « Technologies » de l'accueil : aligné automatiquement sur les données */
  document.querySelectorAll(".stat-item").forEach((item) => {
    const label = item.querySelector(".stat-label");
    const num = item.querySelector(".stat-number");
    if (label && num && /^technolog/i.test(label.textContent.trim())) {
      num.dataset.count = String(SKILLS.length);
    }
  });

  const FILTERS = [
    { key: "all",      label: "ls ./",            hint: isEN ? "All" : "Tous" },
    { key: "frontend", label: "grep frontend",    hint: "Frontend" },
    { key: "backend",  label: "grep backend",     hint: "Backend" },
    { key: "mobile",   label: "grep mobile",      hint: "Mobile" },
    { key: "ia",       label: "grep ia",          hint: isEN ? "AI / Data" : "IA / Data" },
    { key: "bdd",      label: "grep sql",         hint: isEN ? "Databases" : "Bases de données" },
    { key: "sys",      label: "grep sys",         hint: isEN ? "Systems & tools" : "Systèmes & outils" },
    { key: "office",   label: isEN ? "grep office" : "grep bureautique", hint: isEN ? "Office" : "Bureautique" }
  ];

  const LEVELS = [
    { level: 1, label: isEN ? "Beginner" : "Débutant" },
    { level: 2, label: isEN ? "Elementary" : "Élémentaire" },
    { level: 3, label: isEN ? "Intermediate" : "Intermédiaire" },
    { level: 4, label: isEN ? "Advanced" : "Avancé" },
    { level: 5, label: isEN ? "Expert" : "Expert" }
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DEFAULT_SKILL = "JavaScript / TypeScript";

  /* ---------------- Barre de filtres (même style que filters.js) ---------------- */
  const bar = document.createElement("div");
  bar.className = "proj-filters skills-filters";
  bar.setAttribute("role", "tablist");
  bar.setAttribute("aria-label", isEN ? "Filter skills" : "Filtrer les compétences");
  bar.innerHTML = FILTERS.map((f, i) => `
    <button type="button" class="filter-btn${i === 0 ? " active" : ""}"
            data-filter="${f.key}" role="tab"
            aria-selected="${i === 0}" title="${f.hint}">${f.label}</button>
  `).join("");
  const count = document.createElement("span");
  count.className = "filter-count";
  count.textContent = isEN
    ? `${SKILLS.length} items`
    : `${SKILLS.length} éléments`;
  bar.appendChild(count);
  grid.before(bar);

  /* ---------------- Grille de tuiles ---------------- */
  const dots = (level) => [1, 2, 3, 4, 5]
    .map((n) => `<i class="dot lvl-${level}${n <= level ? " on" : ""}"></i>`)
    .join("");

  grid.innerHTML = SKILLS.map((s, i) => {
    const label = (isEN && s.nameEn) ? s.nameEn : s.name;
    const selected = s.name === DEFAULT_SKILL;
    return `
    <button type="button" class="skill-tile${selected ? " is-selected" : ""}"
            data-cat="${s.cat}" data-name="${s.name}"
            aria-pressed="${selected}"
            style="--d: ${reduceMotion ? 0 : (i % 12) * 0.03}s"
            title="${label} — ${isEN ? "Level" : "Niveau"} ${s.level}/5">
      <span class="skill-tile-icon"><i class="${s.icon}"></i></span>
      <span class="skill-tile-name">${label}</span>
      <span class="skill-dots" aria-hidden="true">${dots(s.level)}</span>
    </button>`;
  }).join("");

  const tiles = Array.from(grid.querySelectorAll(".skill-tile"));

  /* ---------------- Légende des niveaux ---------------- */
  const legend = document.createElement("div");
  legend.className = "skills-legend";
  legend.innerHTML = LEVELS.map((l) =>
    `<span><i class="dot lvl-${l.level} on"></i>${l.label}</span>`
  ).join("");
  grid.after(legend);

  /* ---------------- Filtrage ---------------- */
  const applyFilter = (key) => {
    let shown = 0;
    tiles.forEach((tile) => {
      const match = key === "all" || tile.dataset.cat === key;
      tile.classList.toggle("filter-hide", !match);
      if (match) shown++;
      if (match && !reduceMotion) {
        // relance la cascade d'entrée
        tile.style.animation = "none";
        void tile.offsetWidth;
        tile.style.animation = "";
      }
    });
    count.textContent = isEN
      ? `${shown} item${shown > 1 ? "s" : ""}`
      : `${shown} élément${shown > 1 ? "s" : ""}`;
    bar.querySelectorAll(".filter-btn").forEach((b) => {
      const on = b.dataset.filter === key;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    count.dataset.flash = "1";
    setTimeout(() => delete count.dataset.flash, 400);
  };

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (btn) applyFilter(btn.dataset.filter);
  });

  /* ---------------- Sélection d'une tuile ---------------- */
  grid.addEventListener("click", (e) => {
    const tile = e.target.closest(".skill-tile");
    if (!tile) return;
    tiles.forEach((t) => {
      const on = t === tile;
      t.classList.toggle("is-selected", on);
      t.setAttribute("aria-pressed", on);
    });
  });
})();

(() => {
  "use strict";
  const grid = document.querySelector(".projects-grid");
  const section = document.getElementById("projects");
  if (!grid || !section || grid.dataset.filters) return;
  grid.dataset.filters = "1";
  const cards = Array.from(grid.querySelectorAll(".project-card"));
  if (!cards.length) return;
  // Catégorie : attribut explicite si présent, sinon déduction depuis le badge.
  const catKey = (txt) => {
    const t = txt.toLowerCase();
    if (t.includes("full")) return "fullstack";
    if (t.includes("front")) return "frontend";
    if (t.includes("mobile")) return "mobile";
    if (t.includes("ia")) return "ia";
    return "other";
  };
  cards.forEach((card) => {
    const badge = card.querySelector(".project-category");
    const fromBadge = badge ? badge.textContent.trim().toLowerCase() : "";
    if (card.dataset.category) {
      const c = card.dataset.category;
      card.dataset.cat = c === "full-stack" ? "fullstack"
        : c === "front-end" ? "frontend" : c;
    } else {
      card.dataset.cat = badge ? catKey(badge.textContent) : "other";
    }
    // « Mis en avant » est un marqueur indépendant de la catégorie.
    card.dataset.featured = card.dataset.featured === "true"
      || fromBadge.includes("featured") ? "true" : "false";
  });
  const isEN = document.documentElement.lang.toLowerCase().startsWith('en');
  const bar = document.createElement("div");
  bar.className = "proj-filters";
  bar.setAttribute("role", "tablist");
  bar.setAttribute("aria-label", isEN ? "Filter projects" : "Filtrer les projets");
  const FILTERS = [
    { key: "all",       label: "ls ./",              hint: isEN ? "All" : "Tous" },
    { key: "featured",  label: "./featured",         hint: isEN ? "Featured" : "Mis en avant" },
    { key: "fullstack", label: "grep full-stack",    hint: "Full-Stack" },
    { key: "ia",        label: "grep ia",            hint: isEN ? "AI / NLP" : "IA / NLP" },
    { key: "mobile",    label: "grep mobile",        hint: "Mobile" },
    { key: "frontend",  label: "grep front-end",     hint: "Front-End" },
  ];
  bar.innerHTML = FILTERS.map((f, i) => `
    <button type="button" class="filter-btn${i === 0 ? " active" : ""}"
            data-filter="${f.key}" role="tab"
            aria-selected="${i === 0}" title="${f.hint}">${f.label}</button>
  `).join("");
  grid.before(bar);
  const count = document.createElement("span");
  count.className = "filter-count";
  count.textContent = isEN
    ? `${cards.length} items`
    : `${cards.length} éléments`;
  bar.appendChild(count);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const applyFilter = (key) => {
    let shown = 0;
    cards.forEach((card) => {
      const match = key === "all"
        || (key === "featured"
          ? card.dataset.featured === "true"
          : card.dataset.cat === key);
      card.classList.toggle("filter-hide", !match);
      if (match) shown++;
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
})();
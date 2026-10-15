(() => {
  "use strict";
  const grid = document.querySelector(".projects-grid");
  const section = document.getElementById("projects");
  if (!grid || !section || grid.dataset.filters) return;
  grid.dataset.filters = "1";
  const cards = Array.from(grid.querySelectorAll(".project-card"));
  if (!cards.length) return;
  const catKey = (txt) => {
    const t = txt.toLowerCase();
    if (t.includes("featured")) return "featured";
    if (t.includes("full")) return "fullstack";
    if (t.includes("front")) return "frontend";
    return "other";
  };
  cards.forEach((card) => {
    const badge = card.querySelector(".project-category");
    card.dataset.cat = badge ? catKey(badge.textContent) : "other";
  });
  const bar = document.createElement("div");
  bar.className = "proj-filters";
  bar.setAttribute("role", "tablist");
  bar.setAttribute("aria-label", "Filtrer les projets");
  const FILTERS = [
    { key: "all",       label: "ls ./",              hint: "Tous" },
    { key: "featured",  label: "./featured",          hint: "Mis en avant" },
    { key: "fullstack", label: "grep full-stack",     hint: "Full-Stack" },
    { key: "frontend",  label: "grep front-end",      hint: "Front-End" },
  ];
  bar.innerHTML = FILTERS.map((f, i) => `
    <button type="button" class="filter-btn${i === 0 ? " active" : ""}"
            data-filter="${f.key}" role="tab"
            aria-selected="${i === 0}" title="${f.hint}">${f.label}</button>
  `).join("");
  grid.before(bar);
  const count = document.createElement("span");
  count.className = "filter-count";
  count.textContent = `${cards.length} éléments`;
  bar.appendChild(count);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const applyFilter = (key) => {
    let shown = 0;
    cards.forEach((card) => {
      const match = key === "all" || card.dataset.cat === key;
      card.classList.toggle("filter-hide", !match);
      if (match) shown++;
    });
    count.textContent = `${shown} élément${shown > 1 ? "s" : ""}`;
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
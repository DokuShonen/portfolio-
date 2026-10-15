(() => {
  "use strict";
  const grid = document.getElementById("githubGrid");
  if (!grid) return;
  const USER = "DokuShonen";
  const PINNED_ORDER = ["manabar_web", "archiburkina", "fasoluxe", "alpha", "immo", "fariflore", "TaskBoard", "cvFR"];
  const LANG_COLORS = {
    PHP: "#a071c9", HTML: "#e44c23", CSS: "#563d7c", TypeScript: "#3178c6",
    Python: "#3572A5", Java: "#b07219", C: "#555555", JavaScript: "#f1e05a",
    Shell: "#89e051", Hack: "#878787",
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cardHTML = (r) => `
    <article class="gh-card reveal-up">
      <div class="gh-card-head">
        <i class="fas fa-code-branch"></i>
        <a href="${esc(r.html_url)}" target="_blank" rel="noopener noreferrer" class="gh-name">${esc(r.name)}</a>
      </div>
      <p class="gh-desc">${esc(r.description || "// pas de description")}</p>
      <div class="gh-meta">
        ${r.language ? `<span class="gh-lang"><span class="dot" style="--lc:${LANG_COLORS[r.language] || "#8b949e"}"></span>${esc(r.language)}</span>` : ""}
        <span class="gh-stat"><i class="far fa-star"></i> ${r.stargazers_count}</span>
        <span class="gh-stat"><i class="fas fa-code-fork"></i> ${r.forks_count}</span>
        <time class="gh-date" datetime="${esc(r.updated_at)}">maj ${new Date(r.updated_at).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}</time>
      </div>
    </article>`;
  const render = (repos) => {
    const byName = new Map(repos.map((r) => [r.name.toLowerCase(), r]));
    const sorted = [];
    for (const name of PINNED_ORDER) {
      const r = byName.get(name.toLowerCase());
      if (r && !r.fork) { sorted.push(r); byName.delete(name.toLowerCase()); }
    }
    for (const r of repos) {
      if (!r.fork && byName.has(r.name.toLowerCase())) sorted.push(r);
    }
    grid.innerHTML = sorted.slice(0, 8).map(cardHTML).join("");
    grid.querySelectorAll(".reveal-up").forEach((el) => el.classList.add("revealed"));
  };
  const fallback = () => {
    grid.innerHTML = `
      <div class="gh-error">
        <p>// flux GitHub momentanément indisponible — quota API ou réseau</p>
        <a href="https://github.com/DokuShonen" target="_blank" rel="noopener noreferrer">
          Ouvrir github.com/DokuShonen directement <i class="fas fa-arrow-right"></i></a>
      </div>`;
  };
  const CACHE_KEY = "gh-repos-cache";
  const CACHE_TTL = 60 * 60 * 1000; // 1 h : évite de saturer le quota API

  const load = () => {
    // 1. Cache frais ?
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (cached && Date.now() - cached.t < CACHE_TTL && Array.isArray(cached.d)) {
        render(cached.d);
        return;
      }
    } catch (_) { /* cache corrompu : on ignore */ }

    // 2. Sinon, appel réseau avec un retry
    const attempt = (n) => {
      fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`)
        .then((res) => {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then((repos) => {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d: repos }));
          } catch (_) { /* quota localStorage */ }
          render(repos);
        })
        .catch(() => {
          if (n > 0) return setTimeout(() => attempt(n - 1), 1500);
          // 3. Dernier recours : cache périmé vaut mieux que rien
          try {
            const stale = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
            if (stale && Array.isArray(stale.d)) { render(stale.d); return; }
          } catch (_) {}
          fallback();
        });
    };
    attempt(2);
  };

  load();
})();
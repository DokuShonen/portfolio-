(() => {
  "use strict";

  /* L'en-tête $ apt show dépend du titre injecté par project-details.js,
     qui s'exécute sur DOMContentLoaded : on doit donc attendre la même étape,
     sinon on lit encore le texte statique du HTML. */
  const buildAptHeader = () => {
    const infoCard = document.querySelector(".project-info-card");
    if (!infoCard || infoCard.querySelector(".apt-header")) return;
    const title = document.getElementById("project-title")?.textContent || "projet";
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const header = document.createElement("div");
    header.className = "apt-header";
    header.innerHTML = `
      <div class="apt-line"><span class="apt-cmd">$ apt show ${slug}</span></div>
      <div class="apt-meta">
        <span><b>Package:</b> ${slug}</span>
        <span><b>Status:</b> <i class="ok">install ok installed</i></span>
        <span><b>Maintainer:</b> Ulrich WENDSONGDE</span>
      </div>
    `;
    infoCard.prepend(header);
  };

  const buildManPage = () => {
    const footerInfo = document.querySelector(".footer-info");
    if (!footerInfo || document.querySelector(".man-page")) return;
    footerInfo.classList.add("man-page");
    footerInfo.insertAdjacentHTML("afterbegin", `
      <div class="man-head" aria-hidden="true">
        ULRICH(1) &nbsp; User Commands &nbsp; ULRICH(1)
      </div>
    `);
  };

  const run = () => { buildAptHeader(); buildManPage(); };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();

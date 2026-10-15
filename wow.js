(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const infoCard = document.querySelector(".project-info-card");
  if (infoCard && !infoCard.querySelector(".apt-header")) {
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
  }
  const footerInfo = document.querySelector(".footer-info");
  if (footerInfo && !document.querySelector(".man-page")) {
    footerInfo.classList.add("man-page");
    footerInfo.insertAdjacentHTML("afterbegin", `
      <div class="man-head" aria-hidden="true">
        ULRICH(1) &nbsp; User Commands &nbsp; ULRICH(1)
      </div>
    `);
  }
})();
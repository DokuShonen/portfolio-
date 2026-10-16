(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const aboutGrid = document.querySelector(".about-grid");
  if (aboutGrid && !document.querySelector(".neofetch-card")) {
    const bootTime = Date.now();
    const uptime = () => {
      const s = Math.floor((Date.now() - bootTime) / 1000);
      return `${Math.floor(s / 60)} min ${s % 60} sec`;
    };
    const card = document.createElement("div");
    card.className = "neofetch-card reveal-up";
    card.innerHTML = `
      <div class="neofetch-head">
        <span class="nf-user">ulrich@portfolio</span>:<span class="nf-path">~</span>$ neofetch
      </div>
      <div class="neofetch-body">
        <pre class="nf-logo" aria-hidden="true">        ##########
      ############
     ###&lt;UW/&gt;######
    ##############
    ###############
     #############
      ###########
     ##         ##
    ##   ~ ~    ##
    ##   ▽▽▽    ##
     ##  ___   ##
      ##########</pre>
        <dl class="nf-info">
          <dt><b>OS</b></dt><dd>Ulrich OS 3.1 LTS x86_64</dd>
          <dt><b>Host</b></dt><dd>Université Aube Nouvelle</dd>
          <dt><b>Kernel</b></dt><dd>6.9.0-passion-genie</dd>
          <dt><b>Shell</b></dt><dd>zsh 5.9 + oh-my-zsh</dd>
          <dt><b>DE</b></dt><dd>PortfolioWM (web)</dd>
          <dt><b>Terminal</b></dt><dd>kitty</dd>
          <dt><b>CPU</b></dt><dd>PassionCore i7-GENIE (8) @ 4.2GHz</dd>
          <dt><b>Memory</b></dt><dd>6144MiB / 32768MiB</dd>
          <dt><b>Uptime</b></dt><dd data-uptime>...</dd>
        </dl>
      </div>
      <div class="nf-colors" aria-hidden="true">
        <span style="--c:#0a0e17"></span><span style="--c:#ff7b72"></span>
        <span style="--c:#7ee787"></span><span style="--c:#f2cc60"></span>
        <span style="--c:#00bfff"></span><span style="--c:#d2a8ff"></span>
        <span style="--c:#00ff88"></span><span style="--c:#e6edf3"></span>
      </div>
    `;
    aboutGrid.after(card);
    /* script.js a collecté les éléments à animer avant cette insertion :
       on observe la carte ici pour qu'elle se révèle comme les autres. */
    if (reduceMotion) {
      card.classList.add("revealed");
    } else {
      const cardObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      cardObserver.observe(card);
    }
    const upEl = card.querySelector("[data-uptime]");
    if (!reduceMotion) {
      setInterval(() => { if (upEl.isConnected) upEl.textContent = uptime(); }, 1000);
    } else {
      upEl.textContent = uptime();
    }
  }
  /* Workspaces + horloge : désormais en dur dans le HTML */
})();
(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isEN = document.documentElement.lang.toLowerCase().startsWith('en');
  const boot = document.createElement("div");
  boot.className = "boot-screen";
  boot.setAttribute("role", "status");
  boot.setAttribute("aria-label", isEN ? "System booting" : "Démarrage du système");
  boot.innerHTML = `
    <pre class="boot-log" aria-hidden="true"></pre>
    <div class="boot-login" aria-hidden="true">
      <span class="boot-prompt">ulrich@portfolio</span>:<span class="boot-path">~</span>$ <span class="boot-cmd"></span><span class="boot-caret">▊</span>
    </div>
    <button class="boot-skip" type="button">${isEN ? "press any key to skip" : "appuyez sur une touche pour passer"}</button>
    <div class="boot-flicker" aria-hidden="true"></div>
  `;
  document.body.prepend(boot);
  const logEl = boot.querySelector(".boot-log");
  const cmdEl = boot.querySelector(".boot-cmd");
  const caretEl = boot.querySelector(".boot-caret");
  const BOOT_LINES = [
    { t: "GNU/Linux Portfolio 6.9-kinda x86_64", blank: true },
    { t: "[    0.000000] Booting ulrich-os v3.1 on x86_64" },
    { t: "[    0.041233] CPU: PassionCore(TM) i7-GENIE @ 4.2GHz" },
    { t: "[    0.102456] Memory: 32GB available (curiosite infinite)" },
    { t: "", blank: true },
    { t: "[  OK  ] Started Network Service", s: "ok" },
    { t: "[  OK  ] Mounted /competences/web (html, css, js)", s: "ok" },
    { t: "[  OK  ] Mounted /competences/backend (python, php, sql)", s: "ok" },
    { t: "[  OK  ] Mounted /competences/systemes (linux, git)", s: "ok" },
    { t: "[  OK  ] Reached target Base System", s: "ok" },
    { t: "         Starting passion.service..." },
    { t: "[  OK  ] Started passion.service", s: "ok" },
    { t: "         Starting creativity.engine..." },
    { t: "[  OK  ] Started creativity.engine", s: "ok" },
    { t: "         Starting portfolio.display..." },
    { t: "[  OK  ] Started portfolio.display", s: "ok" },
    { t: "" , blank: true },
    { t: "ulrich-os 3.1 tty1", blank: true },
    { t: "login: ulrich (automatic login)", blank: true },
  ];
  const FINAL_CMD = isEN ? "./open_portfolio --future" : "./ouvrir_portfolio --futur";
  let finished = false;
  let rafId = null;
  const finishBoot = () => {
    if (finished) return;
    finished = true;
    boot.classList.add("boot-done");
    setTimeout(() => {
      if (rafId) cancelAnimationFrame(rafId);
      boot.remove();
      document.body.classList.remove("booting");
      document.dispatchEvent(new CustomEvent("boot:done"));
    }, 750);
  };
  if (reduceMotion) {
    boot.remove();
    return;
  }
  document.body.classList.add("booting");
  let idx = 0;
  const nextLine = () => {
    if (finished) return;
    if (idx >= BOOT_LINES.length) {
      typeCommand();
      return;
    }
    const obj = BOOT_LINES[idx++];
    const row = document.createElement("span");
    row.className = "boot-row" + (obj.s === "ok" ? " ok" : "") + (obj.blank ? " blank" : "");
    row.innerHTML = obj.s === "ok"
      ? escapeHtml(obj.t).replace(/\[  OK  \]/, '<b>[  <i>OK</i>  ]</b>')
      : escapeHtml(obj.t);
    logEl.appendChild(row);
    rafId = requestAnimationFrame(() => setTimeout(nextLine, obj.s === "ok" ? 55 : 40));
  };
  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  const typeCommand = () => {
    let i = 0;
    caretEl.style.visibility = "";
    const tick = () => {
      i++;
      cmdEl.textContent = FINAL_CMD.slice(0, i);
      if (i < FINAL_CMD.length) {
        setTimeout(tick, 38);
      } else {
        setTimeout(executeCommand, 420);
      }
    };
    tick();
  };
  const executeCommand = () => {
    caretEl.style.animation = "none";
    boot.querySelector(".boot-login").classList.add("executing");
    finishBoot();
  };
  const skipBtn = boot.querySelector(".boot-skip");
  skipBtn.addEventListener("click", finishBoot);
  const onKey = () => finishBoot();
  window.addEventListener("keydown", onKey, { once: true });
  boot.addEventListener("pointerdown", finishBoot);
  nextLine();
})();
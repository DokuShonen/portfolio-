/* =========================================================
   Redirection vers la version mobile dédiée
   - uniquement sur petit écran + navigateur mobile
   - désactivable avec ?desktop=1 (mémorisé dans la session)
   ========================================================= */
(function () {
  "use strict";

  try {
    var params = new URLSearchParams(window.location.search);

    if (params.get("desktop") === "1") {
      try { sessionStorage.setItem("uw-desktop", "1"); } catch (e) {}
      return;
    }

    try {
      if (sessionStorage.getItem("uw-desktop") === "1") return;
    } catch (e) {}

    var smallScreen = window.matchMedia("(max-width: 820px)").matches;
    var mobileUA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
    if (!smallScreen || !mobileUA) return;

    var lang = (document.documentElement.lang || "").toLowerCase();
    var isEN = lang.indexOf("en") === 0;

    var map = {
      "#hero": "#accueil",
      "#about": "#apropos",
      "#skills": "#competences",
      "#experience": "#parcours",
      "#projects": "#projets",
      "#contact": "#contact"
    };
    var hash = map[window.location.hash] || "";

    window.location.replace((isEN ? "mobile-en.html" : "mobile.html") + hash);
  } catch (e) {}
})();

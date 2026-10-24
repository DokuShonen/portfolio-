/* =========================================================
   VERSION MOBILE DÉDIÉE - logique de la page
   ========================================================= */
(function () {
  "use strict";

  var isEN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  var T = {
    fr: {
      all: 'Tous',
      ia: 'IA',
      'full-stack': 'Full-stack',
      mobile: 'Mobile',
      'front-end': 'Front-end',
      featured: 'Featured',
      details: 'Voir les détails',
      year: '2026',
      level: 'Niveau'
    },
    en: {
      all: 'All',
      ia: 'AI',
      'full-stack': 'Full-stack',
      mobile: 'Mobile',
      'front-end': 'Front-end',
      featured: 'Featured',
      details: 'View details',
      year: '2026',
      level: 'Level'
    }
  }[isEN ? 'en' : 'fr'];

  /* ---------------------- Horloge ---------------------- */
  var clock = document.querySelector('[data-clock]');
  function tick() {
    if (!clock) return;
    var d = new Date();
    clock.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  tick();
  setInterval(tick, 30000);

  /* ------------------ Onglets actifs ------------------ */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab-item'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));

  function setActive(id) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-target') === id;
      t.classList.toggle('active', on);
      if (on) t.setAttribute('aria-current', 'page');
      else t.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var tab = entry.target.getAttribute('data-tab');
        if (tab) setActive(tab);
      });
    }, { rootMargin: '-42% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ------------------ Projets ------------------ */
  var PROJECTS = [
  {
    "id": "8",
    "cats": [
      "ia"
    ],
    "tech": [
      "Python",
      "FastAPI",
      "PyTorch",
      "NLLB-200",
      "LoRA",
      "NLP"
    ],
    "fr": {
      "title": "Faso no-rêesa",
      "desc": "Système de traduction neuronale hors-ligne pour 5 langues nationales du Burkina Faso : NLLB-200 adapté par LoRA, corpus de 2,5 M de phrases, exécution 100 % CPU."
    },
    "en": {
      "title": "Faso no-rêesa",
      "desc": "Offline neural translation system for 5 national languages of Burkina Faso: NLLB-200 adapted with LoRA, 2.5M-sentence corpus, fully CPU-based inference."
    }
  },
  {
    "id": "9",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "C#",
      ".NET 8",
      "Avalonia UI",
      "PostgreSQL",
      "MVVM"
    ],
    "fr": {
      "title": "SAGESA",
      "desc": "Application desktop de gestion scolaire, administrative et comptable : inscriptions, notes, bulletins, caisse et journal d'audit."
    },
    "en": {
      "title": "SAGESA: school management software",
      "desc": "Desktop application for school, administrative and accounting management: enrolments, grades, report cards, cash desk and audit log."
    }
  },
  {
    "id": "10",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "Angular 18",
      "Spring Boot",
      "Java 21",
      "PostgreSQL",
      "Docker"
    ],
    "fr": {
      "title": "SmartAgriMarket",
      "desc": "Marketplace agricole reliant directement producteurs et acheteurs : messagerie, bourse de matériel, forum et suivi logistique."
    },
    "en": {
      "title": "SmartAgriMarket",
      "desc": "Agricultural marketplace connecting producers and buyers directly: messaging, equipment exchange, forum and logistics tracking."
    }
  },
  {
    "id": "11",
    "cats": [
      "mobile"
    ],
    "tech": [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Zustand"
    ],
    "fr": {
      "title": "Onvaoù ?",
      "desc": "Application mobile communautaire de découverte, de partage et de localisation de lieux d'intérêt."
    },
    "en": {
      "title": "Onvaoù ?",
      "desc": "Community mobile app for discovering, sharing and locating points of interest."
    }
  },
  {
    "id": "12",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "PostgreSQL"
    ],
    "fr": {
      "title": "Kossa",
      "desc": "Gestion du cycle de vie des réclamations : affectation, escalade N1/N2 et suivi des SLA."
    },
    "en": {
      "title": "Customer Complaint Management",
      "desc": "Full complaint lifecycle management: assignment, N1/N2 escalation and SLA tracking."
    }
  },
  {
    "id": "13",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "Angular",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Maven"
    ],
    "fr": {
      "title": "TaskBoard",
      "desc": "Application web de gestion de tâches inspirée de Trello, avec documentation Swagger et diagrammes UML."
    },
    "en": {
      "title": "TaskBoard",
      "desc": "Trello-inspired web task management application with Swagger documentation and UML diagrams."
    }
  },
  {
    "id": "14",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "Java 21",
      "Spring Boot",
      "Angular 18",
      "PostgreSQL",
      "Apache POI"
    ],
    "fr": {
      "title": "Tarifika",
      "desc": "Solution Full Stack de gestion, d'importation, d'analyse et de comparaison de listes de tarifs d'interconnexion."
    },
    "en": {
      "title": "Tarifika",
      "desc": "Full Stack solution for managing, importing, analysing and comparing interconnection price lists."
    }
  },
  {
    "id": "15",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "PHP 8",
      "MySQL / MariaDB",
      "Module C",
      "API Open-Meteo"
    ],
    "fr": {
      "title": "AgroBurkina",
      "desc": "Gestion d'une coopérative agricole burkinabè : catalogue, membres, parcelles, apports, ventes et prévision de rendement."
    },
    "en": {
      "title": "AgroBurkina",
      "desc": "Management of a Burkinabè agricultural cooperative: catalogue, members, plots, deliveries, sales and yield forecasting."
    }
  },
  {
    "id": "1",
    "cats": [
      "front-end"
    ],
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "fr": {
      "title": "ArchiBurkina",
      "desc": "Site vitrine responsive pour une entreprise d'architecture."
    },
    "en": {
      "title": "ArchiBurkina",
      "desc": "Responsive showcase website for an architecture firm."
    }
  },
  {
    "id": "2",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript"
    ],
    "fr": {
      "title": "FasoLuxe HÔTEL",
      "desc": "Solution complète de gestion hôtelière avec interface admin et client."
    },
    "en": {
      "title": "FasoLuxe HÔTEL",
      "desc": "Complete hotel management solution with admin and client interfaces."
    }
  },
  {
    "id": "3",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "PHP",
      "SQL",
      "JavaScript"
    ],
    "fr": {
      "title": "Alpha",
      "desc": "Site dynamique sur l'IA et les objets connectés avec commentaires."
    },
    "en": {
      "title": "Alpha",
      "desc": "Dynamic website about AI and IoT with a comment system."
    }
  },
  {
    "id": "4",
    "cats": [
      "full-stack"
    ],
    "tech": [
      "Python",
      "SQL",
      "Flutter"
    ],
    "fr": {
      "title": "IMMO",
      "desc": "Solution multi-plateforme avec backend Python et mobile Flutter."
    },
    "en": {
      "title": "IMMO",
      "desc": "Cross-platform solution with Python backend and Flutter mobile app."
    }
  },
  {
    "id": "5",
    "cats": [
      "front-end"
    ],
    "tech": [
      "HTML/CSS",
      "JavaScript"
    ],
    "fr": {
      "title": "Fariflore",
      "desc": "Site de présentation d'un commerce d'organisation événementielle."
    },
    "en": {
      "title": "Fariflore",
      "desc": "Showcase website for an event-planning business."
    }
  },
  {
    "id": "6",
    "cats": [
      "front-end"
    ],
    "tech": [
      "HTML/CSS",
      "JavaScript"
    ],
    "fr": {
      "title": "Curriculum Vitae",
      "desc": "CV interactif retracant mon parcours et compétences."
    },
    "en": {
      "title": "Curriculum Vitae",
      "desc": "Interactive resume showing my background and skills."
    }
  },
  {
    "id": "7",
    "cats": [
      "full-stack",
      "featured"
    ],
    "tech": [
      "Django 6.0",
      "PostgreSQL",
      "Bootstrap 5"
    ],
    "fr": {
      "title": "Maquis Manager",
      "desc": "Application complète de gestion de stock et ventes pour la restauration avec détection d'écarts automatique."
    },
    "en": {
      "title": "Maquis Manager",
      "desc": "Full stock & sales management app for restaurants with automatic discrepancy detection."
    }
  }
];

  var list = document.getElementById('projectsList');
  var filtersBox = document.getElementById('projectFilters');

  var FILTERS = ['all', 'featured', 'ia', 'full-stack', 'mobile', 'front-end'];
  var LIEN = function (id) {
    return 'projet-details.html?id=' + id + (isEN ? '&lang=en' : '');
  };

  function projectCard(p) {
    var loc = isEN ? p.en : p.fr;
    var techs = p.tech.slice(0, 5).map(function (t) { return '<span>' + t + '</span>'; }).join('');
    return [
      '<a class="m-project" href="' + LIEN(p.id) + '" data-cats="' + p.cats.join(' ') + '">',
      '  <div class="m-project-media">',
      '    <img src="images/projets/mobile/' + p.id + '.webp" alt="' + loc.title.replace(/"/g, '&quot;') + '" loading="lazy" width="720" height="405">',
      '    <span class="m-project-badge">#' + p.id + '</span>',
      '  </div>',
      '  <div class="m-project-body">',
      '    <div class="m-project-top">',
      '      <span class="m-project-id">~/projets</span>',
      '      <span class="m-project-cat">' + T[p.cats[0]] + '</span>',
      '    </div>',
      '    <h3>' + loc.title + '</h3>',
      '    <p>' + loc.desc + '</p>',
      '    <div class="m-tech">' + techs + '</div>',
      '    <span class="m-project-link"><span>' + T.details + '</span><i class="fas fa-arrow-right" aria-hidden="true"></i></span>',
      '  </div>',
      '</a>'
    ].join('');
  }

  if (list) {
    list.innerHTML = PROJECTS.map(projectCard).join('');
  }

  if (filtersBox) {
    var validCats = [];
    PROJECTS.forEach(function (p) {
      p.cats.forEach(function (c) { if (validCats.indexOf(c) === -1) validCats.push(c); });
    });
    filtersBox.innerHTML = FILTERS.filter(function (f) {
      return f === 'all' || validCats.indexOf(f) !== -1;
    }).map(function (f, i) {
      return '<button type="button" class="m-filter' + (i === 0 ? ' active' : '') + '" data-filter="' + f + '" aria-pressed="' + (i === 0) + '">' + T[f] + '</button>';
    }).join('');

    filtersBox.addEventListener('click', function (e) {
      var btn = e.target.closest('.m-filter');
      if (!btn) return;
      var key = btn.getAttribute('data-filter');
      filtersBox.querySelectorAll('.m-filter').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on);
      });
      list.querySelectorAll('.m-project').forEach(function (card) {
        var cats = (card.getAttribute('data-cats') || '').split(' ');
        card.hidden = key !== 'all' && cats.indexOf(key) === -1;
      });
    });
  }

  /* ------------------ Lien version bureau ------------------ */
  document.querySelectorAll('[data-desktop]').forEach(function (link) {
    link.addEventListener('click', function () {
      try { sessionStorage.setItem('uw-desktop', '1'); } catch (e) {}
    });
  });

  /* ------------------ Année du pied de page ------------------ */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();

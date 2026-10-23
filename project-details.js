document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const LANG = (params.get('lang') || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
    const isEN = LANG === 'en';
    document.documentElement.lang = LANG;

    /* =========================================================
       Textes d'interface
       ========================================================= */
    const UI = {
        fr: {
            back: 'Retour aux projets',
            nav: ['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'],
            home: 'index.html',
            notFoundBack: 'Retour aux projets',
            crumbPath: '~/projets',
            descHeading: 'Description du projet',
            techHeading: 'Technologies utilisées',
            linksHeading: 'Liens du projet',
            mainImgAlt: 'Aperçu du projet',
            preview: (i, t) => `Aperçu ${i} du projet ${t}`,
            github: 'Code source',
            live: 'Voir en ligne',
            pagerPrev: 'cd ../',
            pill: { label: 'EN', title: 'Switch to English' },
            docTitle: (t) => `${t} | Portfolio Ulrich WENDSONGDE`
        },
        en: {
            back: 'Back to projects',
            nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
            home: 'en.html',
            notFoundBack: 'Back to projects',
            crumbPath: '~/projects',
            descHeading: 'Project description',
            techHeading: 'Technologies used',
            linksHeading: 'Project links',
            mainImgAlt: 'Project preview',
            preview: (i, t) => `Preview ${i} of project ${t}`,
            github: 'Source code',
            live: 'View live',
            pagerPrev: 'cd ../',
            pill: { label: 'FR', title: 'Passer au français' },
            docTitle: (t) => `${t} | Ulrich WENDSONGDE Portfolio`
        }
    };
    const T = UI[LANG];

    const projectsData = {
        '1': {
            title: "Site statique d'entreprise d'architecture",
            subtitle: "Développement Front-End",
            description: "Terre & Esprit est un site web immersif qui célèbre la richesse de l'architecture du Burkina Faso. Il sert de vitrine éducative et esthétique en explorant l'histoire, les matériaux traditionnels comme le banco, et les œuvres emblématiques du pays. Le projet met particulièrement en lumière les artisans locaux et la vision moderne de l'architecte de renommée mondiale, Diébédo Francis Kéré. Entièrement responsive, son design s'inspire des couleurs chaudes du Sahel pour offrir une expérience authentique.",
            en: {
                title: "Static website for an architecture firm",
                subtitle: "Front-End Development",
                description: "Terre & Esprit is an immersive website celebrating the richness of Burkina Faso's architecture. It acts as an educational and aesthetic showcase, exploring the country's history, traditional materials such as banco, and its landmark works. The project particularly highlights local craftsmen and the modern vision of world-renowned architect Diébédo Francis Kéré. Fully responsive, its design draws on the warm colours of the Sahel to deliver an authentic experience."
            },
            technologies: ["HTML/CSS", "JavaScript"],
            images: [
                "images/projets/archiburkina/acceuil.webp",
                "images/projets/archiburkina/artisans.webp",
                "images/projets/archiburkina/oeuvres.webp",
                "images/projets/archiburkina/histoire.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/archiburkina.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://archiburkina.vercel.app/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '2': {
            title: "Application de gestion d'hôtel",
            subtitle: "Développement Full-Stack",
            description: "Application de gestion hôtelière : recherche de disponibilité par dates et par ville, réservation en ligne avec services à la carte et facture détaillée, espace client, tableau de bord de réception et administration du catalogue. J'ai conçu le modèle de données avec facturation historisée, sécurisé l'application (CSRF, mots de passe hachés, limitation des tentatives de connexion), écrit un client SMTP sans dépendance externe et réalisé le système visuel. Le site est déployé en ligne.",
            en: {
                title: "Hotel management application",
                subtitle: "Full-Stack Development",
                description: "Hotel management application: availability search by dates and city, online booking with à la carte services and detailed invoicing, client area, reception dashboard and catalogue administration. I designed the data model with historical invoicing, secured the application (CSRF, hashed passwords, login rate limiting), wrote a dependency-free SMTP client and built the visual design system. The site is live."
            },
            technologies: ["PHP 8", "MySQL / MariaDB", "JavaScript", "Sécurité web", "SMTP"],
            images: [
                "images/projets/fasoluxe/01.webp",
                "images/projets/fasoluxe/02.webp",
                "images/projets/fasoluxe/03.webp",
                "images/projets/fasoluxe/04.webp",
                "images/projets/fasoluxe/05.webp",
                "images/projets/fasoluxe/06.webp",
                "images/projets/fasoluxe/07.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/fasoluxe.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://fasoluxe.alwaysdata.net/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '3': {
            title: "Laboratoire d'intelligence artificielle et d'objets connectes",
            subtitle: "Developpement Full-Stack",
            description: "Site d'un laboratoire d'etudiants applique a l'IA et aux objets connectes : presentation du projet, catalogue des services proposes et suivi du budget des depenses. J'ai conu la base de donnees et l'API JSON qui alimente le tableau de suivi, securise les ecritures avec des jetons anti-CSRF, et deplace le calcul des montants sur le serveur pour qu'ils ne puissent pas etre falsifies. Le site est deploye en ligne.",
            en: {
                title: "Artificial intelligence and IoT research lab",
                subtitle: "Full-Stack Development",
                description: "Website for a student research lab focused on AI and connected objects: project presentation, catalogue of the services offered, and tracking of the project budget. I designed the database and the JSON API behind the tracking table, secured the writes with CSRF tokens, and moved the amount calculation to the server so it cannot be tampered with. The site is live."
            },
            technologies: ["PHP 8", "MySQL / MariaDB", "JavaScript", "API JSON", "Sécurité web"],
            images: [
                "images/projets/alpha/01.png",
                "images/projets/alpha/02.png",
                "images/projets/alpha/03.png",
                "images/projets/alpha/04.png"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/alpha.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://alphaxi.alwaysdata.net/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '4': {
            title: "Application de gestion immobilière",
            subtitle: "Développement Full-Stack",
            description: "Application web pour la gestion des biens immobiliers avec une interface utilisateur intuitive. J'ai utilisé du Python, HTML/CSS et JavaScript pour le front-end et un backend SQL pour la gestion des données.",
            en: {
                title: "Real estate management application",
                subtitle: "Full-Stack Development",
                description: "Web application for managing real estate properties with an intuitive user interface. I used Python, HTML/CSS and JavaScript for the front end and a SQL back end for data management."
            },
            technologies: ["JavaScript", "Python", "SQL", "HTML/CSS"],
            images: [
                "images/projets/immo/01.png",
                "images/projets/immo/02.png",
                "images/projets/immo/03.png",
                "images/projets/immo/04.png",
                "images/projets/immo/05.png",
                "images/projets/immo/06.png"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/immo.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://mamaison.streamlit.app/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '5': {
            title: "Site de présentation commerciale",
            subtitle: "Développement Frontend",
            description: "Site web pour la promotion commerciale de Fariflore avec une interface utilisateur intuitive. Développé en HTML/CSS et JavaScript.",
            en: {
                title: "Commercial showcase website",
                subtitle: "Frontend Development",
                description: "Website promoting Fariflore's business with an intuitive user interface. Built with HTML/CSS and JavaScript."
            },
            technologies: ["JavaScript", "HTML/CSS"],
            images: [
                "images/projets/fariflore/acc.webp",
                "images/projets/fariflore/cat.webp",
                "images/projets/fariflore/prest.webp",
                "images/projets/fariflore/vid.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/fariflore.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://fariflore.vercel.app/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '6': {
            title: "Curriculum Vitae interactif",
            subtitle: "Développement Frontend",
            description: "Site retracant mon parcours scolaire, académique et professionnel et présentant mes compétences. Décliné en deux versions linguistiques (français et anglais).",
            en: {
                title: "Interactive résumé",
                subtitle: "Frontend Development",
                description: "Website covering my school, academic and professional background and presenting my skills. Available in two language versions (French and English)."
            },
            technologies: ["HTML/CSS", "JavaScript"],
            images: [
                "images/projets/cv/01.png"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/Curriculum.git", label: "Source FR", label_en: "FR source" },
                { type: "github", url: "https://github.com/DokuShonen/Curriculum.git", label: "Source", label_en: "Source" },
                { type: "live", url: "https://kinda-cv.vercel.app/?lang=fr", label: "Version française", label_en: "French version" },
                { type: "live", url: "https://kinda-cv.vercel.app/?lang=en", label: "English version", label_en: "English version" }
            ]
        },
        '7': {
            title: "Maquis Manager (Manabar)",
            subtitle: "Développement Python / Django",
            description: "Maquis Manager Web est une application de gestion de stock et de ventes conçue spécifiquement pour le secteur de la restauration et des débits de boisson. Le projet répond à une problématique majeure : la sécurisation des revenus. Grâce à un algorithme de détection d'écarts entre le stock théorique (logiciel) et le stock physique (comptage réel), le logiciel identifie immédiatement les boissons manquantes et calcule la perte financière associée en FCFA.",
            en: {
                title: "Maquis Manager (Manabar)",
                subtitle: "Python / Django Development",
                description: "Maquis Manager Web is a stock and sales management application designed specifically for the food service and beverage retail industry. The project tackles a major challenge: securing revenue. By detecting discrepancies between theoretical stock (in the software) and physical stock (actual count), the application immediately identifies missing drinks and calculates the resulting financial loss in FCFA."
            },
            technologies: ["Django 6.0", "PostgreSQL", "Bootstrap 5", "WhiteNoise"],
            images: [
                "images/projets/manabar/caisse.webp",
                "images/projets/manabar/inventaire.webp",
                "images/projets/manabar/historique.webp",
                "images/projets/manabar/stock.webp",
                "images/projets/manabar/prod.webp",
                "images/projets/manabar/01.webp",
                "images/projets/manabar/02.webp",
                "images/projets/manabar/03.webp"
            ],
            links: [
                { type: "live", url: "https://maquis-manager-pro.vercel.app/", label: "Site de vente", label_en: "Sales site" },
                { type: "github", url: "https://github.com/DokuShonen/manabar_web.git", label: "Source Web", label_en: "Web source" },
                { type: "github", url: "https://github.com/DokuShonen/Manabar_linux.git", label: "Source Linux", label_en: "Linux source" },
                { type: "github", url: "https://github.com/DokuShonen/manabar_win.git", label: "Source Windows", label_en: "Windows source" }
            ]
        },
        '8': {
            title: "Faso no-rêesa : traduction neuronale hors-ligne",
            subtitle: "IA & TALN : Python, PyTorch, FastAPI",
            description: "« Faso no-rêesa » est un système de traduction automatique neuronale pensé pour les cinq langues nationales du Burkina Faso : mooré, dioula, fulfulde, gourmanchéma et haoussa. Le projet adapte le modèle NLLB-200 par fine-tuning LoRA sur un corpus de 2 500 000 phrases, ce qui réduit fortement l'empreinte du modèle sans dégrader sa qualité. L'inférence fonctionne entièrement hors-ligne sur processeur, pour 2,1 Go de RAM : ni GPU ni service externe ne sont nécessaires. Une interface web responsive consomme une API FastAPI, et la qualité de traduction est mesurée par des tests de charge et l'indicateur SacreBLEU.",
            en: {
                title: "Faso no-rêesa: offline neural translation",
                subtitle: "AI & NLP: Python, PyTorch, FastAPI",
                description: "“Faso no-rêesa” is a neural machine translation system designed for the five national languages of Burkina Faso: Mooré, Dioula, Fulfulde, Gourmanchéma and Haoussa. The project adapts the NLLB-200 model through LoRA fine-tuning on a 2,500,000-sentence corpus, greatly reducing the model footprint without degrading quality. Inference runs fully offline on the CPU for 2.1 GB of RAM: no GPU or external service is required. A responsive web interface consumes a FastAPI API, and translation quality is measured with load tests and the SacreBLEU metric."
            },
            technologies: ["Python", "PyTorch", "NLLB-200", "LoRA / PEFT", "FastAPI", "NLP"],
            images: [
                "images/projets/fasonoreesa/Faso no-rɛɛsa.png",
                "images/projets/fasonoreesa/Image collée.png"
            ],
            links: [
                { type: "live", url: "https://suzuyaxiii-faso-no-reesa.hf.space/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '9': {
            title: "SAGESA : logiciel de gestion scolaire",
            subtitle: "Logiciel de gestion scolaire : C# / .NET",
            description: "Application de bureau destinée à la gestion complète d'un établissement scolaire : scolarité, administration et comptabilité réunies dans un seul logiciel multi-langues. Elle couvre les inscriptions, la tenue des notes et la génération des bulletins, la gestion des enseignants, des parents et du personnel administratif, le suivi de caisse ainsi qu'un journal d'audit. L'interface est construite selon le pattern MVVM avec Avalonia UI, ce qui permet de viser Windows et Linux à partir d'une même base de code.",
            en: {
                title: "SAGESA: school management software",
                subtitle: "School management software: C# / .NET",
                description: "Desktop application covering the complete management of a school: enrolment, administration and accounting brought together in a single multi-language application. It handles registrations, grades and report cards, teachers, parents and administrative staff, cash desk tracking and an audit log. The UI follows the MVVM pattern on Avalonia UI, targeting both Windows and Linux from a single codebase."
            },
            technologies: ["C#", ".NET 8", "Avalonia UI", "PostgreSQL", "MVVM"],
            images: [
                "images/projets/sagesa/dashboard.webp",
                "images/projets/sagesa/notes.webp",
                "images/projets/sagesa/bulletins.webp",
                "images/projets/sagesa/eleves.webp",
                "images/projets/sagesa/inscriptions.webp",
                "images/projets/sagesa/parametres.webp",
                "images/projets/sagesa/login.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/SAGESA", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://sagesa.vercel.app/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '10': {
            title: "SmartAgriMarket",
            subtitle: "Marketplace agricole : Angular / Spring Boot",
            description: "SmartAgriMarket est une plateforme de marketplace qui relie directement les producteurs agricoles et les acheteurs, sans intermédiaire. Elle réunit une messagerie intégrée, une bourse du matériel agricole, un forum d'entraide et le suivi logistique des commandes. L'architecture est Full Stack : frontend Angular, backend Java et base PostgreSQL conteneurisée avec Docker.",
            en: {
                title: "SmartAgriMarket",
                subtitle: "Agricultural marketplace: Angular / Spring Boot",
                description: "SmartAgriMarket is a marketplace platform connecting agricultural producers and buyers directly, with no middleman. It combines built-in messaging, an agricultural equipment exchange, a community forum and order logistics tracking. The architecture is Full Stack: Angular frontend, Java backend and PostgreSQL database containerised with Docker."
            },
            technologies: ["Angular 18", "Spring Boot", "Java 21", "PostgreSQL", "Docker"],
            images: [
                "images/projets/smartagrimarket/01.png",
                "images/projets/smartagrimarket/02.png",
                "images/projets/smartagrimarket/03.png",
                "images/projets/smartagrimarket/04.png",
                "images/projets/smartagrimarket/05.png",
                "images/projets/smartagrimarket/06.png",
                "images/projets/smartagrimarket/07.png",
                "images/projets/smartagrimarket/08.png",
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/SmartAgriMarket", label: "Code source", label_en: "Source code" }
            ]
        },
        '11': {
            title: "Onvaoù ?",
            subtitle: "Application mobile communautaire : React Native",
            description: "Onvaoù ? est une application mobile communautaire qui permet de découvrir, de partager et de localiser des lieux d'intérêt. L'interface est pensée pour un usage mobile d'abord : navigation par onglets avec Expo Router, gestion d'état légère par Zustand et animations fluides. Les données sont servies par Supabase, et le tout est réuni dans une base de code TypeScript unique avec React Native.",
            en: {
                title: "Onvaoù ?",
                subtitle: "Community mobile app: React Native",
                description: "Onvaoù ? is a community mobile application for discovering, sharing and locating points of interest. The interface is designed mobile-first: tab navigation with Expo Router, lightweight state management through Zustand and smooth animations. Data is served by Supabase, all within a single TypeScript codebase on React Native."
            },
            technologies: ["React Native", "Expo", "Expo Router", "TypeScript", "Supabase", "Zustand"],
            images: [
                "images/projets/onvao/explore.webp"
            ],
            links: [

            ]
        },
        '12': {
            title: "Kossa : gestion des réclamations clients",
            subtitle: "Spring Boot / React : sécurité JWT",
            description: "Kossa est une application web full-stack dédiée à la gestion des réclamations clients au Burkina Faso. Elle couvre le cycle de vie complet du ticket : création, affectation aux agents, escalade N1 / N2, notifications par e-mail et suivi du respect des SLA. Le backend Spring Boot applique la sécurité par JWT et les tests JUnit ; le frontend React affiche les tableaux de bord et les statistiques d'exploitation. La base PostgreSQL conserve l'historique et le journal d'audit.",
            en: {
                title: "Kossa: Customer Complaint Management",
                subtitle: "Spring Boot / React: JWT security",
                description: "Kossa is a full-stack web application for customer complaint management in Burkina Faso. It covers the complete ticket lifecycle: creation, assignment to agents, N1 / N2 escalation, e-mail notifications and SLA compliance tracking. The Spring Boot backend enforces JWT security and JUnit tests; the React frontend displays dashboards and operational statistics. The PostgreSQL database keeps the history and audit log."
            },
            technologies: ["Java 17", "Spring Boot", "Spring Security", "JWT", "React", "PostgreSQL"],
            images: [
                "images/projets/kossa/01.png",
                "images/projets/kossa/02.png",
                "images/projets/kossa/03.png",
                "images/projets/kossa/04.png",
                "images/projets/kossa/05.png",
                "images/projets/kossa/06.png",
                "images/projets/kossa/07.png",
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/kossa", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://kossabf.vercel.app/", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '13': {
            title: "TaskBoard",
            subtitle: "Application Kanban : Angular / Spring Boot",
            description: "TaskBoard est une application web de gestion de tâches inspirée de Trello. Le tableau kanban permet de suivre les tâches à faire, en cours et terminées, tandis que le backend Spring Boot expose une API documentée avec Swagger. Le projet s'accompagne de diagrammes UML (cas d'utilisation, classes, séquence) et d'une persistance PostgreSQL assurée par JPA / Hibernate.",
            en: {
                title: "TaskBoard",
                subtitle: "Kanban application: Angular / Spring Boot",
                description: "TaskBoard is a Trello-inspired web task management application. The Kanban board tracks to-do, in-progress and done tasks, while the Spring Boot backend exposes a Swagger-documented API. The project ships with UML diagrams (use case, class, sequence) and PostgreSQL persistence through JPA / Hibernate."
            },
            technologies: ["Angular", "Spring Boot", "Java", "PostgreSQL", "Maven"],
            images: [
                "images/projets/taskboard/00.png",
                "images/projets/taskboard/01.png",
                "images/projets/taskboard/02.png"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/TaskBoard", label: "Code source", label_en: "Source code" }
            ]
        },
        '14': {
            title: "Tarifika",
            subtitle: "Gestion & analyse de tarifs : Java / Angular",
            description: "Price List Manager est une solution Full Stack dédiée aux listes de tarifs d'interconnexion : importation depuis des fichiers Excel, analyse des écarts et comparaison périodique entre opérateurs. Le backend Java 21 et Spring Boot gère l'authentification JWT et la persistance PostgreSQL ; le frontend Angular 18 restitue les tableaux comparatifs et les graphiques via Chart.js, avec un import de fichiers assuré par Apache POI.",
            en: {
                title: "Tarifika",
                subtitle: "Price management & analysis: Java / Angular",
                description: "Price List Manager is a Full Stack solution for interconnection price lists: import from Excel files, variance analysis and periodic comparison between operators. The Java 21 and Spring Boot backend handles JWT authentication and PostgreSQL persistence; the Angular 18 frontend renders comparison tables and Chart.js charts, with file imports powered by Apache POI."
            },
            technologies: ["Java 21", "Spring Boot", "Angular 18", "PostgreSQL", "Apache POI"],
            images: [
                "images/projets/tarifika/01.png",
                "images/projets/tarifika/02.png",
                "images/projets/tarifika/03.png",
                "images/projets/tarifika/04.png",
                "images/projets/tarifika/05.png",
                "images/projets/tarifika/06.png",
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/Tarifika", label: "Code source", label_en: "Source code" },
                { type: "site", url: "https://tarifika.vercel.app/", label: "Site de présentation", label_en: "Product page" }
            ]
        },
        '15': {
            title: "AgroBurkina",
            subtitle: "Gestion de coopérative : PHP / MySQL",
            description: "AgroBurkina est un système informatisé de gestion d'une coopérative agricole burkinabè. Il centralise le catalogue des produits, le suivi des membres, des parcelles, des apports et des ventes, la prise de rendez-vous et la prévision de rendement, avec des exports CSV destinés au reporting. L'application est développée en PHP 8 sur une base MySQL / MariaDB servie par Apache : les données sont persistées en base et l'application bascule sur un jeu de démonstration lorsque celle-ci est injoignable. Un module écrit en langage C calcule les prévisions de rendement et se synchronise avec la plateforme, tandis que le bulletin météo agricole provient de l'API Open-Meteo, avec cache et repli saisonnier.",
            en: {
                title: "AgroBurkina",
                subtitle: "Cooperative management: PHP / MySQL",
                description: "AgroBurkina is a computerised management system for a Burkinabè agricultural cooperative. It centralises the product catalogue and the tracking of members, plots, deliveries and sales, along with appointment booking and yield forecasting, with CSV exports for reporting. The application is built in PHP 8 on a MySQL / MariaDB database served by Apache: data is persisted in the database and the app falls back to a demonstration dataset whenever the database is unreachable. A module written in C computes the yield forecasts and synchronises with the platform, while the agricultural weather bulletin comes from the Open-Meteo API, with caching and a seasonal fallback."
            },
            technologies: ["PHP 8", "MySQL / MariaDB", "Module C", "API Open-Meteo"],
            images: [
                "images/projets/agroburkina/01.webp",
                "images/projets/agroburkina/02.webp",
                "images/projets/agroburkina/03.webp",
                "images/projets/agroburkina/04.webp",
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/AgroBurkina", label: "Code source", label_en: "Source code" },
                { type: "live", url: "https://burkina.alwaysdata.net/", label: "Voir en ligne", label_en: "View live" }
            ]
        }
    };

    const ids = Object.keys(projectsData);
    const raw = projectsData[projectId];
    const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    /* =========================================================
       Navigation & éléments statiques traduits
       ========================================================= */
    const applyStaticTexts = () => {
        const backBtn = document.querySelector(".back-button");
        if (backBtn) backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${T.back}`;

        const logo = document.querySelector(".nav-logo");
        if (logo) logo.href = T.home;

        document.querySelectorAll(".nav-menu .nav-link").forEach((a, i) => {
            const hash = (a.getAttribute("href") || "").split("#")[1];
            if (hash) a.href = `${T.home}#${hash}`;
            if (T.nav[i]) a.textContent = T.nav[i];
        });

        const pill = document.getElementById("langPill");
        if (pill) {
            pill.textContent = T.pill.label;
            pill.title = T.pill.title;
            const next = isEN ? "fr" : "en";
            pill.href = `projet-details.html?id=${encodeURIComponent(projectId || "")}&lang=${next}`;
        }

        const infoCard = document.querySelector(".project-info-card");
        if (infoCard) {
            const headings = infoCard.querySelectorAll("h2, h3");
            if (headings[0]) headings[0].textContent = T.descHeading;
            if (headings[1]) headings[1].textContent = T.techHeading;
            if (headings[2]) headings[2].textContent = T.linksHeading;
        }

        const mainImg = document.getElementById("main-project-image");
        if (mainImg) mainImg.alt = T.mainImgAlt;
    };

    applyStaticTexts();

    if (!raw) {
        const container = document.querySelector(".project-details-section .container");
        if (container) {
            const id = projectId || "?";
            container.innerHTML = `
            <div class="pkg-error">
                <p class="pkg-error-cmd">$ apt show projet-${id}</p>
                <p class="pkg-error-msg">E: Unable to locate package <b>projet-${id}</b></p>
                <a href="${T.home}#projects" class="btn btn-secondary" style="margin-top:1.5rem">
                    <i class="fas fa-arrow-left"></i> ${T.notFoundBack}
                </a>
            </div>`;
        }
        return;
    }

    const project = isEN && raw.en ? { ...raw, ...raw.en } : raw;
    const slug = slugify(project.title);

    /* Fil d'Ariane façon prompt shell */
    const crumb = document.createElement("p");
    crumb.className = "pkg-breadcrumb";
    crumb.innerHTML = `<span class="dim">ulrich@portfolio</span>:<span class="path">${T.crumbPath}</span>$ cd ${slug}`;
    document.querySelector(".back-button").after(crumb);

    document.title = T.docTitle(project.title);
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;
    document.getElementById('project-full-description').textContent = project.description;

    /* =========================================================
       Galerie
       ========================================================= */
    const mainImage = document.getElementById('main-project-image');
    mainImage.src = project.images[0];
    mainImage.alt = T.preview(1, project.title);

    const thumbnailsContainer = document.getElementById('project-thumbnails');
    thumbnailsContainer.innerHTML = '';
    let currentIndex = 0;

    const counter = document.createElement("span");
    counter.className = "gallery-counter";

    const showImage = (index) => {
        currentIndex = (index + project.images.length) % project.images.length;
        mainImage.src = project.images[currentIndex];
        mainImage.alt = T.preview(currentIndex + 1, project.title);
        counter.textContent = `[${currentIndex + 1}/${project.images.length}]`;
        thumbnailsContainer.querySelectorAll(".thumbnail").forEach((t, i) =>
            t.classList.toggle("active", i === currentIndex));
    };

    const gallery = document.querySelector(".project-gallery");
    gallery.classList.add("has-nav");

    const prevBtn = document.createElement("button");
    prevBtn.className = "gallery-arrow prev";
    prevBtn.type = "button";
    prevBtn.setAttribute("aria-label", isEN ? "Previous image" : "Image précédente");
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

    const nextBtn = document.createElement("button");
    nextBtn.className = "gallery-arrow next";
    nextBtn.type = "button";
    nextBtn.setAttribute("aria-label", isEN ? "Next image" : "Image suivante");
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
    gallery.append(prevBtn, nextBtn);

    project.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = T.preview(index + 1, project.title);
        img.className = 'thumbnail' + (index === 0 ? ' active' : '');
        img.loading = 'lazy';
        img.addEventListener('click', () => showImage(index));
        thumbnailsContainer.appendChild(img);
    });

    gallery.querySelector(".project-main-image").after(counter);
    showImage(0);

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
        else if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });

    /* =========================================================
       Technologies & liens
       ========================================================= */
    const techContainer = document.getElementById('project-techs');
    techContainer.innerHTML = '';
    project.technologies.forEach((tech, index) => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.textContent = tech;
        span.style.animationDelay = `${index * 0.1}s`;
        techContainer.appendChild(span);
    });

    const linksContainer = document.querySelector('.project-links');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'pkg-link';
        const label = isEN ? (link.label_en || link.label) : link.label;
        a.innerHTML = link.type === "github"
            ? `<i class="fab fa-github"></i> ${label}`
            : `<i class="fas fa-external-link-alt"></i> ${label}`;
        linksContainer.appendChild(a);
    });
    if (!project.links.length) {
        const h = linksContainer.previousElementSibling;
        if (h && h.tagName === "H3") h.hidden = true;
    }

    /* =========================================================
       Navigation précédent / suivant
       ========================================================= */
    const pos = ids.indexOf(projectId);
    const nav = document.createElement("nav");
    nav.className = "project-pager";
    const mk = (id, dir) => {
        if (!id) return `<span class="pager-empty"></span>`;
        const p = projectsData[id];
        const label = isEN && p.en ? p.en.title : p.title;
        const arrow = dir === "prev" ? "←" : "→";
        const cmd = dir === "prev" ? T.pagerPrev : `cd ${slugify(label).slice(0, 24)}`;
        const qs = isEN ? "&amp;lang=en" : "";
        return `<a href="projet-details.html?id=${id}${qs}" class="pager-link ${dir}">
            <span class="pager-arrow">${arrow}</span>
            <span class="pager-label"><small>${cmd}</small>${label}</span>
        </a>`;
    };
    nav.innerHTML =
        mk(ids[pos - 1], "prev") +
        mk(ids[pos + 1] !== undefined ? ids[pos + 1] : null, "next");
    document.querySelector(".project-info-card").after(nav);
});

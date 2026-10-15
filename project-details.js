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
            description: "Application web complète pour la gestion des réservations, chambres et clients d'un hôtel. J'ai développé l'interface administrateur, le système de réservation et le module de paiement.",
            en: {
                title: "Hotel management application",
                subtitle: "Full-Stack Development",
                description: "Complete web application for managing a hotel's bookings, rooms and clients. I built the administrator interface, the booking system and the payment module."
            },
            technologies: ["PHP", "SQL", "HTML/CSS"],
            images: [
                "images/projets/fasoluxe/acceuil.webp",
                "images/projets/fasoluxe/reserve.webp",
                "images/projets/fasoluxe/acceuil1.webp",
                "images/projets/fasoluxe/hotel.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/fasoluxe.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "http://fasoluxe.atwebpages.com/public", label: "Voir en ligne", label_en: "View live" }
            ]
        },
        '3': {
            title: "Site dynamique sur l'IA et les IoT",
            subtitle: "Plateforme interactive",
            description: "Développement d'un site éducatif sur l'intelligence artificielle et les objets connectés. Le site comprend un système d'articles dynamiques, une section de commentaires, et des démonstrations interactives. J'ai implémenté une API REST pour gérer le contenu et les interactions utilisateurs.",
            en: {
                title: "Dynamic website about AI and IoT",
                subtitle: "Interactive platform",
                description: "Development of an educational website about artificial intelligence and connected objects. The site features a dynamic article system, a comments section and interactive demonstrations. I implemented a REST API to manage content and user interactions."
            },
            technologies: ["PHP", "SQL", "JavaScript", "HTML/CSS"],
            images: [
                "images/projets/alpha/acceuil.webp",
                "images/projets/alpha/formulaire.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/alpha.git", label: "Code source", label_en: "Source code" },
                { type: "live", url: "http://alphaitiot.atwebpages.com", label: "Voir en ligne", label_en: "View live" }
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
                "images/projets/immo/acceuil.webp",
                "images/projets/immo/admin.webp",
                "images/projets/immo/agent.webp",
                "images/projets/immo/bailleur.webp",
                "images/projets/immo/client.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/immo.git", label: "Code source", label_en: "Source code" }
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
                "images/projets/cv/cv.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/cvfr.git", label: "Source FR", label_en: "FR source" },
                { type: "github", url: "https://github.com/DokuShonen/cveng.git", label: "Source EN", label_en: "EN source" },
                { type: "live", url: "https://cv-fr.vercel.app/", label: "Version française", label_en: "French version" },
                { type: "live", url: "https://cveng.vercel.app/", label: "English version", label_en: "English version" }
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
                { type: "github", url: "https://github.com/DokuShonen/manabar_web.git", label: "Source Web", label_en: "Web source" },
                { type: "github", url: "https://github.com/DokuShonen/Manabar_linux.git", label: "Source Linux", label_en: "Linux source" },
                { type: "github", url: "https://github.com/DokuShonen/manabar_win.git", label: "Source Windows", label_en: "Windows source" },
                { type: "live", url: "https://suzuya.pythonanywhere.com/", label: "Voir en ligne", label_en: "View live" }
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
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.textContent = tech;
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

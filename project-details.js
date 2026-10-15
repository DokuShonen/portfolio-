document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projectsData = {
        '1': {
            title: "Site statique d'entreprise d'architecture",
            subtitle: "Développement Front-End",
            description: "Terre & Esprit est un site web immersif qui célèbre la richesse de l'architecture du Burkina Faso. Il sert de vitrine éducative et esthétique en explorant l'histoire, les matériaux traditionnels comme le banco, et les œuvres emblématiques du pays. Le projet met particulièrement en lumière les artisans locaux et la vision moderne de l'architecte de renommée mondiale, Diébédo Francis Kéré. Entièrement responsive, son design s'inspire des couleurs chaudes du Sahel pour offrir une expérience authentique.",
            technologies: ["HTML/CSS", "JavaScript"],
            images: [
                "images/projets/archiburkina/acceuil.webp",
                "images/projets/archiburkina/artisans.webp",
                "images/projets/archiburkina/oeuvres.webp",
                "images/projets/archiburkina/histoire.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/archiburkina.git", label: "Code source" },
                { type: "live", url: "https://archiburkina.vercel.app/", label: "Voir en ligne" }
            ]
        },
        '2': {
            title: "Application de gestion d'hôtel",
            subtitle: "Développement Full-Stack",
            description: "Application web complète pour la gestion des réservations, chambres et clients d'un hôtel. J'ai développé l'interface administrateur, le système de réservation et le module de paiement.",
            technologies: ["PHP", "SQL", "HTML/CSS"],
            images: [
                "images/projets/fasoluxe/acceuil.webp",
                "images/projets/fasoluxe/reserve.webp",
                "images/projets/fasoluxe/acceuil1.webp",
                "images/projets/fasoluxe/hotel.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/fasoluxe.git", label: "Code source" },
                { type: "live", url: "http://fasoluxe.atwebpages.com/public", label: "Voir en ligne" }
            ]
        },
        '3': {
            title: "Site dynamique sur l'IA et les IoT",
            subtitle: "Plateforme interactive",
            description: "Développement d'un site éducatif sur l'intelligence artificielle et les objets connectés. Le site comprend un système d'articles dynamiques, une section de commentaires, et des démonstrations interactives. J'ai implémenté une API REST pour gérer le contenu et les interactions utilisateurs.",
            technologies: ["PHP", "SQL", "JavaScript", "HTML/CSS"],
            images: [
                "images/projets/alpha/acceuil.webp",
                "images/projets/alpha/formulaire.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/alpha.git", label: "Code source" },
                { type: "live", url: "http://alphaitiot.atwebpages.com", label: "Voir en ligne" }
            ]
        },
        '4': {
            title: "Application de gestion immobilière",
            subtitle: "Développement Full-Stack",
            description: "Application web pour la gestion des biens immobiliers avec une interface utilisateur intuitive. J'ai utilisé du Python, HTML/CSS et JavaScript pour le front-end et un backend SQL pour la gestion des données.",
            technologies: ["JavaScript", "Python", "SQL", "HTML/CSS"],
            images: [
                "images/projets/immo/acceuil.webp",
                "images/projets/immo/admin.webp",
                "images/projets/immo/agent.webp",
                "images/projets/immo/bailleur.webp",
                "images/projets/immo/client.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/immo.git", label: "Code source" }
            ]
        },
        '5': {
            title: "Site de présentation commerciale",
            subtitle: "Développement Frontend",
            description: "Site web pour la promotion commerciale de Fariflore avec une interface utilisateur intuitive. Développé en HTML/CSS et JavaScript.",
            technologies: ["JavaScript", "HTML/CSS"],
            images: [
                "images/projets/fariflore/aacc.webp",
                "images/projets/fariflore/cat.webp",
                "images/projets/fariflore/agent.webp",
                "images/projets/fariflore/prest.webp",
                "images/projets/fariflore/vid.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/fariflore.git", label: "Code source" },
                { type: "live", url: "https://fariflore.vercel.app/", label: "Voir en ligne" }
            ]
        },
        '6': {
            title: "Curriculum Vitae interactif",
            subtitle: "Développement Frontend",
            description: "Site retracant mon parcours scolaire, académique et professionnel et présentant mes compétences. Décliné en deux versions linguistiques (français et anglais).",
            technologies: ["HTML/CSS", "JavaScript"],
            images: [
                "images/projets/cv/cv.webp"
            ],
            links: [
                { type: "github", url: "https://github.com/DokuShonen/cvfr.git", label: "Source FR" },
                { type: "github", url: "https://github.com/DokuShonen/cveng.git", label: "Source EN" },
                { type: "live", url: "https://cv-fr.vercel.app/", label: "Version française" },
                { type: "live", url: "https://cveng.vercel.app/", label: "English version" }
            ]
        },
        '7': {
            title: "Maquis Manager (Manabar)",
            subtitle: "Développement Python / Django",
            description: "Maquis Manager Web est une application de gestion de stock et de ventes conçue spécifiquement pour le secteur de la restauration et des débits de boisson. Le projet répond à une problématique majeure : la sécurisation des revenus. Grâce à un algorithme de détection d'écarts entre le stock théorique (logiciel) et le stock physique (comptage réel), le logiciel identifie immédiatement les boissons manquantes et calcule la perte financière associée en FCFA.",
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
                { type: "github", url: "https://github.com/DokuShonen/manabar_web.git", label: "Source Web" },
                { type: "github", url: "https://github.com/DokuShonen/Manabar_linux.git", label: "Source Linux" },
                { type: "github", url: "https://github.com/DokuShonen/manabar_win.git", label: "Source Windows" },
                { type: "live", url: "https://suzuya.pythonanywhere.com/", label: "Voir en ligne" }
            ]
        }
    };
    const project = projectsData[projectId];
    const ids = Object.keys(projectsData);
    if (!project) {
        document.querySelector(".project-details-section .container").innerHTML = `
            <div class="pkg-error">
                <p class="pkg-error-cmd">$ apt show projet-${projectId || "?"}</p>
                <p class="pkg-error-msg">E: Unable to locate package <b>projet-${projectId || "?"}</b></p>
                <a href="index.html#projects" class="btn btn-secondary" style="margin-top:1.5rem">
                    <i class="fas fa-arrow-left"></i> Retour aux projets
                </a>
            </div>`;
        return;
    }
    const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const crumb = document.createElement("p");
    crumb.className = "pkg-breadcrumb";
    crumb.innerHTML = `<span class="dim">ulrich@portfolio</span>:<span class="path">~/projets</span>$ cd ${slug}`;
    document.querySelector(".back-button").after(crumb);
    document.title = `${project.title} | Portfolio Ulrich WENDSONGDE`;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;
    document.getElementById('project-full-description').textContent = project.description;
    const mainImage = document.getElementById('main-project-image');
    mainImage.src = project.images[0];
    mainImage.alt = project.title;
    const thumbnailsContainer = document.getElementById('project-thumbnails');
    thumbnailsContainer.innerHTML = '';
    let currentIndex = 0;
    const counter = document.createElement("span");
    counter.className = "gallery-counter";
    const showImage = (index) => {
        currentIndex = (index + project.images.length) % project.images.length;
        mainImage.src = project.images[currentIndex];
        mainImage.alt = `Aperçu ${currentIndex + 1} du projet ${project.title}`;
        counter.textContent = `[${currentIndex + 1}/${project.images.length}]`;
        thumbnailsContainer.querySelectorAll(".thumbnail").forEach((t, i) =>
            t.classList.toggle("active", i === currentIndex));
    };
    const gallery = document.querySelector(".project-gallery");
    gallery.classList.add("has-nav");
    const prevBtn = document.createElement("button");
    prevBtn.className = "gallery-arrow prev";
    prevBtn.type = "button";
    prevBtn.setAttribute("aria-label", "Image précédente");
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    const nextBtn = document.createElement("button");
    nextBtn.className = "gallery-arrow next";
    nextBtn.type = "button";
    nextBtn.setAttribute("aria-label", "Image suivante");
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
    gallery.append(prevBtn, nextBtn);
    project.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Aperçu ${index + 1} du projet ${project.title}`;
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
        a.innerHTML = link.type === "github"
            ? `<i class="fab fa-github"></i> ${link.label}`
            : `<i class="fas fa-external-link-alt"></i> ${link.label}`;
        linksContainer.appendChild(a);
    });
    const pos = ids.indexOf(projectId);
    const nav = document.createElement("nav");
    nav.className = "project-pager";
    const mk = (id, dir) => {
        if (!id) return `<span class="pager-empty"></span>`;
        const p = projectsData[id];
        const arrow = dir === "prev" ? "←" : "→";
        const cmd = dir === "prev" ? "cd ../" : `cd ${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 24)}`;
        return `<a href="projet-details.html?id=${id}" class="pager-link ${dir}">
            <span class="pager-arrow">${arrow}</span>
            <span class="pager-label"><small>${cmd}</small>${p.title}</span>
        </a>`;
    };
    nav.innerHTML =
        mk(ids[pos - 1], "prev") +
        mk(ids[pos + 1] !== undefined ? ids[pos + 1] : null, "next");
    document.querySelector(".project-info-card").after(nav);
});
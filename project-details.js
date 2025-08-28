document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    const projectsData = {
        '1': {
            title: "Site statique d'entreprise d'architecture",
            subtitle: "Développement Front-End",
            description: "Terre & Esprit est un site web immersif qui célèbre la richesse de l'architecture du Burkina Faso. Il sert de vitrine éducative et esthétique en explorant l'histoire, les matériaux traditionnels comme le banco, et les œuvres emblématiques du pays. Le projet met particulièrement en lumière les artisans locaux et la vision moderne de l'architecte de renommée mondiale, Diébédo Francis Kéré. Entièrement responsive, son design s'inspire des couleurs chaudes du Sahel pour offrir une expérience authentique.",
            technologies: ["HTML/CSS", "JavaScript"],
            images: [
                "images/projets/archiburkina/acceuil.png",
                "images/projets/archiburkina/artisans.png",
                "images/projets/archiburkina/oeuvres.png",
                "images/projets/archiburkina/histoire.png"
            ],
            links: {
                github: "https://github.com/DokuShonen/archiburkina.git",
                live: "https://archiburkina.vercel.app/"
            }
        },
        '2': {
            title: "Application de gestion d'hôtel",
            subtitle: "Développement Full-Stack",
            description: "Application web complète pour la gestion des réservations, chambres et clients d'un hôtel. J'ai développé l'interface administrateur, le système de réservation et le module de paiement.",
            technologies: ["PHP", "SQL", "HTML/CSS"],
            images: [
                "images/projets/fasoluxe/acceuil.png",
                "images/projets/fasoluxe/reserve.png",
                "images/projets/fasoluxe/acceuil1.png",
                "images/projets/fasoluxe/hotel.png"
            ],
            links: {
                github: "https://github.com/DokuShonen/fasoluxe.git",
                live: "http://fasoluxe.atwebpages.com/public"
            }
        },
        '3': {
            title: "Site dynamique sur l'IA et les IoT",
            subtitle: "Plateforme interactive",
            description: "Développement d'un site éducatif sur l'intelligence artificielle et les objets connectés. Le site comprend un système d'articles dynamiques, une section de commentaires, et des démonstrations interactives. J'ai implémenté une API REST pour gérer le contenu et les interactions utilisateurs.",
            technologies: ["PHP", "SQL", "JavaScript", "HTML/CSS"],
            images: [
                "images/projets/alpha/acceuil.png",
                "images/projets/alpha/formulaire.png"
            ],
            links: {
                github: "https://github.com/DokuShonen/alpha.git",
                live: "http://alphaitiot.atwebpages.com"
            }
        },
        '4': {
            title: "Application de gestion immobilière",
            subtitle: "Développement Full-Stack",
            description: "Application web pour la gestion des biens immobiliers avec une interface utilisateur intuitive. J'ai utilisé du Python, HTML/CSS et JavaScript pour le front-end et un backend SQL pour la gestion des données.",
            technologies: ["JavaScript", "Python", "SQL", "Flutter/Dart", "HTML/CSS"],
            images: [
                "images/projets/immo/acceuil.png",
                "images/projets/immo/admin.png",
                "images/projets/immo/agent.png",
                "images/projets/immo/bailleur.png",
                "images/projets/immo/client.png"
            ],
            links: {
                github: "https://github.com/votreuser/projet-immobilier",
                live: "https://immobilier-exemple.com"
            }
        }
    };
    
    const project = projectsData[projectId];
    
    if (project) {
        // Mise à jour des informations de base
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-subtitle').textContent = project.subtitle;
        document.getElementById('project-full-description').textContent = project.description;
        
        // Image principale
        const mainImage = document.getElementById('main-project-image');
        mainImage.src = project.images[0];
        mainImage.alt = project.title;
        
        // Galerie d'images
        const thumbnailsContainer = document.getElementById('project-thumbnails');
        thumbnailsContainer.innerHTML = ''; // Nettoyage préalable
        
        project.images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Aperçu ${index + 1} du projet ${project.title}`;
            img.className = 'thumbnail';
            img.addEventListener('click', () => {
                mainImage.src = image;
                mainImage.alt = `Aperçu ${index + 1} du projet ${project.title}`;
            });
            thumbnailsContainer.appendChild(img);
        });
        
        // Technologies
        const techContainer = document.getElementById('project-techs');
        techContainer.innerHTML = ''; // Nettoyage préalable
        
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tech-badge';
            span.textContent = tech;
            techContainer.appendChild(span);
        });
        
        // Liens externes
        const linksContainer = document.querySelector('.project-links');
        linksContainer.innerHTML = '';
        
        if (project.links.github) {
            const githubLink = document.createElement('a');
            githubLink.href = project.links.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.className = 'tech-badge';
            githubLink.innerHTML = '<i class="fab fa-github"></i> Code source';
            linksContainer.appendChild(githubLink);
        }
        
        if (project.links.live) {
            const liveLink = document.createElement('a');
            liveLink.href = project.links.live;
            liveLink.target = '_blank';
            liveLink.rel = 'noopener noreferrer';
            liveLink.className = 'tech-badge';
            liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Voir en ligne';
            linksContainer.appendChild(liveLink);
        }
        
    } else {
        // Redirection si le projet n'existe pas
        window.location.href = 'index.html#projects';
    }
});
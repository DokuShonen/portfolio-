// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Fonction pour ouvrir/fermer le menu mobile
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Empêcher le défilement lorsque le menu est ouvert
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Initialisation du menu mobile
if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Rétablir le défilement
    });
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.mobile-menu-btn')) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Fermer le menu en appuyant sur la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Animation des compétences (version icônes)
function animateSkills() {
    const skillIcons = document.querySelectorAll('.skill-icon-item');
    
    skillIcons.forEach((icon, index) => {
        // Délai d'animation progressif
        setTimeout(() => {
            icon.style.opacity = 1;
            icon.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Animation au défilement
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.skill-category, .project-card, .contact-item, .skill-icon-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Navigation active
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

// Gestion du formulaire de contact
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Solution temporaire avec mailto en attendant Formspree/EmailJS
            const subject = "Message depuis votre portfolio";
            const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            
            window.location.href = `mailto:kindaulrich@gmail.com?subject=${subject}&body=${body}`;
            
            // Message de confirmation
            alert("Merci " + name + " pour votre message! Votre client email va s'ouvrir. Je vous répondrai dès que possible.");
            contactForm.reset();
        });
    }
}

// Initialiser toutes les fonctionnalités
function initPortfolio() {
    // Initialiser les compétences
    animateSkills();
    
    // Configurer les éléments pour l'animation
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .contact-item, .skill-icon-item');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Configurer le formulaire de contact
    setupContactForm();
    
    // Observer le défilement pour les animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Observer le défilement pour la navigation active
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Déclencher une première fois au chargement
    handleScrollAnimations();
    updateActiveNavLink();
}

// Démarrer l'initialisation quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}

// Gestion du chargement des images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            // Image déjà chargée
            img.classList.add('loaded');
        } else {
            // Image en cours de chargement
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            // Gestion des erreurs de chargement
            img.addEventListener('error', function() {
                console.error('Erreur de chargement de l\'image:', this.src);
            });
        }
    });
});

// Fonction pour le défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajustement pour la hauteur de la navbar
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du reflow sur le redimensionnement
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

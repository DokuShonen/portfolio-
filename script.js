// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animation des barres de compétences
function animateSkills() {
    const skillElements = document.querySelectorAll('.skill-progress');
    
    skillElements.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = level + '%';
    });
}

// Animation au défilement
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.skill-category, .project-card, .contact-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialiser les animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les barres de compétences
    animateSkills();
    
    // Configurer les éléments pour l'animation
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .contact-item');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Ici, vous pouvez ajouter le code pour envoyer le formulaire
            // Par exemple, en utilisant EmailJS, Fetch API vers un serveur, etc.
            
            // Message de confirmation (temporaire)
            alert(`Merci ${name} pour votre message! Je vous répondrai dès que possible.`);
            contactForm.reset();
        });
    }
    
    // Observer le défilement pour les animations
    window.addEventListener('scroll', handleScrollAnimations);
    // Déclencher une première fois au chargement
    handleScrollAnimations();
});

// Navigation active
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
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

// Initialiser les animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les compétences
    animateSkills();
    
    // Configurer les éléments pour l'animation
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .contact-item, .skill-icon-item');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
});
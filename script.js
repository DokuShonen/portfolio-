/* ================================================
   PORTFOLIO - All Animations & Effects
   ================================================ */

(function () {
  'use strict';

  /* -----------------------------------------------
     MATRIX RAIN (Canvas Background)
     ----------------------------------------------- */
  const matrixCanvas = document.getElementById('matrix-canvas');
  if (matrixCanvas) {
    const ctx = matrixCanvas.getContext('2d');
    let w, h, columns, drops;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]<>/\\|=+-*&^%$#@!?;:,.~`àâéèêëïîôùûüÿçœæ';
    const fontSize = 14;

    function resizeMatrix() {
      w = matrixCanvas.width = window.innerWidth;
      h = matrixCanvas.height = window.innerHeight;
      columns = Math.floor(w / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    }

    function drawMatrix() {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#00ff88';
        ctx.fillText(char, x, y);

        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    resizeMatrix();
    window.addEventListener('resize', resizeMatrix);
    setInterval(drawMatrix, 45);
  }

  /* -----------------------------------------------
     TYPING EFFECT (Hero Role)
     ----------------------------------------------- */
  const typingEl = document.getElementById('typingRole');
  if (typingEl) {
    const roles = [
      'Ingénieur en Technologie du Génie Informatique',
      'Développeur Full-Stack',
      'Passionné de Technologie',
      'Créateur de Solutions Innovantes'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 80;

    function typeRole() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        speed = 40;
      } else {
        typingEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        speed = 80;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(typeRole, speed);
    }

    setTimeout(typeRole, 1200);
  }

  /* -----------------------------------------------
     FLOATING CODE SNIPPETS
     ----------------------------------------------- */
  const floatingContainer = document.getElementById('floating-code');
  if (floatingContainer) {
    const snippets = [
      'const app = new Portfolio();',
      'function init() { return success; }',
      'import { skills } from "./ulrich";',
      'git commit -m "feature: portfolio"',
      'npm run build && npm run deploy',
      'SELECT * FROM projects WHERE awesome=true;',
      'class Developer extends Human { }',
      'async function buildFuture() { ... }',
      'console.log("Hello, World!");',
      '<div class="portfolio"></div>',
      'docker compose up -d',
      'ssh -t server "deploy.sh"',
      'pip install django && python manage.py runserver',
      'echo "Building the future..."',
      'curl -X POST /api/projects',
      'grep -r "talent" ~/skills',
      'chmod +x deploy.sh && ./deploy.sh',
      'for project in projects; do build(); done',
    ];

    function createSnippet() {
      const el = document.createElement('div');
      el.className = 'floating-snippet';
      el.textContent = snippets[Math.floor(Math.random() * snippets.length)];
      el.style.left = Math.random() * 90 + '%';
      el.style.animationDuration = (15 + Math.random() * 20) + 's';
      el.style.animationDelay = Math.random() * 5 + 's';
      floatingContainer.appendChild(el);

      setTimeout(() => el.remove(), 40000);
    }

    // Create initial batch
    for (let i = 0; i < 6; i++) {
      setTimeout(createSnippet, i * 2000);
    }

    // Continuously create new snippets
    setInterval(createSnippet, 5000);
  }

  /* -----------------------------------------------
     CURSOR TRAIL
     ----------------------------------------------- */
  const cursorTrail = document.getElementById('cursor-trail');
  if (cursorTrail && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorTrail.classList.add('visible');
    });

    document.addEventListener('mouseleave', () => {
      cursorTrail.classList.remove('visible');
    });

    function animateTrail() {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      cursorTrail.style.left = trailX + 'px';
      cursorTrail.style.top = trailY + 'px';
      requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .project-card, .skill-card, .about-card, .contact-item').forEach(el => {
      el.addEventListener('mouseenter', () => cursorTrail.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursorTrail.classList.remove('hovering'));
    });
  }

  /* -----------------------------------------------
     SCROLL REVEAL (IntersectionObserver)
     ----------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* -----------------------------------------------
     SKILL BARS ANIMATION
     ----------------------------------------------- */
  const skillFills = document.querySelectorAll('.skill-fill');
  if (skillFills.length > 0) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.setProperty('--target-width', fill.dataset.width + '%');
            fill.classList.add('animated');
            skillObserver.unobserve(fill);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillFills.forEach((fill) => skillObserver.observe(fill));
  }

  /* -----------------------------------------------
     STAT COUNTER ANIMATION
     ----------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(current);
              }
            }, 40);
            statObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((num) => statObserver.observe(num));
  }

  /* -----------------------------------------------
     NAVIGATION
     ----------------------------------------------- */
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  // Scroll effect - nav background
  function handleNavScroll() {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }

  // Active link on scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleNavScroll();
    updateActiveLink();
  }, { passive: true });

  handleNavScroll();
  updateActiveLink();

  // Mobile menu
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* -----------------------------------------------
     SMOOTH SCROLL
     ----------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* -----------------------------------------------
     CONTACT FORM (Formspree with fallback)
     ----------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Try Formspree first
      fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      })
        .then((res) => {
          if (res.ok) {
            showNotification('Message envoyé avec succès !', 'success');
            contactForm.reset();
          } else {
            fallbackMailto(name, email, message);
          }
        })
        .catch(() => {
          fallbackMailto(name, email, message);
        });
    });
  }

  function fallbackMailto(name, email, message) {
    const subject = encodeURIComponent('Message depuis votre portfolio');
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:kindaulrich1@gmail.com?subject=${subject}&body=${body}`;
    showNotification('Client email ouvert pour envoi.', 'info');
  }

  function showNotification(text, type) {
    const notif = document.createElement('div');
    notif.style.cssText = `
      position: fixed; bottom: 2rem; right: 2rem; z-index: 10000;
      padding: 1rem 1.5rem; border-radius: 8px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;
      background: ${type === 'success' ? 'var(--accent)' : 'var(--blue)'};
      color: var(--bg-primary); font-weight: 600;
      box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
      transform: translateY(20px); opacity: 0;
      transition: all 0.4s var(--ease-out);
    `;
    notif.textContent = text;
    document.body.appendChild(notif);

    requestAnimationFrame(() => {
      notif.style.transform = 'translateY(0)';
      notif.style.opacity = '1';
    });

    setTimeout(() => {
      notif.style.transform = 'translateY(20px)';
      notif.style.opacity = '0';
      setTimeout(() => notif.remove(), 400);
    }, 4000);
  }

  /* -----------------------------------------------
     MAGNETIC EFFECT (Buttons)
     ----------------------------------------------- */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
        el.style.transition = 'transform 0.5s var(--ease-spring)';
        setTimeout(() => { el.style.transition = ''; }, 500);
      });
    });
  }

  /* -----------------------------------------------
     RESIZE ANIMATION STOPPER
     ----------------------------------------------- */
  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });

})();

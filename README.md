# Portfolio — KINDA Ulrich WENDSONGDE

Site portfolio personnel statique d'**Ulrich WENDSONGDE**, **ingénieur de travaux, option
Technologie du Génie Informatique** (`Trained Engineer, Computer Engineering Technology`),
basé à Ouagadougou (Burkina Faso).

**Live :** <https://kindaulrich.vercel.app>

---

## Contenu

| Section | Ancre | Description |
|---|---|---|
| Accueil | `#hero` | Présentation, rôles animés, statistiques |
| À propos | `#about` | Profil, formation, approche, objectifs |
| Parcours | `#experience` | Expérience professionnelle + diplômes |
| Compétences | `#skills` | 7 groupes (frameworks, IA/NLP, mobile, BDD, systèmes, bureautique, langues) |
| Projets | `#projects` | 15 projets filtrables (IA, mobile, full-stack, front-end, mis en avant) |
| Contact | `#contact` | Coordonnées, formulaire, réseaux |
| GitHub live | `#github` | Dépôts publiés via l'API GitHub |

Les **détails de chaque projet** s'affichent dans `projet-details.html?id=N`, avec galerie
d'images, technologies, liens et navigation précédent/suivant.

## Bilingue

- `index.html` — français (défaut)
- `en.html` — anglais
- La page de détail partage la même langue via le paramètre `?lang=en`
- Les libellés d'interface (palette, filtres, commandes shell) sont pilotés par `isEN`

## Technologies

Site **statique, sans build ni dépendance** — HTML, CSS et JavaScript natifs.

- `styles.css` — thème « UlrichOS » (palette rétro/terminal, grille, animations)
- `script.js` — animation de frappe des rôles, compteurs, révélations au scroll
- `project-details.js` — données bilingues des 15 projets
- `filters.js` — filtres de la galerie de projets
- `github.js` — récupération et affichage des dépôts GitHub publics
- `ux.js` — palette de commandes (`Ctrl/Cmd + K`), navigation clavier
- `linux-ui.js`, `boot.js`, `wow.js` — chrome type système d'exploitation

### Composants tiers chargés en ligne

Google Fonts (JetBrains Mono, Fira Code, Space Grotesk), Font Awesome 6,
Highlight.js et GSAP — via CDN.

## Accessibilité & SEO

Lien d'évitement, `main` identifié, `alt` sur toutes les images, états de focus visibles,
`prefers-reduced-motion` respecté, méta description, Open Graph / Twitter Cards,
données structurées JSON-LD, `canonical` + `hreflang`, `sitemap.xml`, `robots.txt`
et PWA (`manifest.json` + icônes 192/512/maskable).

## Déploiement

Déployé sur **Vercel** à partir du dépôt `DokuShonen/portfolio-`.
Aucune étape de build : la racine du dépôt est servie telle quelle.

```bash
git clone https://github.com/DokuShonen/portfolio-.git
cd portfolio-
python3 -m http.server 8000   # ou n'importe quel serveur statique
```

## Licence

Contenu et design © 2026 KINDA Ulrich WENDSONGDE.

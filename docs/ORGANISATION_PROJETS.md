# 📁 Organisation des Projets - Portfolio Adrien Pago

## 🏗️ Structure des Dossiers

```
public/uploads/projects/
├── 1-portfolio-symfony/           # Projet 1
│   ├── cover.jpg                  # Image principale (couverture)
│   └── gallery/                   # Galerie d'images
│       ├── 01-homepage.jpg        # Numérotées pour l'ordre
│       ├── 02-projects.jpg
│       └── 03-contact.jpg
├── 2-ecommerce-app/              # Projet 2
│   ├── cover.jpg
│   └── gallery/
│       ├── 01-products.jpg
│       └── 02-cart.jpg
└── 3-mobile-app/                 # Projet 3
    ├── cover.jpg
    └── gallery/
        ├── 01-login.jpg
        └── 02-dashboard.jpg
```

## 📝 Convention de Nommage

### Dossiers Projets
- Format : `{id}-{nom-projet-slug}`
- Exemple : `1-portfolio-symfony`, `2-ecommerce-app`

### Images
- **Cover** : `cover.jpg` (image principale, 800x500px recommandé)
- **Galerie** : `01-description.jpg`, `02-description.jpg`, etc.
  - Numérotation pour l'ordre d'affichage
  - Description courte dans le nom
  - Format recommandé : 1200x800px

## 🎨 Catégories de Projets

- **Web** : Sites web, applications web
- **Mobile** : Applications iOS/Android, PWA
- **Autre** : Applications desktop, scripts, outils, etc.

## 📊 Structure des Données Projet

```php
[
    'id' => 1,
    'title' => 'Portfolio Symfony',
    'description' => 'Description détaillée...',
    'category' => 'web', // web|mobile|autre
    'cover_image' => 'cover.jpg',
    'gallery_images' => ['01-homepage.jpg', '02-projects.jpg', '03-contact.jpg'],
    'tags' => ['Symfony', 'Twig', 'SCSS', 'JavaScript'],
    'github_url' => 'https://github.com/adrien-pago/portfolio',
    'demo_url' => 'https://adrienpago.dev',
    'created_at' => new DateTime('2024-01-15'),
    'featured' => true // Pour les projets mis en avant
]
```

## 🔧 Utilisation

1. **Ajouter un projet** :
   - Créer le dossier `public/uploads/projects/{id}-{slug}/`
   - Ajouter `cover.jpg`
   - Créer le dossier `gallery/` si nécessaire
   - Ajouter les images de galerie numérotées
   - Mettre à jour les données dans le contrôleur

2. **Galerie d'images** :
   - Les images sont chargées automatiquement depuis le dossier `gallery/`
   - Triées par nom de fichier (ordre numérique)
   - Affichage en carrousel/slider dans la page projet

## 📱 Optimisation

- **Formats** : JPG pour photos, PNG pour screenshots avec transparence
- **Tailles** : Cover 800x500px, Galerie 1200x800px
- **Compression** : Optimiser pour le web (qualité 80-85%)
- **Alt text** : Généré automatiquement depuis le nom du fichier 
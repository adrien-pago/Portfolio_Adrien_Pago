# 🚀 Portfolio Adrien Pago

Portfolio personnel moderne développé avec **Symfony 7.2** et **Webpack Encore**, optimisé pour les expériences mobile et desktop.

## 📱 **Refonte Mobile 2024**
Ce portfolio fait l'objet d'une refonte complète axée sur l'expérience mobile avec des animations ultra-modernes et des interactions fluides.

## 🛠️ **Stack Technique**

### Backend
- **Symfony 7.2** - Framework PHP moderne
- **Twig** - Moteur de templates
- **Doctrine** - ORM (optionnel)

### Frontend
- **Webpack Encore** - Bundler d'assets
- **Bootstrap 5.3** - Framework CSS responsive
- **SCSS** - Préprocesseur CSS modulaire
- **JavaScript ES6+** - Scripts modulaires
- **Typed.js** - Animations de texte
- **Font Awesome** - Icônes

### Outils de Développement
- **Stimulus** - Framework JavaScript léger
- **PostCSS** - Traitement CSS
- **Babel** - Transpilation JavaScript

## 📁 **Architecture Modulaire**

```
├── assets/
│   ├── js/
│   │   ├── app.js          # Point d'entrée principal
│   │   ├── home.js         # Page d'accueil
│   │   ├── sidebar.js      # Navigation
│   │   ├── projects.js     # Projets
│   │   ├── veille.js       # Veille technologique
│   │   └── contact.js      # Contact
│   ├── styles/
│   │   ├── app.scss        # Styles principaux
│   │   ├── _variables.scss # Variables globales
│   │   ├── _layout.scss    # Layout général
│   │   ├── _sidebar.scss   # Navigation
│   │   ├── _home.scss      # Page d'accueil
│   │   ├── _projects.scss  # Projets
│   │   ├── _veille.scss    # Veille
│   │   └── _contact.scss   # Contact
│   └── images/             # Assets visuels
├── src/
│   ├── Controller/         # Contrôleurs Symfony
│   └── Entity/            # Entités (optionnel)
├── templates/
│   ├── base.html.twig     # Template de base
│   └── [pages]/           # Templates par section
└── public/
    └── build/             # Assets compilés
```

## 🎨 **Fonctionnalités Actuelles**

### ✅ **Implémenté**
- ✅ **Responsive Design** - Adaptation mobile/desktop
- ✅ **Navigation Sidebar** - Menu latéral animé
- ✅ **Animations Typed.js** - Texte dynamique
- ✅ **Système de Routes** - Navigation Symfony
- ✅ **Composants Twig** - Cards réutilisables
- ✅ **Filtres Projets** - JavaScript dynamique
- ✅ **Formulaire Contact** - Interface complète

### 🚧 **En Cours de Refonte**
- 🚧 **UX Mobile Ultra-Moderne** - Animations fluides
- 🚧 **Micro-interactions** - Feedbacks tactiles
- 🚧 **Transitions Page-à-Page** - Navigation fluide
- 🚧 **Performance Mobile** - Optimisations
- 🚧 **Design System** - Cohérence visuelle

## 🚀 **Installation & Développement**

### Prérequis
- **PHP 8.2+**
- **Node.js 18+**
- **Composer**
- **Symfony CLI** (optionnel)

### Installation
```bash
# Cloner le repository
git clone [url-repo]
cd Portfolio_Adrien_Pago

# Installer les dépendances PHP
composer install

# Installer les dépendances Node.js
npm install

# Compiler les assets
npm run dev
```

### Développement
```bash
# Mode développement avec watch
npm run watch

# Serveur de développement Symfony
symfony serve

# Ou avec PHP built-in
php -S localhost:8000 -t public/
```

### Production
```bash
# Build optimisé pour production
npm run build

# Optimiser l'autoloader Composer
composer dump-autoload --optimize

```
### Base de donnée
```bash
# Création de la base de données
php bin/console doctrine:database:create

# Exécution des migrations existantes
php bin/console doctrine:migrations:migrate

# Vérification du statut des migrations
php bin/console doctrine:migrations:status

# Si vous voulez créer une nouvelle migration
php bin/console make:migration

#cd ..Vider et recréer la base de données
php bin/console doctrine:database:drop --force
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

## 📱 **Spécificités Mobile**

### Animations Fluides
- **Transform CSS** - Hardware acceleration
- **Intersection Observer** - Animations au scroll
- **Touch Events** - Interactions tactiles natives
- **CSS Grid/Flexbox** - Layouts responsives

### Performance
- **Lazy Loading** - Chargement différé des images
- **Code Splitting** - Webpack chunks
- **Service Workers** - Cache intelligent
- **Critical CSS** - CSS critique inline

## 🎯 **Sections du Portfolio**

1. **🏠 Accueil** - Hero section avec animations
2. **👤 Profil** - Présentation personnelle
3. **💼 Projets** - Showcase avec filtres
4. **📰 Veille** - Articles technologiques
5. **📧 Contact** - Formulaire interactif

## 🌟 **Fonctionnalités Avancées Mobile**

- **Swipe Gestures** - Navigation tactile
- **Pull-to-Refresh** - Actualisation native
- **Parallax Mobile** - Effets visuels optimisés
- **Touch Feedback** - Vibrations tactiles
- **Progressive Web App** - Installation mobile

## 🔧 **Configuration**

### Webpack Encore
Configuration dans `webpack.config.js` pour :
- Compilation SCSS avec variables
- Transpilation JavaScript
- Optimisation des images
- Hot reload en développement

### Variables SCSS
Gestion centralisée dans `_variables.scss` :
- Couleurs de marque
- Breakpoints responsive
- Espacements modulaires
- Transitions et animations

## 📊 **Performance**

### Métriques Cibles
- **LCP** < 2.5s (Largest Contentful Paint)
- **FID** < 100ms (First Input Delay)
- **CLS** < 0.1 (Cumulative Layout Shift)
- **TTI** < 3.5s (Time to Interactive)

### Optimisations
- Images WebP/AVIF avec fallback
- Fonts préchargées
- CSS/JS minifiés
- Cache stratégies

## 🔄 **Plan de Refonte Mobile**

Voir le fichier `PLAN_ACTION.md` pour le détail de la roadmap de développement.

## 🤝 **Contribution**

Structure de développement modulaire permettant :
- Ajout facile de nouvelles pages
- Styles scopés par composant
- JavaScript non-intrusif
- Tests unitaires (à venir)

## 📞 **Contact**

**Adrien Pago** - Développeur Full Stack  
Portfolio : [URL du portfolio]  
Email : [votre-email]  
LinkedIn : [votre-linkedin]

# Créer le service
sudo cat > /etc/systemd/system/portfolio-messenger.service << 'EOF'
[Unit]
Description=Portfolio Symfony Messenger Worker
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/vhosts/adrien-pago-portfolio.fr/httpdocs
ExecStart=/usr/bin/php bin/console messenger:consume --env=prod --time-limit=3600 --memory-limit=128M
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Activer et démarrer le service
sudo systemctl daemon-reload
sudo systemctl enable portfolio-messenger
sudo systemctl start portfolio-messenger
sudo systemctl status portfolio-messenger

---

*Portfolio en constante évolution - Dernière mise à jour : Décembre 2024* 
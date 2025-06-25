# 🤖 Système de Veille Automatisée RSS

## 📋 Vue d'ensemble

Le portfolio d'Adrien Pago intègre maintenant un **système de veille technologique automatisée** qui récupère et affiche les derniers articles des meilleures sources RSS dans 3 catégories :

- **🤖 IA** : Intelligence Artificielle & Machine Learning
- **📱 Mobile** : Développement mobile (Android, iOS, Flutter, React Native)
- **⚙️ DevOps** : Conteneurisation, orchestration, CI/CD

## 🏗️ Architecture

### 📁 Structure des fichiers

```
src/
├── Entity/
│   └── Article.php              # Entité pour les articles de veille
├── Repository/
│   └── ArticleRepository.php    # Repository avec requêtes optimisées
├── Service/
│   ├── RssService.php          # Parser RSS complet
│   └── VeilleService.php       # Service temporaire (articles simulés)
└── Twig/
    └── VeilleExtension.php     # Extension Twig pour utilitaires

templates/veille/
├── index.html.twig             # Page principale avec filtres
├── show.html.twig              # Détail d'un article
└── _article_card.html.twig     # Carte d'article pour l'accueil

migrations/
└── Version20250625145000.php   # Migration table articles

assets/styles/
└── _veille.scss               # Styles pour les cartes et badges
```

## 🎯 Fonctionnalités Actuelles

### ✅ Phase 1 - Interface et Simulation (COMPLÉTÉE)

- **Articles simulés** avec données réalistes
- **Interface moderne** avec badges de catégorie colorés
- **Cartes d'article** responsives avec actions multiples
- **Filtrage par catégorie** (IA, Mobile, DevOps)
- **Intégration accueil** : 2 derniers articles automatiques
- **Extension Twig** pour helpers d'affichage

### 📊 Données affichées

Chaque article contient :
- ✅ **Titre** et **description** tronquée intelligemment
- ✅ **Date de publication** formatée (dd/mm/yyyy)
- ✅ **Catégorie** avec icône et couleur dédiée
- ✅ **Source** de l'article
- ✅ **Lien externe** vers l'article original
- ✅ **URL unique** pour chaque article

### 🎨 Interface Utilisateur

#### Badges de Catégorie
- **IA** : Rouge (#e74c3c) avec icône robot
- **Mobile** : Bleu (#3498db) avec icône mobile
- **DevOps** : Vert (#2ecc71) avec icône serveur

#### Actions par Article
- **Bouton principal** : "Lire l'article" (lien externe)
- **Bouton secondaire** : "Détails" (page interne)

#### Responsive Design
- **Mobile** : Cartes empilées, actions en colonne
- **Desktop** : Grille 2 colonnes, actions côte à côte

## 🚀 Phase 2 - Automatisation RSS (EN DÉVELOPPEMENT)

### 📡 Sources RSS Configurées

#### 🤖 Intelligence Artificielle
```php
'IA' => [
    'https://feeds.feedburner.com/AITopics' => 'AI Topics',
    'https://machinelearningmastery.com/feed/' => 'ML Mastery',
    'https://www.analyticsvidhya.com/feed/' => 'Analytics Vidhya',
]
```

#### 📱 Mobile
```php
'Mobile' => [
    'https://android-developers.googleblog.com/feeds/posts/default' => 'Android Developers',
    'https://flutter.dev/feed.xml' => 'Flutter',
    'https://blog.expo.dev/feed' => 'Expo',
]
```

#### ⚙️ DevOps
```php
'DevOps' => [
    'https://aws.amazon.com/blogs/devops/feed/' => 'AWS DevOps',
    'https://blog.docker.com/feed/' => 'Docker',
    'https://kubernetes.io/feed.xml' => 'Kubernetes',
]
```

### 🗄️ Base de Données

#### Table `articles`
```sql
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    url VARCHAR(500) NOT NULL,
    category VARCHAR(50) NOT NULL,
    published_at DATETIME NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    source VARCHAR(100),
    guid VARCHAR(255) UNIQUE NOT NULL,
    content LONGTEXT,
    image VARCHAR(500),
    INDEX idx_category (category),
    INDEX idx_published_at (published_at)
);
```

#### Optimisations
- **Index sur catégorie** pour filtrage rapide
- **Index sur date** pour tri chronologique
- **GUID unique** pour éviter les doublons
- **Limitation** : 100 articles max par catégorie

## 🔧 Services Développés

### 📡 RssService
- **Parser RSS/Atom** multi-format
- **Gestion d'erreurs** robuste avec logging
- **Extraction d'images** depuis flux
- **Sanitization** des données HTML
- **Test de connectivité** des flux

### 📚 VeilleService (Temporaire)
- **Articles simulés** pour tests d'interface
- **Méthodes utilitaires** pour affichage
- **Compatibilité** avec l'interface finale

### 🎨 VeilleExtension (Twig)
- `veille_get_category_icon()` - Icône FontAwesome
- `veille_get_category_color()` - Couleur hexadecimale
- `veille_format_date()` - Format dd/mm/yyyy
- `veille_get_short_description()` - Troncature intelligente

## 📋 TODO - Prochaines étapes

### 🔄 Automatisation Complète
1. **Commande Symfony** pour récupération RSS
2. **Cron job** pour exécution automatique
3. **Migration** vers vraies données RSS
4. **Système de cache** pour performance

### ⚡ Optimisations
1. **Pagination** pour nombreux articles
2. **Recherche textuelle** dans articles
3. **Favoris utilisateur** (optionnel)
4. **Notifications** nouveaux articles

### 🎯 Configuration VPS
1. **Base de données** MySQL/PostgreSQL
2. **Cron job** toutes les 2 heures
3. **Logs** de récupération RSS
4. **Monitoring** flux défaillants

## 📊 Métriques Actuelles

### Interface
- **6 articles simulés** (2 par catégorie)
- **3 catégories** actives
- **100% responsive** mobile/desktop
- **Performance** : < 2s chargement page

### Articles Affichés
- **Accueil** : 2 derniers articles toutes catégories
- **Page veille** : Jusqu'à 20 articles avec filtres
- **Auto-refresh** : Manuel (futur : automatique)

## 🎨 Design Pattern

### Couleurs Catégories
```scss
$category-colors: (
    'IA': #e74c3c,      // Rouge vif
    'Mobile': #3498db,   // Bleu clair
    'DevOps': #2ecc71    // Vert moderne
);
```

### Icônes FontAwesome
```scss
$category-icons: (
    'IA': 'fas fa-robot',
    'Mobile': 'fas fa-mobile-alt', 
    'DevOps': 'fas fa-server'
);
```

## 🔍 Tests et Débogage

### Vérification Interface
1. **Page d'accueil** → Section "Dernière Veille Technologique"
2. **Page /veille** → Grille d'articles avec filtres
3. **Mobile** → Responsive design validé
4. **Couleurs** → Badges de catégorie distincts

### Commandes Utiles
```bash
# Compilation assets
npm run build

# Server local
symfony server:start

# Logs Symfony
tail -f var/log/dev.log
```

---

*Dernière mise à jour : 25 juin 2025*
*Status : Phase 1 complétée ✅ | Phase 2 en développement 🚧* 
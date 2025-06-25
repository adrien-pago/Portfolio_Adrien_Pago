# 📋 Configuration des Liens - Portfolio Adrien Pago

## 🎯 Vue d'ensemble

Ce système permet de gérer tous les liens (réseaux sociaux, CV, contact) de manière centralisée pour éviter la duplication et faciliter la maintenance.

## 📁 Fichiers concernés

- `config/packages/app_links.yaml` - Configuration des liens
- `src/Service/LinkService.php` - Service pour accéder aux liens
- `src/Twig/LinkExtension.php` - Extension Twig pour les templates
- `templates/_partials/social_links.html.twig` - Template réutilisable

---

## ⚙️ Configuration

### 1. Éditer tes liens personnels

Ouvre le fichier `config/packages/app_links.yaml` et modifie les liens :

```yaml
parameters:
    app.links:
        social:
            github: 'https://github.com/TON-USERNAME'
            linkedin: 'https://linkedin.com/in/TON-PROFILE'
            instagram: 'https://instagram.com/TON-COMPTE'
            twitter: 'https://twitter.com/TON-COMPTE'  # Optionnel
        
        documents:
            cv: '%kernel.project_dir%/public/CV.pdf'
            cv_url: '/CV.pdf'
        
        contact:
            email: 'ton.email@example.com'
            phone: '+33 6 XX XX XX XX'  # Optionnel
```

### 2. Remplace par tes vraies informations

Exemple concret :
```yaml
social:
    github: 'https://github.com/adrienpago'
    linkedin: 'https://linkedin.com/in/adrien-pago'
    instagram: 'https://instagram.com/adrien.dev'

contact:
    email: 'adrien.pago@gmail.com'
    phone: '+33 6 12 34 56 78'
```

---

## 🚀 Utilisation dans les templates

### Variables globales disponibles partout

```twig
{# Lien du CV #}
<a href="{{ cv_url }}" download>Télécharger mon CV</a>

{# Email de contact #}
<a href="mailto:{{ contact_email }}">Me contacter</a>

{# Tous les liens sociaux #}
{% for platform, url in social_links %}
    <a href="{{ url }}">{{ platform|title }}</a>
{% endfor %}
```

### Fonctions Twig personnalisées

```twig
{# Vérifier si un lien existe #}
{% if has_social_link('github') %}
    <a href="{{ get_social_link('github') }}">GitHub</a>
{% endif %}

{# Lien direct #}
<a href="{{ get_social_link('linkedin') }}">LinkedIn</a>

{# URL du CV #}
<a href="{{ get_cv_url() }}" download>CV</a>
```

### Template partiel réutilisable

```twig
{# Liens sociaux simples (icônes seulement) #}
{% include '_partials/social_links.html.twig' %}

{# Liens sociaux avec texte #}
{% include '_partials/social_links.html.twig' with {
    'show_text': true
} %}

{# Liens sociaux avec classe CSS personnalisée #}
{% include '_partials/social_links.html.twig' with {
    'class': 'my-custom-class'
} %}
```

---

## 💡 Exemples d'utilisation

### Dans la sidebar
```twig
<div class="social-links">
    {% include '_partials/social_links.html.twig' %}
</div>
```

### Dans le footer
```twig
<footer>
    <div class="footer-social">
        {% include '_partials/social_links.html.twig' with {
            'show_text': true,
            'class': 'footer-links'
        } %}
    </div>
</footer>
```

### Page de contact
```twig
<div class="contact-info">
    <p>Email : <a href="mailto:{{ contact_email }}">{{ contact_email }}</a></p>
    
    <div class="social-networks">
        {% if has_social_link('linkedin') %}
            <a href="{{ get_social_link('linkedin') }}" class="btn btn-linkedin">
                <i class="fab fa-linkedin"></i> Me suivre sur LinkedIn
            </a>
        {% endif %}
    </div>
</div>
```

### Bouton CV dynamique
```twig
<a href="{{ cv_url }}" 
   class="btn btn-primary" 
   download="CV_Adrien_Pago.pdf">
    <i class="fas fa-download"></i>
    Télécharger mon CV
</a>
```

---

## 🔧 Avantages de ce système

✅ **Centralisé** : Un seul endroit pour modifier tous les liens
✅ **Réutilisable** : Templates partiels utilisables partout
✅ **Conditionnel** : Affiche seulement les liens définis
✅ **Flexible** : Fonctions Twig pour tous les cas d'usage
✅ **Maintenable** : Facile à mettre à jour

---

## 🎨 Personnalisation CSS

Les classes CSS disponibles pour styliser :

```scss
.social-links {
    .social-link {
        // Style général
        
        &.github { /* Style spécifique GitHub */ }
        &.linkedin { /* Style spécifique LinkedIn */ }
        &.instagram { /* Style spécifique Instagram */ }
        &.twitter { /* Style spécifique Twitter */ }
        &.email { /* Style spécifique Email */ }
    }
}
```

---

## ⚡ Après modifications

Après avoir modifié `app_links.yaml`, redémarre ton serveur Symfony :

```bash
symfony server:stop
symfony server:start
```

Ou vide le cache en développement :
```bash
php bin/console cache:clear
``` 
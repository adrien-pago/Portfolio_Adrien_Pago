#!/bin/bash

echo "🔧 CORRECTION ROUTING APACHE - Portfolio Adrien Pago"
echo "==================================================="

# 1. Créer le fichier .htaccess principal dans le répertoire racine
echo "📁 Création .htaccess racine..."
cat > .htaccess << 'EOF'
# Redirection vers le répertoire public
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/public/
RewriteRule ^(.*)$ public/$1 [L]
EOF

# 2. Créer le fichier .htaccess dans public/ pour Symfony
echo "📁 Création .htaccess public/..."
cat > public/.htaccess << 'EOF'
DirectoryIndex index.php

<IfModule mod_negotiation.c>
    Options -MultiViews
</IfModule>

<IfModule mod_rewrite.c>
    RewriteEngine On

    # Handle Angular routes
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]

    # Redirect to index.php
    RewriteCond %{REQUEST_URI}::$0 ^(/.+)/(.*)::\2$
    RewriteRule .* - [E=BASE:%1]

    # Sets the HTTP_AUTHORIZATION header removed by Apache
    RewriteCond %{HTTP:Authorization} .+
    RewriteRule ^ - [E=HTTP_AUTHORIZATION:%0]

    RewriteCond %{ENV:REDIRECT_STATUS} =""
    RewriteRule ^index\.php(?:/(.*)|$) %{ENV:BASE}/$1 [R=301,L]

    # If the requested filename exists, simply serve it.
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ %{ENV:BASE}/index.php [L]
</IfModule>

<IfModule !mod_rewrite.c>
    <IfModule mod_alias.c>
        RedirectMatch 307 ^/$ /index.php/
    </IfModule>
</IfModule>
EOF

# 3. Vérifier que index.php existe
echo "🔍 Vérification index.php..."
if [ ! -f "public/index.php" ]; then
    echo "❌ index.php manquant! Création d'un index.php basique..."
    cat > public/index.php << 'EOF'
<?php

use App\Kernel;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
EOF
fi

# 4. Corriger les permissions finales
echo "🔒 Correction permissions finales..."
sudo chown -R www-data:www-data public/ var/
sudo chmod -R 755 public/
sudo chmod -R 775 var/
sudo chmod 644 .htaccess
sudo chmod 644 public/.htaccess
sudo chmod 644 public/index.php

# 5. Nettoyer le cache Symfony
echo "🧹 Nettoyage cache Symfony..."
sudo rm -rf var/cache/prod/
sudo -u www-data php bin/console cache:clear --env=prod --no-debug
sudo -u www-data php bin/console cache:warmup --env=prod --no-debug

# 6. Vérifier les routes
echo "📋 Vérification des routes..."
sudo -u www-data php bin/console debug:router --env=prod | head -10

echo ""
echo "✅ Configuration Apache/Routing corrigée !"
echo "🌐 Testez maintenant vos routes :"
echo "   - / (home)"
echo "   - /contact"
echo "   - /projects" 

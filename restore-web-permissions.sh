#!/bin/bash

echo "🔧 RESTAURATION PERMISSIONS WEB - Portfolio Adrien Pago"
echo "======================================================="

# 1. Restaurer les permissions pour le serveur web
echo "🌐 Restauration permissions serveur web..."
sudo chown -R www-data:www-data public/
sudo chown -R www-data:www-data var/

# 2. Permissions spécifiques pour le fonctionnement web
sudo chmod -R 755 public/
sudo chmod -R 775 var/

# 3. Permissions critiques pour la base de données
sudo chmod 664 var/data.db 2>/dev/null || true

# 4. Recompiler les assets en production
echo "⚙️  Recompilation des assets..."
sudo -u www-data php bin/console asset-map:compile --env=prod

# 5. Nettoyer le cache
echo "🧹 Nettoyage du cache..."
sudo rm -rf var/cache/prod/
sudo -u www-data php bin/console cache:clear --env=prod --no-debug
sudo -u www-data php bin/console cache:warmup --env=prod --no-debug

# 6. Vérification finale
echo "🔍 Vérification finale..."
ls -la public/ | head -5
ls -la var/data.db 2>/dev/null || echo "Base de données OK"

echo ""
echo "✅ Permissions web restaurées !"
echo "🌐 Votre site devrait fonctionner correctement" 
#!/bin/bash

echo "🔧 CORRECTION BASE READONLY - Portfolio Adrien Pago"
echo "=================================================="

# 1. Vérifier l'état actuel de la base
echo "🔍 État actuel de la base de données..."
ls -la var/data.db 2>/dev/null || echo "❌ Base de données introuvable"

# 2. Corriger les permissions de var/ et de la base
echo "🔒 Correction des permissions base de données..."
sudo chown -R www-data:www-data var/
sudo chmod -R 775 var/
sudo chmod 664 var/data.db 2>/dev/null || echo "⚠️ Base sera corrigée au prochain accès"

# 3. Si la base n'existe pas, la recréer
if [ ! -f "var/data.db" ]; then
    echo "🗄️ Recréation de la base de données..."
    sudo -u www-data php bin/console doctrine:database:create --env=prod --no-interaction
    sudo -u www-data php bin/console doctrine:migrations:migrate --env=prod --no-interaction
    sudo chmod 664 var/data.db
fi

# 4. Test de la base
echo "🧪 Test de la base de données..."
sudo -u www-data php bin/console dbal:run-sql "SELECT 1" --env=prod 2>/dev/null && echo "✅ Base OK" || echo "⚠️ Problème de base"

# 5. Vérification finale
echo "📋 Vérification finale..."
ls -la var/data.db
whoami=$(whoami)
sudo -u www-data touch var/test_write.txt 2>/dev/null && sudo rm var/test_write.txt && echo "✅ Écriture var/ OK" || echo "❌ Écriture var/ FAILED"

echo ""
echo "✅ Base de données corrigée !"
echo "📝 Le formulaire de contact devrait maintenant fonctionner" 
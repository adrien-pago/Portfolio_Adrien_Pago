#!/bin/bash

echo "🚨 CORRECTION ULTIME PERMISSIONS - Portfolio Adrien Pago"
echo "========================================================"

# 1. Identifier tous les utilisateurs potentiels
echo "🔍 Identification des utilisateurs..."
echo "Utilisateur actuel: $(whoami)"
echo "UID actuel: $(id -u)"
echo "Groupes: $(groups)"

# 2. Forcer la suppression complète du répertoire public
echo "💥 Suppression forcée du répertoire public..."
sudo rm -rf public/
mkdir -p public/
mkdir -p public/build
mkdir -p public/uploads

# 3. Permissions ultra-permissives temporaires
echo "🔓 Permissions ultra-permissives..."
sudo chmod -R 777 public/
sudo chown -R $(whoami):$(whoami) public/

# 4. Créer un fichier test
echo "🧪 Test de création de fichier..."
touch public/test.txt && echo "✅ Écriture OK" || echo "❌ Écriture FAILED"

# 5. Vérifier les attributs du système de fichiers
echo "📋 Attributs système de fichiers..."
lsattr public/ 2>/dev/null || echo "lsattr non disponible"

# 6. Permissions alternatives si Plesk utilise un utilisateur spécifique
echo "🔧 Permissions alternatives..."
sudo chown -R psaadm:psaadm public/ 2>/dev/null || true
sudo chown -R apache:apache public/ 2>/dev/null || true
sudo chown -R www-data:www-data public/ 2>/dev/null || true
sudo chown -R adrien-pago-portfoli_m3xt23djqec:psaserv public/ 2>/dev/null || true

# 7. Permissions finales
sudo chmod -R 777 public/

echo ""
echo "🔍 État final:"
ls -la public/
echo ""
echo "✅ TESTEZ MAINTENANT LE DÉPLOIEMENT"
echo "Si ça ne marche toujours pas, le problème vient de Plesk/Git lui-même" 
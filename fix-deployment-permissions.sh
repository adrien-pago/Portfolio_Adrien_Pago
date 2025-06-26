#!/bin/bash

echo "🔧 CORRECTION PERMISSIONS DÉPLOIEMENT - Portfolio Adrien Pago"
echo "============================================================"

# 1. Identifier l'utilisateur actuel du déploiement
DEPLOY_USER=$(whoami)
echo "👤 Utilisateur de déploiement: $DEPLOY_USER"

# 2. Corriger les permissions du répertoire public pour permettre le déploiement
echo "🔒 Correction permissions déploiement..."
sudo chown -R $DEPLOY_USER:$DEPLOY_USER public/
sudo chmod -R 755 public/

# 3. Corriger les permissions des assets spécifiquement
sudo chown -R $DEPLOY_USER:$DEPLOY_USER public/build/ 2>/dev/null || true
sudo chown -R $DEPLOY_USER:$DEPLOY_USER public/uploads/ 2>/dev/null || true
sudo chown $DEPLOY_USER:$DEPLOY_USER public/index.php 2>/dev/null || true
sudo chown $DEPLOY_USER:$DEPLOY_USER public/CV.pdf 2>/dev/null || true

# 4. Donner les permissions pour écriture/suppression
sudo chmod -R 775 public/
sudo chmod 664 public/index.php 2>/dev/null || true

echo "✅ Permissions corrigées pour le déploiement !"
echo ""
echo "📋 Maintenant vous pouvez déployer avec Git"
echo "📋 Après le déploiement, exécutez: ./restore-web-permissions.sh" 
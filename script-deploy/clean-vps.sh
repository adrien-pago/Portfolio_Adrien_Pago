#!/bin/bash

echo "🧹 NETTOYAGE COMPLET VPS - Portfolio Adrien Pago"
echo "================================================"
echo "⚠️  Ce script va SUPPRIMER COMPLÈTEMENT le portfolio du VPS"
echo ""

# Demander confirmation
read -p "🤔 Voulez-vous vraiment TOUT supprimer du VPS? (tapez 'SUPPRIMER' pour confirmer): " confirm
if [ "$confirm" != "SUPPRIMER" ]; then
    echo "❌ Annulé - Vous devez taper exactement 'SUPPRIMER' pour confirmer"
    exit 1
fi

echo ""
echo "💥 SUPPRESSION EN COURS..."
echo "========================="

# Aller dans le répertoire parent
cd /var/www/vhosts/adrien-pago-portfolio.fr/

# Supprimer tout le contenu lié au portfolio
echo "🗑️  Suppression du dossier httpdocs..."
rm -rf httpdocs/

echo "🗑️  Suppression des fichiers du projet éparpillés..."
rm -f composer.json composer.lock package.json package-lock.json
rm -rf public/ var/ vendor/ src/ templates/ config/ bin/ assets/
rm -rf migrations/ tests/ translations/ docs/ script-deploy/
rm -f symfony.lock webpack.config.js postcss.config.js importmap.php
rm -f phpunit.xml.dist .env .htaccess README.md .gitignore
rm -rf .git/
rm -f compose.yaml compose.override.yaml

echo "🗑️  Nettoyage des caches temporaires..."
rm -rf /tmp/portfolio-* 2>/dev/null || true

echo "✅ SUPPRESSION TERMINÉE !"
echo "========================"
echo ""
echo "📋 État final du répertoire :"
ls -la
echo ""
echo "🎯 MAINTENANT :"
echo "   1. Reconnectez-vous à Plesk"
echo "   2. Déployez depuis Git normalement"
echo "   3. Configurez le document root sur httpdocs/public"
echo "   4. Créez un fichier .env en production"
echo ""
echo "✨ VPS PROPRE - Prêt pour un nouveau déploiement !" 
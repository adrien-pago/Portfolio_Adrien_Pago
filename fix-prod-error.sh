#!/bin/bash

echo "🔧 CORRECTION ERREUR 500 - Portfolio Adrien Pago"
echo "==============================================="

# 1. Copier la nouvelle configuration
echo "📁 Mise à jour configuration..."
cp env.txt .env

echo "🧹 Suppression complète du cache..."
rm -rf var/cache/*
rm -rf var/log/*

echo "🔧 Reconstruction du cache de production..."
php bin/console cache:clear --env=prod --no-debug
php bin/console cache:warmup --env=prod --no-debug

echo "⚙️  Reinstallation des assets..."
php bin/console asset-map:compile --env=prod

echo "🔒 Correction des permissions..."
chmod -R 755 var/
chmod -R 755 public/
chown -R www-data:www-data var/ public/ 2>/dev/null || true

echo "🔍 Vérification de la configuration..."
php bin/console about --env=prod

echo "🧪 Test du mailer..."
php bin/console debug:container mailer --env=prod

echo "📋 Vérification des routes..."
php bin/console debug:router --env=prod | grep contact

echo ""
echo "✅ Correction terminée !"
echo ""
echo "🔍 Si l'erreur persiste, vérifiez :"
echo "- Les logs Apache : tail -f /var/log/apache2/error.log"
echo "- Les logs Symfony : tail -f var/log/prod.log"
echo "- Les permissions : ls -la var/" 
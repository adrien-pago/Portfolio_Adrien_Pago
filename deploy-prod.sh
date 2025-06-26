#!/bin/bash

echo "🚀 Déploiement en PRODUCTION - Portfolio Adrien Pago"
echo "=================================================="

# 1. Copier le fichier de configuration
echo "📁 Configuration de l'environnement..."
cp env.txt .env

# 2. Générer une clé secrète sécurisée
echo "🔐 Génération de la clé secrète..."
APP_SECRET=$(openssl rand -hex 16)
sed -i "s/your_secret_key_here_32_characters_min/$APP_SECRET/" .env

echo "⚙️  Installation des dépendances..."
composer install --no-dev --optimize-autoloader

echo "🏗️  Construction des assets..."
npm install --production
npm run build

echo "🗄️  Mise à jour de la base de données..."
php bin/console doctrine:migrations:migrate --no-interaction

echo "🧹 Nettoyage du cache..."
php bin/console cache:clear --env=prod
php bin/console cache:warmup --env=prod

echo "🔧 Optimisation des permissions..."
chmod -R 755 var/
chmod -R 755 public/uploads/

echo "✅ Déploiement terminé !"
echo "📊 Vérification de l'état:"
echo "- Environnement: $(php bin/console about --env=prod | grep Environment)"
echo "- Debug: $(php bin/console about --env=prod | grep Debug)"

echo ""
echo "🎉 Votre application est maintenant en PRODUCTION !"
echo "🌐 Accessible sur votre VPS" 
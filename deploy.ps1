# deploy.ps1

# 1. Installer les dépendances si besoin
npm install

# 2. Build des assets
npm run build

# 3. Ajouter les fichiers de build
git add public/build/

# 4. Commit (seulement s'il y a des changements)
if (-not (git diff --cached --quiet)) {
    git commit -m "Auto: build and deploy"
} else {
    Write-Host "Rien à commit."
}

# 5. Push vers le dépôt
git push

Write-Host "Déploiement terminé avec succès !"

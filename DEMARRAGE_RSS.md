# 🚀 Guide de Démarrage Rapide - Veille RSS

## ⚡ Configuration initiale (1 minute)

### 1️⃣ **Configuration Base de Données**
```bash
# Copie la configuration SQLite du fichier env.txt vers ton .env
# Ajoute cette ligne à ton .env :
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
```

### 2️⃣ **Création de la base de données**
```bash
# Créer la base SQLite
php bin/console doctrine:database:create

# Exécuter la migration
php bin/console doctrine:migrations:migrate
```

### 3️⃣ **Test de la commande RSS (mode test)**
```bash
# Tester sans sauvegarder (mode test)
php bin/console app:fetch-rss --test

# Récupérer vraiment les articles
php bin/console app:fetch-rss
```

## 📱 **Commandes disponibles**

### 🔍 **Mode Test (recommandé d'abord)**
```bash
php bin/console app:fetch-rss --test
```
Affiche les articles qui seraient récupérés sans les sauvegarder

### 📡 **Récupération complète**
```bash
php bin/console app:fetch-rss
```
Récupère les articles de toutes les catégories

### 🎯 **Par catégorie**
```bash
php bin/console app:fetch-rss --category=IA
php bin/console app:fetch-rss --category=Mobile  
php bin/console app:fetch-rss --category=DevOps
```

### 📊 **Avec limite**
```bash
php bin/console app:fetch-rss --limit=5
```
Limite à 5 articles par catégorie

### 🧹 **Nettoyage**
```bash
php bin/console app:fetch-rss --clean
```
Supprime les anciens articles (garde les 100 plus récents par catégorie)

## 🎯 **Résultat Attendu**

Après `php bin/console app:fetch-rss`, tu devrais voir :
```
🤖 Récupération des articles RSS - Veille Technologique

📡 Récupération catégorie : IA
 5/5 [████████████████████████████] 100%
✅ Traités: 5
💾 Sauvegardés: 5
⏭️ Ignorés (doublons): 0

📡 Récupération catégorie : Mobile
 7/7 [████████████████████████████] 100%
✅ Traités: 7
💾 Sauvegardés: 7
⏭️ Ignorés (doublons): 0

📡 Récupération catégorie : DevOps
 6/6 [████████████████████████████] 100%
✅ Traités: 6
💾 Sauvegardés: 6
⏭️ Ignorés (doublons): 0

🎉 Récupération RSS terminée !
📊 Total traités: 18
💾 Total sauvegardés: 18
⏭️ Total ignorés: 0

📈 Statistiques des articles en base
  IA: 5 articles
  Mobile: 7 articles
  DevOps: 6 articles
```

## 🌐 **Test Interface**

Une fois les articles récupérés :
1. **Page d'accueil** → http://127.0.0.1:8000 → Section "Dernière Veille Technologique"
2. **Page veille** → http://127.0.0.1:8000/veille → Tous les articles avec filtres

## 🔄 **Automatisation (Optionnel)**

### Sur Windows (Tâche planifiée)
```bash
# Toutes les 2 heures
schtasks /create /sc hourly /mo 2 /tn "Portfolio RSS" /tr "cd C:\ton\chemin\portfolio && php bin/console app:fetch-rss"
```

### Sur Linux/VPS (Cron)
```bash
# Éditer le crontab
crontab -e

# Ajouter cette ligne (toutes les 2 heures)
0 */2 * * * cd /var/www/portfolio && php bin/console app:fetch-rss >/dev/null 2>&1
```

## 🚨 **En cas de problème**

### ❌ Erreur "Table articles doesn't exist"
```bash
php bin/console doctrine:migrations:migrate
```

### ❌ Erreur "Database not found"
```bash
php bin/console doctrine:database:create
```

### ❌ Aucun article récupéré
```bash
# Teste en mode verbose
php bin/console app:fetch-rss --test -v

# Vérifie la connectivité internet
ping google.com
```

### ❌ Permission denied sur var/data.db
```bash
# Windows
icacls var/data.db /grant Everyone:F

# Linux
chmod 664 var/data.db
chown www-data:www-data var/data.db
```

## 🎯 **Prochaines étapes**

Une fois que ça fonctionne :
1. **Configure l'automatisation** (cron/tâche planifiée)
2. **Déploie sur ton VPS** (même commandes)
3. **Surveille les logs** pour t'assurer que ça fonctionne

---

💡 **Astuce** : Lance d'abord en mode `--test` pour voir ce qui va être récupéré sans impacter ta base ! 
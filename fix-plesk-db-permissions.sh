#!/bin/bash

echo "🔧 CORRECTION PERMISSIONS PLESK DB - Portfolio Adrien Pago"
echo "=========================================================="

# 1. Identifier l'utilisateur Plesk spécifique
PLESK_USER="adrien-pago-portfoli_m3xt23djqec"
PLESK_GROUP="psaserv"

echo "👤 Utilisateur Plesk identifié: $PLESK_USER:$PLESK_GROUP"

# 2. Donner les permissions à l'utilisateur Plesk pour la base
echo "🔒 Attribution permissions Plesk pour la base de données..."
sudo chown $PLESK_USER:$PLESK_GROUP var/data.db 2>/dev/null || echo "⚠️ Utilisateur Plesk non trouvé, essai alternatif..."

# 3. Permissions alternatives pour différents utilisateurs Plesk possibles
echo "🔧 Essais utilisateurs Plesk alternatifs..."
sudo chown psaadm:psaadm var/data.db 2>/dev/null || true
sudo chown apache:apache var/data.db 2>/dev/null || true
sudo chown $PLESK_USER:$PLESK_GROUP var/data.db 2>/dev/null || true

# 4. Permissions pour le répertoire var/ aussi
sudo chown -R $PLESK_USER:$PLESK_GROUP var/ 2>/dev/null || true
sudo chown -R psaadm:psaadm var/ 2>/dev/null || true

# 5. Permissions en écriture pour la base
sudo chmod 664 var/data.db
sudo chmod 775 var/

# 6. Permissions hybrides : à la fois www-data ET utilisateur Plesk
echo "🔄 Permissions hybrides..."
sudo chgrp www-data var/data.db 2>/dev/null || true
sudo chmod 664 var/data.db

# 7. Vérification finale
echo "📋 État final des permissions:"
ls -la var/data.db
ls -la var/ | grep "^d"

echo ""
echo "✅ Permissions Plesk corrigées !"
echo "📝 Testez maintenant le formulaire de contact" 
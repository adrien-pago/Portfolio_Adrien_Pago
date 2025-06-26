# 1. Voir les groupes de votre utilisateur Plesk (pour confirmer)
id adrien-pago-portfoli_m3xt23djqec

# 2. Changer le groupe du fichier data.db pour psacln
sudo chgrp psacln var/data.db

# 3. Vérifier que c'est bien appliqué
ls -la var/data.db

# 4. Optionnel : changer aussi le répertoire var/ si nécessaire
sudo chgrp psacln var/

# 5. Vérification finale
ls -la var/
#!/bin/sh

echo "[INFO] Déploiement : START"
. ./scripts/deploy.credentials;

cat << EOL
[INFO] Déploiement lancé :
	User : ${user}
	Ftp  : ${ftp_deploy_target}
EOL

cd "${source_dir}";
find . -type f -exec \
curl -T {} --ftp-create-dirs ftp://"${ftp_deploy_target}"{} --user ${user}:${password} \;

echo "[INFO] Déploiement : DONE"

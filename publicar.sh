#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

mensagem="${1:-chore: atualiza Order2Stock}"

if [[ -z "$(git status --short)" ]]; then
  echo "Nenhuma alteração para publicar."
  exit 0
fi

git add .
git commit -m "$mensagem"
git push origin main

echo "Publicação enviada. O GitHub Actions vai sincronizar e publicar o site automaticamente." 

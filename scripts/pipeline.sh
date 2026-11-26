#!/usr/bin/env bash
# Pipeline local: mesmas etapas do GitHub Actions (testes -> build -> deploy).
# Se uma etapa falhar, o pipeline para e o deploy NÃO acontece.
set -u
echo "=== PIPELINE Gestor de Tarefas ==="
echo "Data: $(date '+%d/%m/%Y %H:%M:%S')"
echo "Branch: $(git rev-parse --abbrev-ref HEAD) | Commit: $(git rev-parse --short HEAD) - $(git log -1 --format=%s)"
echo
echo "[1/3] Testes automatizados"
if ! npm test --silent; then
  echo
  echo "RESULTADO: FALHA na etapa de testes."
  echo "[2/3] Build: NÃO EXECUTADO"
  echo "[3/3] Deploy: BLOQUEADO (a versão com erro não foi publicada)"
  exit 1
fi
echo
echo "[2/3] Build"
npm run build --silent || { echo "RESULTADO: FALHA no build. Deploy BLOQUEADO."; exit 1; }
echo
echo "[3/3] Deploy"
rm -rf deploy && cp -r dist deploy
echo "Aplicação publicada na pasta deploy/ (versão $(git rev-parse --short HEAD))."
echo
echo "RESULTADO: SUCESSO"

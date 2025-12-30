#!/bin/bash

# Script de deploy para Hostinger
# Usage: ./deploy.sh "mensagem do commit"

set -e

echo "🚀 Iniciando deploy..."

# 1. Verifica se há mudanças
if [ -z "$(git status --porcelain)" ]; then 
  echo "✅ Nenhuma mudança detectada"
else
  # 2. Commit e push
  git add .
  git commit -m "${1:-Update site}"
  git push origin TESTE
  echo "✅ Push concluído"
fi

# 3. Build local
echo "🔨 Fazendo build..."
npm run build

# 4. Compacta o build
echo "📦 Compactando build..."
tar -czf next-build.tar.gz .next

# 5. Envia para o servidor
echo "📤 Enviando para o servidor..."
scp -P 65002 next-build.tar.gz u204926461@82.25.67.1:~/domains/daniel8moraes.com/public_html/

# 6. Descompacta e reinicia no servidor
echo "🔄 Atualizando servidor..."
ssh -p 65002 u204926461@82.25.67.1 << 'EOF'
  cd ~/domains/daniel8moraes.com/public_html
  rm -rf .next
  tar -xzf next-build.tar.gz
  rm next-build.tar.gz
  export PATH=/opt/alt/alt-nodejs20/root/usr/bin:$PATH
  pkill -f "node server.js" || true
  nohup NODE_ENV=production node server.js > app.log 2>&1 &
  echo "✅ Servidor reiniciado"
EOF

# 7. Limpa arquivo local
rm next-build.tar.gz

echo "✅ Deploy concluído! Site atualizado em daniel8moraes.com"

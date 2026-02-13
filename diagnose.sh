#!/bin/bash

# Script de diagnóstico completo para o servidor Hostinger
# Uso: ./diagnose.sh

echo "🔍 Diagnóstico do servidor daniel8moraes.com"
echo "============================================="
echo ""

ssh -p 65002 u204926461@82.25.67.1 << 'ENDSSH'

cd ~/domains/daniel8moraes.com/public_html

echo "📍 Diretório: $(pwd)"
echo ""

# 1. Node.js
echo "=== 1. Node.js ==="
export PATH=/opt/alt/alt-nodejs22/root/usr/bin:$PATH
echo "Versão: $(node -v 2>/dev/null || echo 'NÃO ENCONTRADO')"
echo "NPM: $(npm -v 2>/dev/null || echo 'NÃO ENCONTRADO')"
echo ""

# 2. Arquivos essenciais
echo "=== 2. Arquivos essenciais ==="
for f in server.js package.json .htaccess .next/BUILD_ID node_modules/next/package.json public/dog.glb; do
    if [ -e "$f" ]; then
        echo "  ✅ $f"
    else
        echo "  ❌ $f (FALTANDO!)"
    fi
done
echo ""

# 3. Build do Next.js
echo "=== 3. Build Next.js ==="
if [ -f ".next/BUILD_ID" ]; then
    echo "  BUILD_ID: $(cat .next/BUILD_ID)"
    echo "  Tamanho .next/: $(du -sh .next 2>/dev/null | cut -f1)"
    echo "  Páginas estáticas:"
    ls .next/server/pages/ 2>/dev/null | head -10
else
    echo "  ❌ Build NÃO encontrado! Execute 'npm run build'"
fi
echo ""

# 4. Processos Node.js
echo "=== 4. Processos Node.js ==="
ps aux | grep "[n]ode" | head -10 || echo "  Nenhum processo Node.js"
echo ""

# 5. Uso de memória
echo "=== 5. Memória ==="
free -m 2>/dev/null || echo "  Comando 'free' não disponível"
echo ""

# 6. Espaço em disco
echo "=== 6. Disco ==="
df -h . 2>/dev/null | tail -1
echo "  Uso do projeto: $(du -sh . 2>/dev/null | cut -f1)"
echo ""

# 7. Logs recentes
echo "=== 7. Logs (últimas 30 linhas) ==="
if [ -f "app.log" ]; then
    echo "  Tamanho do log: $(du -sh app.log | cut -f1)"
    echo "  ---"
    tail -30 app.log
else
    echo "  Sem arquivo de log"
fi
echo ""

# 8. .htaccess
echo "=== 8. .htaccess ==="
if [ -f ".htaccess" ]; then
    cat .htaccess
else
    echo "  ❌ .htaccess NÃO encontrado!"
fi
echo ""

# 9. Passenger
echo "=== 9. Passenger ==="
if [ -f "tmp/restart.txt" ]; then
    echo "  restart.txt: $(ls -la tmp/restart.txt)"
else
    echo "  tmp/restart.txt não existe"
fi
echo ""

# 10. Teste HTTP local
echo "=== 10. Teste HTTP ==="
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 http://localhost:3000/ 2>/dev/null)
echo "  localhost:3000 → HTTP $HTTP_CODE"

# Teste externo (se curl suportar)
HTTP_EXT=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 https://daniel8moraes.com/ 2>/dev/null)
echo "  daniel8moraes.com → HTTP $HTTP_EXT"

echo ""
echo "============================================="
echo "Diagnóstico concluído!"

ENDSSH

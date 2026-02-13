#!/bin/bash

# Script para reiniciar o servidor na Hostinger via SSH
# Usa Passenger (método nativo do Hostinger) - NÃO usa nohup

echo "🔄 Conectando ao servidor Hostinger..."

ssh -p 65002 u204926461@82.25.67.1 << 'ENDSSH'

# Navegar para o diretório
cd ~/domains/daniel8moraes.com/public_html

echo "📋 Diagnóstico do servidor:"
echo "----------------------------"

# Versão do Node.js
export PATH=/opt/alt/alt-nodejs22/root/usr/bin:$PATH
echo "Node.js: $(node -v)"
echo "NPM: $(npm -v)"

# Verificar se .next existe
if [ -d ".next" ]; then
    echo "✅ Build .next/ encontrado"
    echo "   Tamanho: $(du -sh .next | cut -f1)"
else
    echo "❌ ERRO: .next/ NÃO encontrado! Rode 'npm run build' ou faça deploy."
fi

# Verificar se node_modules existe
if [ -d "node_modules" ]; then
    echo "✅ node_modules/ encontrado"
else
    echo "❌ ERRO: node_modules/ NÃO encontrado! Rode 'npm install --production'"
fi

# Verificar se server.js existe
if [ -f "server.js" ]; then
    echo "✅ server.js encontrado"
else
    echo "❌ ERRO: server.js NÃO encontrado!"
fi

# Verificar processos Node.js existentes
echo ""
echo "🔍 Processos Node.js ativos:"
ps aux | grep "node" | grep -v grep || echo "Nenhum processo Node.js encontrado"

echo ""
echo "🔍 Últimas linhas do log:"
if [ -f app.log ]; then
    tail -20 app.log
else
    echo "Nenhum arquivo de log encontrado"
fi

echo ""
echo "🛑 Matando processos Node.js manuais (se houver)..."
pkill -f "node server.js" 2>/dev/null
sleep 1

echo ""
echo "🚀 Reiniciando via Passenger..."
mkdir -p tmp
touch tmp/restart.txt

echo ""
echo "⏳ Aguardando Passenger reiniciar (10s)..."
sleep 10

echo ""
echo "🌐 Testando resposta do site..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 http://localhost:3000/ 2>/dev/null)
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Servidor respondendo com HTTP $HTTP_CODE"
elif [ -n "$HTTP_CODE" ] && [ "$HTTP_CODE" != "000" ]; then
    echo "⚠️  Servidor respondeu com HTTP $HTTP_CODE"
else
    echo "ℹ️  Teste local não respondeu (pode ser normal com Passenger - teste via URL externa)"
fi

echo ""
echo "📋 Verificando .htaccess:"
head -5 .htaccess 2>/dev/null || echo "Sem .htaccess"

echo ""
echo "✅ Reinício concluído! Aguarde ~30 segundos para o site estar disponível."

ENDSSH

echo ""
echo "✨ Comando executado! Teste o site em: https://daniel8moraes.com"

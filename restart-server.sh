#!/bin/bash

# Script para reiniciar o servidor na Hostinger via SSH

echo "🔄 Conectando ao servidor Hostinger..."

ssh -p 65002 u204926461@82.25.67.1 << 'ENDSSH'

# Navegar para o diretório
cd ~/domains/daniel8moraes.com/public_html

echo "📋 Status atual do servidor:"
echo "----------------------------"

# Verificar processos
echo "Processos Node.js:"
ps aux | grep "node server.js" | grep -v grep || echo "Nenhum processo encontrado"

echo ""
echo "🔍 Verificando logs..."
if [ -f app.log ]; then
    echo "Últimas 10 linhas do log:"
    tail -10 app.log
else
    echo "Nenhum arquivo de log encontrado"
fi

echo ""
echo "🛑 Matando processos antigos..."
pkill -f "node server.js" 2>/dev/null
sleep 2

echo ""
echo "🚀 Iniciando servidor..."
export PATH=/opt/alt/alt-nodejs22/root/usr/bin:$PATH
export NODE_ENV=production
export PORT=3000

nohup node server.js > app.log 2>&1 &

sleep 3

echo ""
echo "✅ Servidor reiniciado!"
echo "Verificando se está rodando:"
ps aux | grep "node server.js" | grep -v grep

echo ""
echo "🔄 Reiniciando Passenger..."
mkdir -p tmp
touch tmp/restart.txt

echo ""
echo "✅ Pronto! Aguarde 10-30 segundos para o site voltar ao ar."

ENDSSH

echo ""
echo "✨ Comando executado! Teste o site em: https://daniel8moraes.com"

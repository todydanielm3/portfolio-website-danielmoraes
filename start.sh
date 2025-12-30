#!/bin/bash

# Script de inicialização para Hostinger
export PATH=/opt/alt/alt-nodejs22/root/usr/bin:$PATH
export NODE_ENV=production
export PORT=3000

# Mata processos antigos
pkill -f "node server.js" 2>/dev/null

# Aguarda um momento
sleep 2

# Inicia o servidor
cd /home/u204926461/domains/daniel8moraes.com/public_html
nohup node server.js > /home/u204926461/domains/daniel8moraes.com/public_html/app.log 2>&1 &

echo "Server started on port $PORT"

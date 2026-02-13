#!/bin/bash

# Script de inicialização para Hostinger
# Usado pelo Passenger como startup script (via .htaccess)
# Também pode ser executado manualmente para debug

export PATH=/opt/alt/alt-nodejs22/root/usr/bin:$PATH
export NODE_ENV=production
export PORT=3000

cd /home/u204926461/domains/daniel8moraes.com/public_html

echo "[start.sh] Node.js: $(node -v)"
echo "[start.sh] Starting server..."

# Se executado manualmente (não via Passenger), mata processos antigos
if [ -z "$PASSENGER_APP_ENV" ]; then
    echo "[start.sh] Manual mode detected, killing old processes..."
    pkill -f "node server.js" 2>/dev/null
    sleep 2
    nohup node server.js > app.log 2>&1 &
    echo "[start.sh] Server started in background (PID: $!)"
else
    echo "[start.sh] Running under Passenger"
    exec node server.js
fi

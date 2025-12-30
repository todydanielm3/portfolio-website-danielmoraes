# Deploy Instructions for Hostinger

## Stack
- Next.js 13.1.1
- React 18
- Node.js 22
- Apache + Passenger
- Three.js for 3D model

## Files Required on Server
- All project files
- .htaccess (Apache configuration)
- server.js (Custom Node.js server)
- .passenger_app_env (Environment)
- start.sh (Startup script)

## Manual Deploy Steps via SSH

1. Connect to SSH:
```bash
ssh -p 65002 u204926461@82.25.67.1
```

2. Navigate to project directory:
```bash
cd ~/domains/daniel8moraes.com/public_html
```

3. Set Node.js path:
```bash
export PATH=/opt/alt/alt-nodejs22/root/usr/bin:$PATH
```

4. Install dependencies (if needed):
```bash
npm install --production
```

5. Build the project:
```bash
npm run build
```

6. Start the server:
```bash
./start.sh
```

OR manually:
```bash
nohup node server.js > app.log 2>&1 &
```

7. Restart Passenger:
```bash
mkdir -p tmp
touch tmp/restart.txt
```

## Verify Server is Running

Check if Node.js is running:
```bash
ps aux | grep "node server.js"
```

Test locally:
```bash
curl -I http://localhost:3000
curl -I http://localhost:3000/dog.glb
```

Check logs:
```bash
tail -f app.log
```

## Troubleshooting

If site shows 503:
1. Check if Node.js process is running
2. Check app.log for errors
3. Restart with start.sh
4. Touch tmp/restart.txt

If 3D model doesn't load:
1. Verify dog.glb exists in public/
2. Check browser console for errors
3. Verify file is accessible: curl http://localhost:3000/dog.glb

## Auto-deploy from GitHub

The Hostinger auto-deploy should:
1. Pull latest code
2. Run npm install
3. Run npm run build
4. Restart the application

Make sure in Hostinger panel:
- Build command: npm run build
- Output directory: .
- Node version: 22.x

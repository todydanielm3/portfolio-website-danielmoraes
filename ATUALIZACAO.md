# 📖 Guia de Atualização do Site - daniel8moraes.com

## 🚀 Método 1: Deploy Automático (RECOMENDADO)

### Uso Simples
```bash
cd /Users/danielmoraes/coding/homepage_daniel/portfolio-website-danielmoraes
./deploy.sh "Mensagem da atualização"
```

**Pronto!** O script faz tudo automaticamente.

---

## 🔧 Método 2: Deploy Manual (Passo a Passo)

### 1. Fazer alterações no código
Edite os arquivos que você quer mudar (páginas, componentes, etc.)

### 2. Commit e Push
```bash
cd /Users/danielmoraes/coding/homepage_daniel/portfolio-website-danielmoraes
git add .
git commit -m "Descrição das mudanças"
git push origin TESTE
```

### 3. Build Local
```bash
npm run build
```

**Aguarde o build finalizar!** (pode demorar 1-2 minutos)

### 4. Compactar o Build
```bash
tar -czf next-build.tar.gz .next
```

### 5. Enviar para o Servidor
```bash
scp -P 65002 next-build.tar.gz u204926461@82.25.67.1:~/domains/daniel8moraes.com/public_html/
```

### 6. Conectar via SSH
```bash
ssh -p 65002 u204926461@82.25.67.1
```

### 7. No Servidor - Atualizar e Reiniciar
```bash
cd ~/domains/daniel8moraes.com/public_html
rm -rf .next
tar -xzf next-build.tar.gz
rm next-build.tar.gz
export PATH=/opt/alt/alt-nodejs20/root/usr/bin:$PATH
pkill -f "node server.js"
nohup NODE_ENV=production node server.js > app.log 2>&1 &
exit
```

### 8. Limpar Arquivo Local
```bash
rm next-build.tar.gz
```

---

## 🔍 Verificar se o Site Está Funcionando

### Via SSH
```bash
ssh -p 65002 u204926461@82.25.67.1
ps aux | grep "node server.js"
curl -I http://localhost:3000
exit
```

Se retornar `200 OK`, está funcionando!

### Via Navegador
Acesse: **https://daniel8moraes.com**

---

## 🆘 Troubleshooting

### Site não carrega (503 Error)
```bash
ssh -p 65002 u204926461@82.25.67.1
cd ~/domains/daniel8moraes.com/public_html
export PATH=/opt/alt/alt-nodejs20/root/usr/bin:$PATH
ps aux | grep node  # Verifica se há processo rodando
pkill -f node       # Mata processos antigos
nohup NODE_ENV=production node server.js > app.log 2>&1 &
exit
```

### Ver logs de erro
```bash
ssh -p 65002 u204926461@82.25.67.1
cd ~/domains/daniel8moraes.com/public_html
tail -50 app.log
exit
```

### Servidor reiniciou (sem aviso)
```bash
ssh -p 65002 u204926461@82.25.67.1
cd ~/domains/daniel8moraes.com/public_html
export PATH=/opt/alt/alt-nodejs20/root/usr/bin:$PATH
nohup NODE_ENV=production node server.js > app.log 2>&1 &
exit
```

---

## 📝 Notas Importantes

1. **Build Local**: O build DEVE ser feito localmente, pois o servidor Hostinger não tem recursos suficientes
2. **Node.js 20**: O site usa Node.js 20 (não 22 ou 24)
3. **Porta 3000**: O Node.js roda na porta 3000 internamente
4. **Apache Proxy**: O Apache faz proxy reverso para o Node.js
5. **Background**: O processo roda em background com `nohup`

---

## 🔐 Credenciais SSH

- **Host**: 82.25.67.1
- **Porta**: 65002
- **Usuário**: u204926461
- **Senha**: (use sua senha do Hostinger)

---

## 📂 Estrutura no Servidor

```
~/domains/daniel8moraes.com/public_html/
├── .next/              # Build do Next.js (enviado do local)
├── components/         # Componentes React
├── lib/               # Bibliotecas
├── pages/             # Páginas Next.js
├── public/            # Arquivos estáticos (imagens, dog.glb)
├── node_modules/      # Dependências
├── server.js          # Servidor Node.js customizado
├── .htaccess          # Configuração Apache (proxy reverso)
├── package.json       # Dependências do projeto
└── app.log           # Logs do servidor
```

---

## 🎯 Checklist de Deploy

- [ ] Código atualizado localmente
- [ ] `npm run build` executado com sucesso
- [ ] Build enviado para o servidor
- [ ] Servidor Node.js reiniciado
- [ ] Site testado no navegador
- [ ] Modelo 3D carregando corretamente

---

## 📞 Suporte

Se algo der errado e você não conseguir resolver:

1. Verifique os logs: `tail -50 app.log`
2. Teste localmente: `npm run dev`
3. Verifique se o Node.js está rodando: `ps aux | grep node`
4. Entre em contato com o suporte do Hostinger se necessário

---

**Última atualização**: 30 de dezembro de 2025

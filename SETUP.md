# Contador Blindado - Instruções de Setup

## 📋 Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)
- Git configurado

## 🚀 Setup Local

1. **Extraia o arquivo ZIP:**
   ```bash
   unzip contador_blindado.zip
   cd contador_blindado
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

4. **Acesse em seu navegador:**
   ```
   http://localhost:5173
   ```

## 📦 Build para Produção

```bash
pnpm build
```

Os arquivos compilados estarão em `dist/`

## 🌐 Deploy no Netlify

### Opção 1: Via CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Opção 2: Via GitHub (Recomendado)

1. **Faça push para GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/contador_blindado.git
   git push -u origin main
   ```

2. **Configure no Netlify:**
   - Acesse [Netlify](https://app.netlify.com)
   - Clique em "New site from Git"
   - Selecione seu repositório GitHub
   - Configure:
     - **Build command:** `pnpm build`
     - **Publish directory:** `dist`
   - Clique em "Deploy"

## 📁 Estrutura do Projeto

```
contador_blindado/
├── client/
│   ├── public/           # Assets estáticos
│   ├── src/
│   │   ├── pages/        # Páginas (Home, Downloads)
│   │   ├── components/   # Componentes React
│   │   ├── App.tsx       # Roteamento
│   │   └── index.css     # Estilos globais
│   └── index.html        # HTML principal
├── package.json          # Dependências
├── vite.config.ts        # Configuração Vite
└── todo.md              # Tarefas do projeto
```

## 🎨 Personalização

### Mudar o Logo

Edite `client/src/const.ts`:
```typescript
export const APP_LOGO = "/seu-logo.png";
```

### Mudar Cores

Edite `client/src/index.css` - procure por `--primary` e `--accent`

### Adicionar Novas Páginas

1. Crie um arquivo em `client/src/pages/NovaPagina.tsx`
2. Importe em `client/src/App.tsx`
3. Adicione a rota no Router

## 📞 Suporte

Para dúvidas sobre o projeto, consulte a documentação do Vite e React.

---

**Desenvolvido com ❤️ para contadores que não brincam em serviço.**

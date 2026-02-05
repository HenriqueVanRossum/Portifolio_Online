# 🚀 Portfólio Pessoal – Project Link Tree

Este repositório contém meu portfólio pessoal em formato link tree, desenvolvido para apresentar projetos, sites e experiências de forma objetiva, moderna e elegante.

O layout combina estética editorial/brutalist, animações suaves e micro-interações, sendo ideal para desenvolvedores, designers e criadores que desejam um portfólio simples, rápido e visualmente marcante.

## 📦 Como Clonar e Usar Este Template

Se você gostou deste portfólio e quer usar como base para o seu, basta clonar o repositório:

```bash
git clone https://github.com/HenriqueVanRossum/Portifolio_Online.git
cd Portifolio_Online
```

Depois, siga as instruções de personalização abaixo para adaptar ao seu perfil.

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html        # Estrutura da página
├── style.css         # Estilos, variáveis e animações
├── script.js         # Interações, efeitos e easter eggs
└── README.md         # Documentação do projeto
```

Projeto 100% estático, sem dependências externas ou frameworks.

## ✨ Funcionalidades e Destaques

**Design editorial / brutalist**  
Visual forte, tipografia expressiva e hierarquia clara de conteúdo.

**Responsivo**  
Funciona corretamente em mobile, tablet e desktop.

**Animações baseadas em scroll**  
Cards animam apenas quando entram em tela (IntersectionObserver).

**Micro-interações**  
Hover, parallax sutil com mouse e efeito ripple nos cliques.

**Alta performance**  
HTML, CSS e JavaScript puro (vanilla JS).

**Dark mode nativo**  
Pensado para leitura confortável e estética moderna.

**Textura de grão animada**  
Adiciona profundidade visual sem comprometer performance.

**Easter egg** 🎮  
Código Konami escondido para quem gosta de detalhes.

## 🛠️ Como Personalizar

### 1️⃣ Informações Pessoais

Edite no arquivo `index.html`:

```html
<h1 class="name" data-text="SEU NOME">SEU NOME</h1>
<p class="tagline">Designer • Developer • Creator</p>

<span class="status-dot"></span>
Disponível para projetos
```

Use o espaço para:
- Seu nome
- Sua área de atuação
- Status profissional (freelancer, open to work, etc.)

### 2️⃣ Projetos

Cada projeto é representado por um card independente:

```html
<article class="project-card" data-index="01">
    <div class="card-number">01</div>

    <div class="card-content">
        <h3 class="card-title">Título do Projeto</h3>
        <p class="card-description">
            Descrição breve e objetiva do projeto
        </p>

        <div class="card-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
            <span class="tag">Tech 3</span>
        </div>
    </div>

    <a href="https://seu-link.com"
       target="_blank"
       rel="noopener"
       class="card-link">
        <span>Ver projeto</span>
        <svg>...</svg>
    </a>
</article>
```

Para adicionar novos projetos:
1. Duplique o bloco `<article>`
2. Atualize o número (`data-index` e `.card-number`)
3. Altere título, descrição, tags e link

### 3️⃣ Links Sociais

Atualize no footer do `index.html`:

```html
<a href="https://github.com/seuusuario" target="_blank" rel="noopener" class="social-link">
<a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener" class="social-link">
<a href="mailto:seu@email.com" class="social-link">
```

Recomendado:
- GitHub
- LinkedIn
- Email profissional

### 4️⃣ Cores e Identidade Visual

No topo do `style.css` você encontra as variáveis CSS:

```css
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #151515;
    --text-primary: #f5f5f5;
    --text-secondary: #a0a0a0;
    --accent: #ff3366;
    --card-bg: #1a1a1a;
}
```

Basta alterar o valor de `--accent` para adaptar à sua identidade.

**Sugestões:**
- Verde neon: `#00ff88`
- Azul elétrico: `#00a3ff`
- Roxo vibrante: `#a855f7`
- Laranja quente: `#ff6b35`
- Amarelo ouro: `#ffd700`

## 🚀 Deploy no GitHub Pages

### Passo a passo

**1️⃣ Crie um repositório no GitHub**
- Público
- Nome recomendado: `seuusername.github.io`

**2️⃣ Suba os arquivos:**

```bash
git init
git add .
git commit -m "Initial commit - Portfolio"
git branch -M main
git remote add origin https://github.com/seuusername/seuusername.github.io.git
git push -u origin main
```

**3️⃣ Ative o GitHub Pages**
- Settings → Pages
- Source: branch `main`
- Save

**4️⃣ Acesse:**
```
https://seuusername.github.io
```

## 🔧 Ajustes Extras (Opcional)

### Favicon
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### SEO Básico
```html
<meta name="description" content="Portfólio de Seu Nome – Projetos e experiências">
<meta name="keywords" content="portfolio, desenvolvimento web, software">
<meta property="og:title" content="Seu Nome – Portfólio">
<meta property="og:description" content="Confira meus projetos e trabalhos">
```

### Analytics

Você pode inserir Google Analytics ou qualquer outra ferramenta antes do `</head>`.

## 🐣 Easter Egg

Digite o **Código Konami** na página:

```
⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ B A
```

😉

## 📄 Licença

Uso livre para fins pessoais e comerciais.  
Créditos são apreciados, mas não obrigatórios.

---

**Feito com ☕, atenção aos detalhes e código limpo.**

Sinta-se à vontade para clonar, adaptar e usar como base para o seu próprio portfólio.
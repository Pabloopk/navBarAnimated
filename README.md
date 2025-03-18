# README - Navbar Responsiva com Animação

## Navbar Responsiva em Next.js com Tailwind & Framer Motion

Este projeto implementa uma **navbar fixa e responsiva** usando **Next.js**, **Tailwind CSS** e **Framer Motion** para criar animações suaves. A navbar possui um **menu mobile animado**, que aparece quando o usuário clica no botão de menu, e um **menu desktop que desliza suavemente ao passar o mouse**.

---

## Funcionalidades
✅ **Navbar fixa no topo da página.**  
✅ **Desce suavemente ao passar o mouse (apenas no desktop).**  
✅ **Menu móvel animado que aparece ao clicar.**  
✅ **Links com animações ao passar o mouse.**  
✅ **Redes sociais com animações sutis.**  
✅ **Otimizado para mobile e desktop.**  

---

## Estrutura do Código
O código é dividido em três partes principais:

1. **Links personalizados** (`CustomLink` e `CustomMobileLink`).  
2. **Navbar principal** (`NavBar`).  
3. **Menu mobile animado**.  

---

## Explicação do Código
Cada parte do código tem um papel específico na estrutura da navbar.

### 1- Links Personalizados (`CustomLink` e `CustomMobileLink`)
Os componentes `CustomLink` e `CustomMobileLink` são responsáveis por exibir os links de navegação na navbar.

#### 🔹 **`CustomLink` (Desktop)**
Este componente cria links no menu desktop, com animação ao passar o mouse.

#### 🔹 **`CustomMobileLink` (Mobile)**
Componente de links específico para o menu mobile, que fecha o menu ao clicar e usa `router.push` para mudar de página.

---

### 2-  Navbar Principal (`NavBar`)
O componente `NavBar` é o principal da nossa aplicação. Ele contém:

1. **Estado que controla se o menu mobile está aberto (`isOpen`)**.  
2. **Estado que controla se a navbar deve aparecer ao passar o mouse (`showHeader`)**.  
3. **Efeito que detecta se a tela é mobile (`isMobile`)**.  

---

### 3️- Menu Mobile Animado**
Se `isOpen` for `true`, o menu mobile aparece suavemente usando **Framer Motion**.

- **O menu aparece no centro da tela**.
- **Animação de `scale: 0 → 1` e `opacity: 0 → 1`** cria um efeito de **fade-in e zoom**.

---

## Estilização com Tailwind CSS
A navbar usa **classes do Tailwind CSS** para facilitar a estilização:
- **`fixed top-0 w-full`** → Deixa a navbar fixa no topo.  
- **`transition-transform duration-500`** → Torna as animações suaves.  
- **`translate-y-0 opacity-100`** → Mostra a navbar.  
- **`-translate-y-full opacity-0 invisible`** → Esconde a navbar.  





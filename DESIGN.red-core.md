# Kadex Red Core — Design System & Visual Identity

Este documento define a identidade visual **Kadex Red Core**. Esta é a direção principal do Kadex, caracterizada por um design "Light Premium", limpo, energético e focado no usuário competitivo. 

## 1. Visão do Produto
O Kadex é um "Workspace de Team Building". Ele afasta-se de dashboards corporativos (ex: menus laterais pesados, cartões de "Overview", KPIs soltos) e se aproxima de ferramentas de foco (ex: Linear, Vercel). O time do usuário é sempre a peça central da interface.

## 2. Princípios Visuais
- **Red Core:** O vermelho (`#e11d2e`) é a cor da ação, energia e foco. Usado para botões primários, seleções e destaques de impacto.
- **Off-White Premium:** O fundo nunca é branco puro (`#FFFFFF`), mas sim um off-white ultra-suave (`#f8f7f4`), proporcionando conforto visual e permitindo que os cartões brancos (`#ffffff`) "flutuem" sutilmente.
- **Ferramenta, Não Relatório:** Sem gráficos em pizza para mostrar métricas de vaidade. A interface exibe dados táticos (EVs, Weaknesses, Speed Tiers) em formatos de fácil leitura e interação.
- **Pokémon Sempre em Cards:** Sprites de Pokémon nunca "flutuam" na tela; eles sempre estão ancorados em bases sólidas (slots, boxes, cartões).

## 3. Tokens Core (CSS Variables)

```css
:root {
  /* Surfaces */
  --rc-bg-app: #fcfcfc;       /* Off-white background ultra suave */
  --rc-bg-surface: #ffffff;   /* Pure white for cards */
  --rc-bg-muted: #f3f4f6;     /* Slate 100 for subtle areas */
  
  /* Borders */
  --rc-border-soft: #e2e8f0;  /* Slate 200 */
  --rc-border-strong: #cbd5e1;/* Slate 300 */

  /* Primary Accent (Red) */
  --rc-accent-primary: #e11d2e;
  --rc-accent-secondary: #b91c1c;
  --rc-accent-soft: rgba(225, 29, 46, 0.08);
  --rc-accent-glow: rgba(225, 29, 46, 0.15);

  /* Typography */
  --rc-text-primary: #0f172a;   /* Slate 900 */
  --rc-text-secondary: #475569; /* Slate 600 */
  --rc-text-muted: #94a3b8;     /* Slate 400 */

  /* Status */
  --rc-success: #059669;
  --rc-warning: #d97706;
  --rc-danger: #dc2626; /* Cuidado para não confundir com o Accent. Usado para Erros/Ameaças graves. */
}
```

## 4. Estrutura do App (Builder-First)
A estrutura remove a Sidebar pesada e adota uma TopNav ágil, valorizando a largura da tela para o "Team Dock" e o "Workspace".

```
KadexShell
├─ Top Navigation (Slim, Red/White, Global Actions)
├─ Main Content Grid
│  ├─ Team Dock (6 Slots Horizontais ou Grid)
│  └─ Workspace Area (Editor, Analyzer, Search)
```

## 5. Componentes e Estilos

### Cards & Surfaces
- Fundo branco puro (`#ffffff`).
- Borda de 1px cinza suave (`--rc-border-soft`).
- Cantos arredondados generosos, mas firmes (`8px` a `12px`).
- Sombra muito leve (`0 4px 6px -1px rgba(0, 0, 0, 0.05)`).
- **Hover:** Elevação sutil e borda avermelhada (`border-rc-accent-primary`).

### Botões
- **Primary:** Fundo Vermelho (`--rc-accent-primary`), texto branco, sombra suave vermelha (`--rc-accent-glow`).
- **Secondary:** Fundo branco, borda cinza, texto primário. Hover cinza clarinho.
- **Ghost:** Sem fundo, texto secundário. Hover ganha fundo `--rc-bg-muted`.

### Team Slots
- O slot vazio exibe um ícone de `+` amigável e tracejado sutil.
- O slot preenchido é um cartão compacto com o Sprite centrado.
- O slot ativo/selecionado possui um anel vermelho externo sólido.

### Type Badges
- Não são mais as badges ultra-planas corporativas. Possuem gradientes discretos nativos do Pokémon, sombra interna 1px e texto `UPPERCASE BOLD`.

## 6. O Que Evitar
- **Dark Mode Padrão:** Esta variação é puramente Light Mode.
- **Espaço Desperdiçado:** O layout corporativo desperdiça a lateral esquerda; o Kadex Red Core usa a tela inteira.
- **Dashboard Executivo:** Evite palavras genéricas corporativas como "Overview", "Metrics", "Database". Use terminologia de jogo ("Workspace", "Team Analyzer", "Roster", "Global Index").
- **Neon/Glow Exagerado:** O glow vermelho existe, mas é muito sutil. O visual é *Clear & Crisp* (como Apple/Vercel), não *Cyberpunk*.

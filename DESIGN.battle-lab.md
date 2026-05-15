# Kadex Battle Lab — Design System & Visual Identity

Este documento define a identidade visual **Kadex Battle Lab**, uma direção de design completamente nova e isolada para o Kadex. Esta identidade substitui a estética corporativa/SaaS por uma interface de "Laboratório de Batalha" — um software técnico, imersivo e especializado para jogadores competitivos de Pokémon.

---

## 1. Visão do Produto (Battle Lab)
O Kadex não é um dashboard de empresa; é uma **estação de trabalho tática**. Inspirado em interfaces de motores gráficos, IDEs de desenvolvimento e menus de e-sports de alta performance, o *Battle Lab* coloca o time do jogador no centro absoluto da experiência.

## 2. Princípios Visuais
- **Foco Absoluto no Time:** O "Team Dock" (os 6 Pokémon) está sempre presente. Não há uma "tela inicial" de overview genérico, você entra direto no laboratório.
- **Atmosfera Premium Gamer:** Inspirado na profundidade do PlayStation e no aspecto "command palette" do Raycast. 
- **Superfícies Escuras em Camadas:** O fundo é um "Midnight Blue" quase preto (`#030712`), com painéis em "Graphite" (`#0f172a`) e "Surface Navy" (`#1e293b`).
- **Glows Atléticos/Elétricos:** Acentos em Red/Coral competitivo (`#f43f5e`) e Electric Cyan (`#06b6d4`) ou Violet (`#8b5cf6`), usados em gradientes radiais suaves (spotlights) inspirados no Framer.
- **Molduras de Ferramenta (Tool-Chrome):** Sem "cards brancos com sombra". Usamos bordas finas (hairlines), cantos precisos (`6px` a `12px`), e divisórias técnicas.

## 3. Paleta de Cores (Tokens)

```css
:root {
  /* Surfaces */
  --bl-canvas: #030712;         /* Deep Midnight / Fundo Absoluto */
  --bl-surface-1: #0f172a;      /* Painéis principais (Slate 900) */
  --bl-surface-2: #1e293b;      /* Cards e sub-painéis (Slate 800) */
  --bl-surface-elevated: #334155; /* Hover states (Slate 700) */
  
  /* Borders */
  --bl-hairline: rgba(255, 255, 255, 0.08);
  --bl-hairline-strong: rgba(255, 255, 255, 0.16);

  /* Accents */
  --bl-accent-primary: #f43f5e;   /* Rose / Coral Competitivo */
  --bl-accent-primary-dim: rgba(244, 63, 94, 0.15);
  --bl-accent-secondary: #06b6d4; /* Electric Cyan (Info/Tech) */
  --bl-accent-violet: #8b5cf6;    /* Spotlight alternativo */
  
  /* Semantics */
  --bl-success: #10b981;
  --bl-warning: #f59e0b;
  --bl-danger: #ef4444;

  /* Typography */
  --bl-ink: #f8fafc;            /* Branco suave */
  --bl-ink-muted: #94a3b8;      /* Cinza azulado para metadata */
  --bl-ink-subtle: #475569;     /* Desabilitados / placeholders */
}
```

## 4. Tipografia
- **Display/Headlines:** `Inter` com tracking negativo sutil (inspirado no Framer/Figma) para criar impacto de pôster em headers de seção.
- **Body:** `Inter` (14px a 16px) com line-height focado em legibilidade de dados.
- **Técnica (Stats, EVs/IVs, Tiers):** `JetBrains Mono` ou `Geist Mono`. Números devem ser estritamente tabulares para alinhar grids de stats perfeitos.

## 5. Estrutura do App (BattleLabShell)
Em vez de uma "Sidebar + Main Content", usamos um layout de painéis de IDE (como VS Code ou Figma):

```
BattleLabShell (Grid/Flex Layout)
├─ Top Command Bar (Global Search, Format Selector, Export)
├─ Main Workspace
│  ├─ Team Dock (Roster Vertical Fixo à esquerda - 6 slots)
│  ├─ Center Stage (Onde ocorre a edição, busca ou análise global)
│  └─ Analysis Rail (Painel direito fixo ou expansível com stats em tempo real)
```

## 6. Componentes Core

### Team Dock (A Espinha Dorsal)
- Uma barra lateral estreita dedicada puramente aos 6 Pokémon do time.
- Em vez de botões "Add", são slots de incubação vazios.
- Slot Selecionado ganha um brilho sutil `--bl-accent-primary` e borda forte.

### Spotlight Cards (Inspirado no Framer)
- Em vez de fundos cinzas chapados, seções importantes (como o Resumo de Fraquezas ou Team Score) têm um fundo escuro com um gradiente radial colorido muito suave e desfocado (Magenta ou Violet) para criar profundidade e atmosfera.

### Command Topbar
- Uma barra superior fina (`48px`). Nada de logos gigantes.
- Foco em um input central tipo "Command Palette" (`Ctrl + K`).

### Componentes de Batalha (Type Badges & Stat Bars)
- Badges de tipos não são pílulas flat. São badges com um leve gradiente interno, texto `MONO UPPERCASE`, evocando status de RPG/console.
- Stat bars (HP, Atk) usam barras de progresso finas (2-3px) com trilhas de fundo escuras.

## 7. O que NÃO fazer (Evitar a armilha corporativa)
- **NÃO** use grandes espaços brancos ou fundos cinza claros.
- **NÃO** crie "Dashboards" com KPIs (Key Performance Indicators) de "Times Criados". O usuário quer ver *O Time*, não *Estatísticas de Uso do Site*.
- **NÃO** esconda o Team Builder. Ele deve ser a tela padrão ou imediatamente acessível via clique rápido nos slots.
- **NÃO** use cantos ultra-arredondados (`24px+`). Ferramentas técnicas pedem cantos mais duros (`4px` a `8px`).

## 8. Animações e Microinterações
- **Hover Lift:** Cards não sobem com grandes sombras. A borda muda de `--bl-hairline` para `--bl-hairline-strong`.
- **Active State:** Uma linha brilhante fina na borda esquerda do slot selecionado.
- **Glows Ativos:** O Pokémon atualmente em foco ganha um "drop-shadow" colorido baseado no seu tipo primário no Editor Central.

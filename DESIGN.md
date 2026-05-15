# Kadex Design System & Visual Guidelines

Este documento define a identidade visual e os princípios de design do **Kadex**, uma ferramenta de elite para criação, montagem e análise competitiva de times Pokémon.

---

## 1. Visão do Produto
O Kadex é um **Competitive Dark Dashboard**. Ele não é uma enciclopédia passiva, mas uma ferramenta ativa de engenharia de times. O foco é a densidade de dados, a clareza estratégica e a velocidade de execução para jogadores competitivos.

## 2. Princípios de Design
- **Dashboard Primeiro:** Toda a interface deve respirar funcionalidade. Nada de espaços vazios injustificados ou estética de "landing page".
- **Dark Mode Nativo:** O escuro não é uma opção, é a fundação. Tons de "near-black" proporcionam foco e reduzem a fadiga visual.
- **Densidade Técnica:** Informação competitiva (stats, types, speed tiers) deve ser visível sem cliques excessivos, mas organizada em painéis claros.
- **Sprites em Contexto:** Pokémon nunca estão "soltos". Eles pertencem a slots, cards ou painéis de edição.
- **Hierarquia de Comando:** O fluxo deve ser natural: Busca -> Seleção -> Edição -> Análise.

## 3. Personalidade Visual
- **Técnica:** Focada em dados e performance.
- **Competitiva:** Transmite seriedade e estratégia.
- **Premium:** Acabamento refinado com bordas "hairline" e brilhos sutis.
- **Moderna:** Tipografia limpa e layout inspirado em ferramentas de alto nível (Linear, Raycast).

## 4. Sistema de Temas e Variações Visuais
O Kadex suporta **Dark Mode** (padrão) e **Light Mode** profissional, além de variações de accent color e variações visuais completas para personalização da experiência competitiva.

### 4.1. Variações Visuais (Visual Variants)
- **Blue Core (Padrão):** Foco em clareza técnica e confiabilidade. Estética SaaS moderna, limpa e eficiente. Ideal para sessões longas de teambuilding.
- **Crimson Tactical:** Identidade agressiva e competitiva. Foco em energia e performance de elite. Inspirado em dashboards esportivos.
- **Kadex Neo Console:** Direção visual voltada para "Battle Console" e "Command Center". Interface técnica de alto nível com grids, brilhos elétricos e sensação de software de e-sports.

### 4.2. Tokens de Tema e Variant
```css
/* Kadex Neo Console Variant */
[data-variant="neo-console"] {
  --bg-app: #02040a;
  --bg-sidebar: #05080f;
  --bg-card: #0c121d;
  --accent-primary: #00f2ff; /* Electric Cyan */
  --accent-secondary: #ff4d4d; /* Coral Tactical */
  --border-soft: rgba(0, 242, 255, 0.1);
}
```

### 4.3. Princípios do Neo Console
- **Profundidade Técnica:** Uso de grids de background e gradientes radiais para criar atmosfera de "monitor de controle".
- **Contraste Dinâmico:** Texto branco puro sobre fundos extremamente escuros para foco máximo.
- **Bordas Elétricas:** Bordas com cores de accent e opacidade controlada para delimitar painéis de forma marcante.
- **Efeito Console:** Cards com sombras mais densas e backgrounds levemente mais azulados que o fundo principal.

### 4.4. Princípios do Light Mode
- **Background Soft:** Nunca usar branco puro (#FFF) para o fundo do app; usar `Slate 50`.
- **Hierarquia por Elevação:** Cards devem ser brancos puros para "saltar" do fundo `Slate 50`.
- **Bordas Sutis:** Usar `Slate 900` com opacidade baixa (8-14%) para bordas, garantindo que sejam visíveis sem serem agressivas.
- **Manutenção da Vibração:** Badges de tipos Pokémon mantêm seus gradientes vibrantes para preservar a identidade visual do jogo.
- **Contraste de Texto:** O texto principal deve ser um cinza muito escuro/azulado (`Slate 900`), nunca preto puro, para reduzir o cansaço visual.

### 4.5. Alternância de Tema e Visual
- O app respeita a preferência do sistema (`prefers-color-scheme`).
- A escolha do usuário é persistida no `localStorage`.
- O seletor de Visual Variant está localizado na Sidebar para permitir a troca instantânea de peles/estilos.

## 5. Tipografia
- **Fonte Principal:** `Inter` ou `Geist Sans`.
- **Fonte Técnica/Dados:** `JetBrains Mono` ou `Geist Mono` (usar para stats, IVs/EVs e speed tiers).
- **Escala:**
  - `Display:` 32px / 600 (Bold) / -0.02em tracking
  - `Heading Lg:` 24px / 600
  - `Heading Md:` 20px / 500
  - `Body:` 16px / 400
  - `Label/Small:` 14px / 500
  - `Technical:` 13px / Mono / 400

## 6. Espaçamento
Baseado em escala de 4px:
- `4px (xs):` Gaps internos muito apertados.
- `8px (sm):` Padding de botões pequenos, gaps entre itens de lista.
- `12px (md):` Padding padrão de cards e inputs.
- `16px (lg):` Espaçamento entre seções menores.
- `24px (xl):` Padding de painéis principais.
- `32px (xxl):` Margens externas do layout.

## 7. Layout Principal (AppShell)
Estrutura obrigatória e fixa para manter a sensação de ferramenta:

```
AppShell (Grid: 240px 1fr 320px)
├─ Sidebar (Fixed Left)
│  └─ Logo, Nav Groups, Format Selector
├─ MainContent (Scrollable)
│  ├─ Topbar (Sticky: Command Search + User)
│  ├─ TeamSlots (Horizontal: 6 Slots fixed at top of content)
│  └─ PokemonEditor (Central focus area)
└─ AnalysisPanel (Fixed Right or Toggleable)
   └─ Team Stats, Weakness Grid, Suggestions
```

## 8. Sidebar
- **Largura:** 240px.
- **Visual:** Background `--bg-sidebar`, borda direita `--border-soft`.
- **Itens:** Ícones minimalistas (Lucide ou Heroicons), label `--text-secondary`.
- **Estado Ativo:** Texto `--text-primary`, background sutil ou indicador lateral `--accent-primary`.

## 9. Topbar / Command Search
- **Altura:** 64px.
- **Search Bar:** Inspirada no Raycast. Ativa via `Ctrl+K`.
- **Estilo:** Transparente ou glassmorphism sutil. Placeholder: "Search Pokémon, Moves, Items..."

## 10. Team Slots
- **Contêiner:** Grid horizontal de 6 colunas.
- **Slot:** Card `--bg-card` com borda `--border-soft`.
- **Estados:**
  - `Vazio:` Borda tracejada, ícone "+" discreto.
  - `Preenchido:` Sprite centralizado, nome pequeno embaixo.
  - `Selecionado:` Border `--accent-primary`, glow sutil.
- **Regra:** Pokémon nunca "voam", eles habitam um slot.

## 11. Pokémon Card (List/Search)
- **Compacto:** Deve priorizar a visualização de múltiplos resultados.
- **Conteúdo:** Sprite (64px), Nome, Tipos (Badges), Stats Base (Mini bar graph).

## 12. Pokémon Editor
O coração do app. Layout denso e organizado em sub-painéis:
- **Header:** Nome, Sprite grande, Tipos, Seletor de Tera Type.
- **Moveset:** 4 slots verticais com select customizado (mostra Type, Power, Acc).
- **Attributes:** Ability (dropdown com descrições), Item (com busca).
- **Stats (EVs/IVs):** Sliders e inputs numéricos em `Mono`. Gráfico de radar ou barras horizontais.

## 13. Team Analyzer Panel
Painel lateral direito técnico:
- **Team Score:** Nota de 0 a 100 baseada em cobertura.
- **Type Coverage:** Resumo de fraquezas acumuladas do time.
- **Speed Tiers:** Lista vertical de quem o time ultrapassa ou perde em velocidade.

## 14. Weakness / Resistance Grid
- **Tabela:** Linhas de tipos Pokémon (Fire, Water, etc.).
- **Células:**
  - `x4 / x2:` Fundo avermelhado.
  - `1/2 / 1/4:` Fundo esverdeado.
  - `0:` Fundo cinza/roxo (imunidade).
- **Fonte:** `Mono` para números.

## 15. Competitive Suggestions
Cards de feedback imediato:
- **Alerta (Vermelho):** "Seu time não tem resposta para Ground."
- **Sugestão (Azul):** "Considere um usuário de Stealth Rock."
- **Otimização (Verde):** "Mudar Nature de Garchomp para Jolly aumentaria seu valor."

## 16. Type Badges (Premium)
- **Estilo:** Pill, texto uppercase, bold.
- **Cores:**
  - `Fire:` Gradient #f08030 -> #f05030
  - `Water:` Gradient #6890f0 -> #4870f0
  - `Grass:` Gradient #78c850 -> #58a830
  - `Electric:` Gradient #f8d030 -> #f8b030
  - `...` (Seguir paleta oficial, mas com acabamento moderno/glossy).

## 17. Botões
- **Primary:** Background `--accent-primary`, texto branco.
- **Secondary:** Border `--border-strong`, background `--bg-card`.
- **Ghost:** Sem fundo, hover com `--border-soft`.
- **States:** Hover scale (1.02x), active scale (0.98x), transitions 200ms.

## 18. Inputs e Selects
- **Estilo:** Fundo `--bg-app` (mais escuro que o card), borda `--border-soft`.
- **Focus:** Borda `--accent-primary`, sem outline padrão.
- **Dropdowns:** Devem seguir o tema dark, com scrollbars customizadas.

## 19. Animações e Microinterações
- **Entrada:** Fade-in sutil (300ms) para novos painéis.
- **Hover:** Brilho (glow) sutil na borda dos cards de Pokémon.
- **Transição de Slot:** Movimento suave ao trocar a ordem dos Pokémon.

## 20. Regras do que Fazer (DO)
- Manter o foco no Dark Mode.
- Usar bordas "hairline" (1px sutil).
- Garantir que dados numéricos usem fonte Mono.
- Organizar tudo em painéis definidos.

## 21. Regras do que Evitar (DON'T)
- **NÃO** usar fundo branco puro.
- **NÃO** usar bordas arredondadas exageradas (manter entre 6px e 12px).
- **NÃO** deixar Pokémon soltos fora de slots/cards.
- **NÃO** criar interface com cara de site institucional; deve parecer um software.

## 22. Checklist de Qualidade
- [ ] O app parece uma ferramenta profissional (Linear/Raycast style)?
- [ ] A hierarquia de dados competitivos está clara?
- [ ] O Dark Mode está consistente (sem contrastes agressivos)?
- [ ] Todos os Pokémon estão dentro de seu contêiner?
- [ ] A navegação por teclado (Ctrl+K) está planejada?
- [ ] O layout funciona de forma compacta em telas menores?

---
*Este documento é a fonte de verdade para o desenvolvimento do Kadex.*

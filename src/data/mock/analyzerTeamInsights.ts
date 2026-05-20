export interface RecommendedMove {
  name: string;
  type: string;
  category: "Physical" | "Special" | "Status";
  priority: "Core" | "Recommended" | "Optional";
  reason: string;
}

export interface AlternativeItem {
  name: string;
  reason: string;
}

export interface AlternativeTera {
  type: string;
  reason: string;
}

export interface PokemonInsight {
  slug: string;
  name: string;
  sprite: string;
  types: string[];
  role: string;
  summary: string;
  
  // Current Build
  ability: string;
  item: string;
  teraType: string;
  nature: string;
  evSpread: string;
  currentMoves: string[];
  
  recommendedMoves: RecommendedMove[];
  alternativeItems: AlternativeItem[];
  alternativeTeraTypes: AlternativeTera[];
  
  strengths: string[];
  concerns: string[];
  adjustments: string[];
  alternatives: AlternativePokemon[];
}

export interface AlternativePokemon {
  name: string;
  sprite: string;
  types: string[];
  role: string;
  why: string;
  gains: string[];
  loses: string[];
}

export const TEAM_INSIGHTS: PokemonInsight[] = [
  {
    slug: "flutter-mane",
    name: "Flutter Mane",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    types: ["Ghost", "Fairy"],
    role: "Special Sweeper / Speed Control",
    summary: "Funciona como atacante especial rápido e ferramenta primária de controle de velocidade com Icy Wind.",
    ability: "Protosynthesis",
    item: "Booster Energy",
    teraType: "Fairy",
    nature: "Timid",
    evSpread: "4 HP / 252 SpA / 252 Spe",
    currentMoves: ["Moonblast", "Shadow Ball", "Icy Wind", "Protect"],
    recommendedMoves: [
      { name: "Moonblast", type: "Fairy", category: "Special", priority: "Core", reason: "STAB principal consistente contra Dragon e Dark." },
      { name: "Shadow Ball", type: "Ghost", category: "Special", priority: "Core", reason: "Cobertura neutra essencial e STAB secundário." },
      { name: "Icy Wind", type: "Ice", category: "Special", priority: "Recommended", reason: "Controle de velocidade fundamental em VGC." },
      { name: "Protect", type: "Normal", category: "Status", priority: "Core", reason: "Essencial para segurança e posicionamento." },
      { name: "Thunderbolt", type: "Electric", category: "Special", priority: "Optional", reason: "Alternativa para lidar com Water/Flying." }
    ],
    alternativeItems: [
      { name: "Focus Sash", reason: "Garante sobrevivência contra priority moves." },
      { name: "Choice Specs", reason: "Maximiza o dano imediato, abrindo mão de Protect." }
    ],
    alternativeTeraTypes: [
      { type: "Steel", reason: "Inverte resistências, protegendo contra Bullet Punch e Fairy." },
      { type: "Water", reason: "Resistência defensiva geral excelente em VGC." }
    ],
    strengths: ["Pressão especial altíssima", "Speed tier invejável", "Imunidade a Fake Out"],
    concerns: ["Defesa física inexistente", "Muito vulnerável a golpes de prioridade", "Depende de posicionamento seguro"],
    adjustments: [
      "Combine com Fake Out support para ganhar turnos livres.",
      "Considere investir um pouco em HP/Def se estiver caindo rápido demais.",
      "Mantenha sempre uma rota de switch defensiva."
    ],
    alternatives: [
      {
        name: "Iron Valiant",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
        types: ["Fairy", "Fighting"],
        role: "Fast Mixed Attacker",
        why: "Oferece pressão ofensiva parecida, com cobertura Fighting.",
        gains: ["Fighting coverage", "Mixed potential"],
        loses: ["Ghost typing", "Protosynthesis boost"]
      },
      {
        name: "Gholdengo",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
        types: ["Steel", "Ghost"],
        role: "Special Attacker",
        why: "Mais resistência defensiva e pressão contra Fairy/Steel matchups.",
        gains: ["Steel typing", "Defensive bulk"],
        loses: ["Speed tier", "Fairy typing"]
      },
      {
        name: "Chi-Yu",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
        types: ["Dark", "Fire"],
        role: "Special Wallbreaker",
        why: "Aumenta pressão especial e ameaça Steel/Grass.",
        gains: ["Beads of Ruin debuff", "Fire pressure"],
        loses: ["Speed tier", "Fairy/Ghost STAB"]
      }
    ]
  },
  {
    slug: "koraidon",
    name: "Koraidon",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    types: ["Fighting", "Dragon"],
    role: "Physical Wallbreaker / Sun Setter",
    summary: "Motor do time. Aplica pressão física imediata e invoca Sun para impulsionar Flutter Mane.",
    ability: "Orichalcum Pulse",
    item: "Clear Amulet",
    teraType: "Fire",
    nature: "Jolly",
    evSpread: "4 HP / 252 Atk / 252 Spe",
    currentMoves: ["Collision Course", "Flare Blitz", "U-turn", "Protect"],
    recommendedMoves: [
      { name: "Collision Course", type: "Fighting", category: "Physical", priority: "Core", reason: "Dano massivo com bônus super-efetivo." },
      { name: "Flare Blitz", type: "Fire", category: "Physical", priority: "Recommended", reason: "Abusa do Sun e do Tera Fire para dano absurdo." },
      { name: "U-turn", type: "Bug", category: "Physical", priority: "Optional", reason: "Mantém momentum tático contra counters." },
      { name: "Protect", type: "Normal", category: "Status", priority: "Core", reason: "Sobrevivência essencial no meta restrito." }
    ],
    alternativeItems: [
      { name: "Choice Scarf", reason: "Garante outspeed em outros Koraidon/Miraidon." },
      { name: "Assault Vest", reason: "Ignora Intimidate e Parting Shot." }
    ],
    alternativeTeraTypes: [
      { type: "Fairy", reason: "Inverte a fraqueza quádrupla a Fairy para uma resistência." },
      { type: "Steel", reason: "Boa sinergia defensiva, resistindo Dragon, Ice e Fairy." }
    ],
    strengths: ["Dano base altíssimo", "Sinergia automática de clima com aliados", "Controle de tempo"],
    concerns: ["Fraqueza 4x a Fairy", "Vulnerável a Intimidate e Burn", "Dependente de dano de recoil (Flare Blitz)"],
    adjustments: [
      "Necessita de suporte claro contra Fairy types.",
      "Aproveite a pressão do Sun com outros aliados.",
      "Cuidado com o recoil damage acumulado."
    ],
    alternatives: [
      {
        name: "Great Tusk",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
        types: ["Ground", "Fighting"],
        role: "Physical Attacker / Spinner",
        why: "Aproveita o Sun e oferece imunidade a Electric.",
        gains: ["Ground coverage", "Electric immunity"],
        loses: ["Sun setting ability", "Speed tier"]
      },
      {
        name: "Dragonite",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        types: ["Dragon", "Flying"],
        role: "Physical Wallbreaker",
        why: "Extrema versatilidade e prioridade com Extreme Speed.",
        gains: ["Multiscale bulk", "Extreme Speed"],
        loses: ["Fighting pressure", "Sun synergy"]
      },
      {
        name: "Roaring Moon",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
        types: ["Dragon", "Dark"],
        role: "Physical Sweeper",
        why: "Extremamente rápido sob Sun ou com Booster Energy.",
        gains: ["Dark coverage", "Acrobatics pressure"],
        loses: ["Fighting STAB", "Initial bulk"]
      }
    ]
  },
  {
    slug: "rillaboom",
    name: "Rillaboom",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    types: ["Grass"],
    role: "Terrain Setter / Physical Pivot",
    summary: "Pivô defensivo crucial. Traz Grassy Terrain para anular outros terrenos e oferece Fake Out.",
    ability: "Grassy Surge",
    item: "Assault Vest",
    teraType: "Water",
    nature: "Adamant",
    evSpread: "252 HP / 116 Atk / 140 SpD",
    currentMoves: ["Grassy Glide", "Wood Hammer", "U-turn", "Fake Out"],
    recommendedMoves: [
      { name: "Grassy Glide", type: "Grass", category: "Physical", priority: "Core", reason: "Prioridade absurda sob Grassy Terrain." },
      { name: "Fake Out", type: "Normal", category: "Physical", priority: "Core", reason: "Controle de turno obrigatório em VGC." },
      { name: "U-turn", type: "Bug", category: "Physical", priority: "Recommended", reason: "Pivotagem rápida e segura." },
      { name: "Wood Hammer", type: "Grass", category: "Physical", priority: "Optional", reason: "Dano de nuke quando necessário." }
    ],
    alternativeItems: [
      { name: "Miracle Seed", reason: "Maximiza o dano de Grassy Glide." },
      { name: "Focus Sash", reason: "Garante utilidade e Fake Out mesmo sob pressão." }
    ],
    alternativeTeraTypes: [
      { type: "Fire", reason: "Resiste a Ice, Bug e Fire." },
      { type: "Grass", reason: "Potencializa o dano de Grassy Glide ao extremo." }
    ],
    strengths: ["Limpa Electric/Psychic Terrain", "Prioridade poderosa", "Fake Out Support"],
    concerns: ["Sofre contra Intimidate", "Fraco contra Flying types (ex: Tornadus)", "Dano de recoil"],
    adjustments: [
      "Use para resetar o Terrain do oponente (ex: Miraidon).",
      "Posicione para finalizar alvos com pouco HP usando Glide.",
      "Evite trocas diretas em ataques Fire."
    ],
    alternatives: [
      {
        name: "Ogerpon-Wellspring",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017-wellspring.png",
        types: ["Grass", "Water"],
        role: "Offensive Pivot",
        why: "Oferece pressão Water e redirecionamento com Follow Me.",
        gains: ["Water typing", "Redirection support"],
        loses: ["Fake Out", "Grassy Glide priority"]
      },
      {
        name: "Amoonguss",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
        types: ["Grass", "Poison"],
        role: "Defensive Support",
        why: "Melhor controle de Sleep e redirecionamento puro.",
        gains: ["Sleep pressure (Spore)", "Better bulk"],
        loses: ["Immediate damage", "Terrain control"]
      },
      {
        name: "Meowscarada",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
        types: ["Grass", "Dark"],
        role: "Fast Physical Sweeper",
        why: "Dano garantido com Flower Trick e alta velocidade.",
        gains: ["Dark coverage", "Speed"],
        loses: ["Fake Out utility", "Defensive bulk"]
      }
    ]
  },
  {
    slug: "incineroar",
    name: "Incineroar",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    types: ["Fire", "Dark"],
    role: "Intimidate Pivot / Support",
    summary: "A cola defensiva do time. Intimidate, Fake Out e Parting Shot reduzem o dano inimigo drasticamente.",
    ability: "Intimidate",
    item: "Sitrus Berry",
    teraType: "Grass",
    nature: "Careful",
    evSpread: "252 HP / 4 Atk / 156 Def / 96 SpD",
    currentMoves: ["Flare Blitz", "Knock Off", "Parting Shot", "Fake Out"],
    recommendedMoves: [
      { name: "Fake Out", type: "Normal", category: "Physical", priority: "Core", reason: "Essencial para ganhar Momentum e posicionamento." },
      { name: "Parting Shot", type: "Dark", category: "Status", priority: "Core", reason: "Reduz stats e permite pivô seguro." },
      { name: "Knock Off", type: "Dark", category: "Physical", priority: "Recommended", reason: "Remove itens vitais do oponente (Sash, Assault Vest)." },
      { name: "Flare Blitz", type: "Fire", category: "Physical", priority: "Core", reason: "STAB primário e grande dano sob Sun." }
    ],
    alternativeItems: [
      { name: "Safety Goggles", reason: "Ignora Spore de Amoonguss e Rage Powder." },
      { name: "Assault Vest", reason: "Melhora a resistência especial geral." }
    ],
    alternativeTeraTypes: [
      { type: "Water", reason: "Resiste a ataques Water e Ground inimigos." },
      { type: "Ghost", reason: "Ignora Fake Out inimigo." }
    ],
    strengths: ["Melhor suporte do jogo", "Debuffer constante", "Ótima tipagem defensiva base"],
    concerns: ["Fraco contra Clear Amulet / Defiant", "Susceptível a Ground/Rock/Water", "Pode se tornar passivo demais"],
    adjustments: [
      "Faça pivot constante para resetar Intimidate.",
      "Não o deixe no campo sofrendo dano desnecessário.",
      "Guarde Parting Shot para ameaças especiais difíceis."
    ],
    alternatives: [
      {
        name: "Arcanine-Hisui",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
        types: ["Fire", "Rock"],
        role: "Physical Attacker",
        why: "Oferece Intimidate com pressão ofensiva muito maior.",
        gains: ["Rock coverage", "Extreme Speed"],
        loses: ["Fake Out", "Parting Shot utility"]
      },
      {
        name: "Landorus-Therian",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645-therian.png",
        types: ["Ground", "Flying"],
        role: "Intimidate Pivot",
        why: "Imunidade a Ground e Electric com Intimidate.",
        gains: ["Ground immunity", "Electric immunity"],
        loses: ["Fake Out", "Dark resistance"]
      },
      {
        name: "Grimmsnarl",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
        types: ["Dark", "Fairy"],
        role: "Screen Setter",
        why: "Suporte via Prankster Screens e Thunder Wave.",
        gains: ["Priority Screens", "Fairy typing"],
        loses: ["Intimidate", "Flare Blitz pressure"]
      }
    ]
  },
  {
    slug: "urshifu",
    name: "Urshifu",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892-rapid-strike.png",
    types: ["Fighting", "Water"],
    role: "Physical Wallbreaker",
    summary: "Quebra defesas inimigas ignorando Protect com Surging Strikes. Causa dano massivo focado.",
    ability: "Unseen Fist",
    item: "Focus Sash",
    teraType: "Water",
    nature: "Jolly",
    evSpread: "4 HP / 252 Atk / 252 Spe",
    currentMoves: ["Surging Strikes", "Close Combat", "Aqua Jet", "Protect"],
    recommendedMoves: [
      { name: "Surging Strikes", type: "Water", category: "Physical", priority: "Core", reason: "Quebra Focus Sash e ignora quedas de Attack via crits." },
      { name: "Close Combat", type: "Fighting", category: "Physical", priority: "Core", reason: "Nuke de Fighting type." },
      { name: "Aqua Jet", type: "Water", category: "Physical", priority: "Recommended", reason: "Prioridade útil para finalizar alvos rápidos." },
      { name: "Protect", type: "Normal", category: "Status", priority: "Core", reason: "Vital em VGC, especialmente usando Sash." }
    ],
    alternativeItems: [
      { name: "Mystic Water", reason: "Dano massivo sem revelar itens de Choice." },
      { name: "Choice Scarf", reason: "Garante KOs antes de sofrer dano." }
    ],
    alternativeTeraTypes: [
      { type: "Grass", reason: "Resiste a Electric, Grass e ignora Spore." },
      { type: "Steel", reason: "Melhora matchup contra Flying e Fairy." }
    ],
    strengths: ["Ignora Protect e stat drops", "Dano físico consistente", "Boa tipagem STAB"],
    concerns: ["Dependente de Focus Sash", "Vulnerável a Rocky Helmet/Rocky Skin", "Fraco contra Grass (Amoonguss/Rillaboom)"],
    adjustments: [
      "Mantenha longe de Fake Out se estiver usando Sash.",
      "Utilize contra times que abusam de Protect/Stall.",
      "Cuidado ao usar Close Combat precocemente."
    ],
    alternatives: [
      {
        name: "Great Tusk",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
        types: ["Ground", "Fighting"],
        role: "Physical Sweeper",
        why: "Aproveita o Sun e traz imunidade a Electric.",
        gains: ["Ground coverage", "Electric immunity"],
        loses: ["Water pressure", "Unseen Fist utility"]
      },
      {
        name: "Iron Hands",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
        types: ["Electric", "Fighting"],
        role: "Physical Tank",
        why: "Extrema durabilidade com Fake Out e Drain Punch.",
        gains: ["Electric coverage", "Defensive bulk"],
        loses: ["Water typing", "Speed tier"]
      },
      {
        name: "Palafin",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964-hero.png",
        types: ["Water"],
        role: "Physical Wallbreaker",
        why: "Dano de Water type bruto muito superior após o Hero form.",
        gains: ["Raw attack power", "Better bulk (Hero form)"],
        loses: ["Fighting secondary STAB", "Initial pressure"]
      }
    ]
  },
  {
    slug: "amoonguss",
    name: "Amoonguss",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    types: ["Grass", "Poison"],
    role: "Redirection / Sleep Inducer",
    summary: "Controle de campo supremo. Adormece alvos com Spore e absorve ataques com Rage Powder.",
    ability: "Regenerator",
    item: "Rocky Helmet",
    teraType: "Water",
    nature: "Sassy",
    evSpread: "252 HP / 156 Def / 100 SpD",
    currentMoves: ["Spore", "Rage Powder", "Pollen Puff", "Protect"],
    recommendedMoves: [
      { name: "Spore", type: "Grass", category: "Status", priority: "Core", reason: "Sleep 100% accuracy, força switches ou pune falhas." },
      { name: "Rage Powder", type: "Bug", category: "Status", priority: "Core", reason: "Redireciona dano para proteger sweepers frágeis." },
      { name: "Pollen Puff", type: "Bug", category: "Special", priority: "Recommended", reason: "Cura aliados ou causa dano chip." },
      { name: "Protect", type: "Normal", category: "Status", priority: "Core", reason: "Necessário para stall e leitura de oponente." }
    ],
    alternativeItems: [
      { name: "Sitrus Berry", reason: "Recuperação imediata em golpes super efetivos." },
      { name: "Covert Cloak", reason: "Ignora Fake Out e Spore inimigo." }
    ],
    alternativeTeraTypes: [
      { type: "Dark", reason: "Fica imune a Prankster Taunt de Tornadus." },
      { type: "Fire", reason: "Resiste a ataques Ice e Fire." }
    ],
    strengths: ["Melhor redirecionador do jogo", "Regenerator mantém ele vivo", "Spore é uma ameaça constante"],
    concerns: ["Muito lento (pessimo fora de TR)", "Passivo contra Grass types / Safety Goggles", "Fraco a Ice, Fire e Flying"],
    adjustments: [
      "Use para facilitar setup ou absorver dano letal.",
      "Regenerator permite trocas agressivas.",
      "Atenção redobrada com inimigos usando Safety Goggles."
    ],
    alternatives: [
      {
        name: "Ogerpon-Wellspring",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017-wellspring.png",
        types: ["Grass", "Water"],
        role: "Offensive Redirection",
        why: "Oferece Follow Me com pressão ofensiva.",
        gains: ["Water typing", "Higher speed"],
        loses: ["Sleep pressure (Spore)", "Regenerator"]
      },
      {
        name: "Indeedee-F",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
        types: ["Psychic", "Normal"],
        role: "Support / Terrain Setter",
        why: "Psychic Terrain protege contra priority e oferece Follow Me.",
        gains: ["Psychic Terrain", "Priority protection"],
        loses: ["Spore", "Rocky Helmet synergy"]
      },
      {
        name: "Brute Bonnet",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
        types: ["Grass", "Dark"],
        role: "Physical Support",
        why: "Aproveita o Sun e oferece Spore com dano físico real.",
        gains: ["Sun synergy", "Dark coverage"],
        loses: ["Regenerator", "Better bulk"]
      }
    ]
  }
];

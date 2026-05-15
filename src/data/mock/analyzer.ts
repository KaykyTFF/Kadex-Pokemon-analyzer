export const ANALYZER_DATA = {
  header: {
    teamName: "Tailwind Hyper Offense",
    format: "VGC 2024 Reg G",
    playstyle: "Tailwind / Hyper Offense",
    lastAnalyzed: "Today",
  },
  scores: {
    overall: 82,
    offensivePressure: "High",
    defensiveStability: "Medium",
    speedControl: "Good",
    formatFit: "Strong"
  },
  defensiveCoverage: {
    weaknesses: [
      { type: "Ground", severity: "critical", count: 3 },
      { type: "Ice", severity: "critical", count: 3 },
      { type: "Fairy", severity: "warning", count: 2 },
      { type: "Flying", severity: "warning", count: 2 }
    ],
    resistances: [
      { type: "Grass", count: 3 },
      { type: "Dark", count: 2 },
      { type: "Fire", count: 2 },
      { type: "Bug", count: 4 }
    ],
    immunities: [
      { type: "Dragon", count: 1, source: "Fairy typing" },
      { type: "Normal", count: 1, source: "Ghost typing" },
      { type: "Fighting", count: 1, source: "Ghost typing" }
    ]
  },
  offensiveCoverage: {
    strongInto: ["Dragon", "Dark", "Fighting", "Water", "Steel"],
    weakInto: ["Poison", "Fire"],
    missingCoverage: [
      "Reliable Ice coverage missing",
      "No strong Ground-type STAB"
    ]
  },
  majorThreats: [
    { name: "Miraidon", level: "high", reason: "Pressiona com Electric Terrain e dano especial alto.", answer: "Rillaboom terrain control needed." },
    { name: "Calyrex-Shadow", level: "high", reason: "Ameaça de sweep rápido com Astral Barrage.", answer: "Incineroar pivot / Sucker Punch." },
    { name: "Landorus-Therian", level: "medium", reason: "Intimidate cycle and Ground coverage.", answer: "Flutter Mane pressure." },
    { name: "Amoonguss", level: "low", reason: "Spore redirection.", answer: "Rillaboom / Taunt." }
  ],
  roleBalance: {
    counts: {
      "Physical Attackers": 2,
      "Special Attackers": 1,
      "Support": 2,
      "Speed Control": 1,
      "Defensive Pivot": 1
    },
    alerts: [
      { text: "Good offensive physical/special split.", type: "positive" },
      { text: "Strong support presence (Fake Out / Redirection).", type: "positive" },
      { text: "No clear setup sweeper.", type: "info" }
    ]
  },
  speedControl: {
    fastest: "Flutter Mane (135 Base)",
    tools: ["Tailwind", "Fake Out"],
    trickRoomMatchup: "High Risk",
    priorityMoves: "Medium (Sucker Punch, Grassy Glide)",
    notes: [
      "Tailwind mode is clear, but backup speed control is limited.",
      "Consider adding stronger Trick Room counterplay (e.g. Taunt or Imprison)."
    ]
  },
  formatChecklist: [
    { label: "6 Pokémon selected", status: "good" },
    { label: "Protect coverage checked", status: "good" },
    { label: "Fake Out support detected", status: "good" },
    { label: "Speed control available", status: "good" },
    { label: "Intimidate support", status: "good" },
    { label: "Restricted slot usage", status: "good" },
    { label: "Trick Room answer", status: "missing" },
    { label: "Wide Guard / Spread block", status: "warning" }
  ],
  synergy: {
    pairs: [
      { pair: "Koraidon + Flutter Mane", desc: "Pressão ofensiva dupla brutal e ativação automática de Protosynthesis." },
      { pair: "Incineroar + Rillaboom", desc: "Fake Out cycling, pivot seguro com U-turn/Parting Shot e controle de terreno." }
    ],
    conflicts: [
      { text: "Sun (Orichalcum Pulse) pode enfraquecer moves de Water-type se você os adicionar futuramente." },
      { text: "Fraqueza Ground acumulada entre Incineroar e possíveis escolhas de Fire/Poison." }
    ]
  },
  suggestions: {
    critical: [
      { text: "Add a stronger Ground answer", impact: "Reduces severe vulnerability to Landorus and Groudon." }
    ],
    recommended: [
      { text: "Improve Trick Room counterplay", impact: "Prevents auto-losses against Calyrex-Ice / Torkoal." },
      { text: "Add Protect on Rillaboom", impact: "Increases survivability and positioning options." }
    ],
    optional: [
      { text: "Consider Clear Amulet over Booster Energy", impact: "Improves Intimidate matchup for physical attackers." }
    ]
  },
  memberBreakdown: [
    { name: "Flutter Mane", role: "Special Sweeper", strength: "Excellent fast offensive pressure.", concern: "Frail against physical priority (Sucker Punch).", suggestion: "Consider bulky EV spread to survive specific benchmarks." },
    { name: "Koraidon", role: "Physical Wallbreaker", strength: "Immediate weather control and massive damage.", concern: "Fairy-type matchup is highly disadvantageous.", suggestion: "Ensure reliable Steel/Poison coverage or Terastallization." },
    { name: "Incineroar", role: "Defensive Pivot", strength: "Premier utility with Intimidate, Fake Out, Parting Shot.", concern: "Prone to being worn down by entry hazards and strong Water/Fighting moves.", suggestion: "Pair with Rillaboom for Grassy Terrain healing." }
  ],
  summaryText: "Este time possui forte pressão ofensiva e bom controle de velocidade impulsionado pelo sol (Orichalcum Pulse), mas precisa melhorar respostas defensivas contra Ground e Trick Room. A estrutura funciona muito bem para VGC agressivo, especialmente com o suporte tático de Fake Out e Terrain control."
};

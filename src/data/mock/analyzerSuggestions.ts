export interface PokemonSuggestion {
  name: string;
  slug: string;
  sprite: string;
  types: string[];
  role: string;
  solves: string[];
  reason: string;
  confidence: "High" | "Medium" | "Low";
}

export interface ReplacementSuggestion {
  current: string;
  suggested: string;
  currentSprite: string;
  suggestedSprite: string;
  currentTypes: string[];
  suggestedTypes: string[];
  reason: string;
  gains: string[];
  loses: string[];
  confidence: "High" | "Medium" | "Low";
}

export interface MoveSuggestion {
  pokemon: string;
  pokemonSprite: string;
  move: string;
  type: string;
  category: "Physical" | "Special" | "Status";
  replace?: string;
  reason: string;
  solves: string[];
}

export const POKEMON_SUGGESTIONS: PokemonSuggestion[] = [
  {
    name: "Landorus-Therian",
    slug: "landorus-therian",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645-therian.png",
    types: ["Ground", "Flying"],
    role: "Defensive Pivot",
    solves: ["Ground immunity", "Intimidate support", "Electric immunity"],
    reason: "Ajuda contra pressão Ground/Electric e adiciona Intimidate para matchups físicos.",
    confidence: "High"
  },
  {
    name: "Ogerpon-Wellspring",
    slug: "ogerpon-wellspring",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017-wellspring.png",
    types: ["Grass", "Water"],
    role: "Bulky Offensive Pivot",
    solves: ["Water resist", "Ground pressure", "Offensive coverage"],
    reason: "Melhora a resposta defensiva contra Water e adiciona pressão consistente.",
    confidence: "Medium"
  },
  {
    name: "Tornadus",
    slug: "tornadus",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    types: ["Flying"],
    role: "Speed Control Support",
    solves: ["Tailwind consistency", "Ground immunity", "Utility support"],
    reason: "Melhora o controle de velocidade e adiciona suporte com Tailwind.",
    confidence: "High"
  },
  {
    name: "Iron Hands",
    slug: "iron-hands",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    types: ["Fighting", "Electric"],
    role: "Bulky Fake Out Support",
    solves: ["Bulk", "Fake Out pressure", "Matchup into Water/Flying"],
    reason: "Adiciona presença defensiva e suporte de Fake Out.",
    confidence: "Medium"
  }
];

export const REPLACEMENT_SUGGESTIONS: ReplacementSuggestion[] = [
  {
    current: "Amoonguss",
    suggested: "Ogerpon-Wellspring",
    currentSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    suggestedSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017-wellspring.png",
    currentTypes: ["Grass", "Poison"],
    suggestedTypes: ["Grass", "Water"],
    reason: "Se o time precisa de mais pressão ofensiva e resistência a Water, Ogerpon pode encaixar melhor que Amoonguss.",
    gains: ["Better Water matchup", "More offensive pressure"],
    loses: ["Less redirection utility", "No Spore pressure"],
    confidence: "Medium"
  },
  {
    current: "Urshifu",
    suggested: "Landorus-Therian",
    currentSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    suggestedSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645-therian.png",
    currentTypes: ["Fighting", "Water"],
    suggestedTypes: ["Ground", "Flying"],
    reason: "Landorus-T adiciona imunidade Ground e Intimidate, melhorando o lado defensivo do time.",
    gains: ["Ground immunity", "Better pivoting", "Intimidate"],
    loses: ["Immediate breaking power", "Surging Strikes pressure"],
    confidence: "Medium"
  }
];

export const MOVE_SUGGESTIONS: MoveSuggestion[] = [
  {
    pokemon: "Flutter Mane",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    move: "Thunderbolt",
    type: "Electric",
    category: "Special",
    replace: "Icy Wind",
    reason: "Ajuda contra Water/Flying e amplia cobertura ofensiva.",
    solves: ["Water matchup", "Flying pressure"]
  },
  {
    pokemon: "Koraidon",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    move: "U-turn",
    type: "Bug",
    category: "Physical",
    reason: "Melhora pivot e controle de posicionamento.",
    solves: ["Pivoting", "Positioning control"]
  },
  {
    pokemon: "Incineroar",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    move: "Parting Shot",
    type: "Dark",
    category: "Status",
    reason: "Ajuda a reduzir pressão ofensiva inimiga e reposicionar.",
    solves: ["Stat lowering", "Pivoting"]
  },
  {
    pokemon: "Rillaboom",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    move: "Grassy Glide",
    type: "Grass",
    category: "Physical",
    reason: "Prioridade forte com Grassy Terrain.",
    solves: ["Priority damage", "Late game cleaning"]
  }
];

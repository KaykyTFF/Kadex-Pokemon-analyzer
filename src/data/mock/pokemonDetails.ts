export interface Move {
  name: string;
  type: string;
  category: "Physical" | "Special" | "Status";
  power?: number;
  accuracy?: number;
  pp?: number;
  level?: number;
}

export interface EvolutionStage {
  name: string;
  slug: string;
  sprite: string;
  method?: string;
  isCurrent?: boolean;
}

export interface PokemonDetail {
  id: number;
  name: string;
  slug: string;
  types: string[];
  category: string;
  height: string;
  weight: string;
  abilities: string[];
  hiddenAbility: string | null;
  eggGroups: string[];
  genderRatio?: { male: number; female: number } | null;
  description: string;
  baseStats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  evolution: EvolutionStage[];
  moves: {
    levelUp: Move[];
    tm: Move[];
    egg: Move[];
    hm?: Move[];
  };
  competitiveRoles: string[];
  typeMatchup: {
    weaknesses: { type: string; multiplier: string }[];
    resistances: { type: string; multiplier: string }[];
    immunities: { type: string; multiplier: string }[];
  };
}

export const MOCK_POKEMON_DETAILS: Record<string, PokemonDetail> = {
  "flutter-mane": {
    id: 987,
    name: "Flutter Mane",
    slug: "flutter-mane",
    types: ["Ghost", "Fairy"],
    category: "Paradox Pokémon",
    height: "1.4 m",
    weight: "4.0 kg",
    abilities: ["Protosynthesis"],
    hiddenAbility: null,
    eggGroups: ["Undiscovered"],
    genderRatio: null,
    description: "It has characteristics similar to a ghost mentioned in an ancient book. It's said to be the ghost of a pterosaur from a long-past era.",
    baseStats: { hp: 55, atk: 55, def: 55, spa: 135, spd: 135, spe: 135 },
    evolution: [{ name: "Flutter Mane", slug: "flutter-mane", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png", isCurrent: true }],
    moves: {
      levelUp: [
        { level: 1, name: "Astonish", type: "Ghost", category: "Physical", power: 30 },
        { level: 1, name: "Confuse Ray", type: "Ghost", category: "Status" },
        { level: 35, name: "Moonblast", type: "Fairy", category: "Special", power: 95 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Shadow Ball", type: "Ghost", category: "Special", power: 80 },
        { name: "Dazzling Gleam", type: "Fairy", category: "Special", power: 80 }
      ],
      egg: [],
      hm: []
    },
    competitiveRoles: ["Special Sweeper", "Revenge Killer"],
    typeMatchup: {
      weaknesses: [{ type: "Ghost", multiplier: "2x" }, { type: "Steel", multiplier: "2x" }],
      resistances: [{ type: "Bug", multiplier: "1/4x" }],
      immunities: [{ type: "Normal", multiplier: "0x" }, { type: "Fighting", multiplier: "0x" }, { type: "Dragon", multiplier: "0x" }]
    }
  },
  "koraidon": {
    id: 1007,
    name: "Koraidon",
    slug: "koraidon",
    types: ["Fighting", "Dragon"],
    category: "Paradox Pokémon",
    height: "2.5 m",
    weight: "303.0 kg",
    abilities: ["Orichalcum Pulse"],
    hiddenAbility: null,
    eggGroups: ["Undiscovered"],
    genderRatio: null,
    description: "It has characteristics similar to a creature mentioned in an old book. It's said to have split the land with its bare fists.",
    baseStats: { hp: 100, atk: 135, def: 115, spa: 85, spd: 100, spe: 135 },
    evolution: [{ name: "Koraidon", slug: "koraidon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png", isCurrent: true }],
    moves: {
      levelUp: [
        { level: 1, name: "Breaking Swipe", type: "Dragon", category: "Physical", power: 60 },
        { level: 1, name: "Ancient Power", type: "Rock", category: "Special", power: 60 },
        { level: 56, name: "Collision Course", type: "Fighting", category: "Physical", power: 100 },
        { level: 91, name: "Flare Blitz", type: "Fire", category: "Physical", power: 120 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Outrage", type: "Dragon", category: "Physical", power: 120 },
        { name: "Close Combat", type: "Fighting", category: "Physical", power: 120 },
        { name: "Tera Blast", type: "Normal", category: "Special", power: 80 }
      ],
      egg: [],
      hm: []
    },
    competitiveRoles: ["Physical Wallbreaker", "Sun Setter"],
    typeMatchup: {
      weaknesses: [
        { type: "Fairy", multiplier: "4x" },
        { type: "Flying", multiplier: "2x" },
        { type: "Psychic", multiplier: "2x" },
        { type: "Ice", multiplier: "2x" },
        { type: "Dragon", multiplier: "2x" }
      ],
      resistances: [
        { type: "Rock", multiplier: "1/2x" },
        { type: "Bug", multiplier: "1/2x" },
        { type: "Fire", multiplier: "1/2x" },
        { type: "Water", multiplier: "1/2x" },
        { type: "Grass", multiplier: "1/2x" },
        { type: "Electric", multiplier: "1/2x" },
        { type: "Dark", multiplier: "1/2x" }
      ],
      immunities: []
    }
  },
  "incineroar": {
    id: 727,
    name: "Incineroar",
    slug: "incineroar",
    types: ["Fire", "Dark"],
    category: "Heel Pokémon",
    height: "1.8 m",
    weight: "83.0 kg",
    abilities: ["Blaze"],
    hiddenAbility: "Intimidate",
    eggGroups: ["Field"],
    genderRatio: { male: 87.5, female: 12.5 },
    description: "This Pokémon's rough mannerisms and attitude are just a front. It can't help but feel happy when young Pokémon or children cheer it on.",
    baseStats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    evolution: [
      { name: "Litten", slug: "litten", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png" },
      { name: "Torracat", slug: "torracat", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png", method: "Level 17" },
      { name: "Incineroar", slug: "incineroar", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png", method: "Level 34", isCurrent: true }
    ],
    moves: {
      levelUp: [
        { level: 1, name: "Flare Blitz", type: "Fire", category: "Physical", power: 120 },
        { level: 1, name: "Darkest Lariat", type: "Dark", category: "Physical", power: 85 },
        { level: 34, name: "Throat Chop", type: "Dark", category: "Physical", power: 80 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Fake Out", type: "Normal", category: "Physical", power: 40 },
        { name: "Parting Shot", type: "Dark", category: "Status" }
      ],
      egg: [
        { name: "Parting Shot", type: "Dark", category: "Status" },
        { name: "Fake Out", type: "Normal", category: "Physical", power: 40 }
      ],
      hm: []
    },
    competitiveRoles: ["Intimidate Pivot", "Support", "Utility"],
    typeMatchup: {
      weaknesses: [
        { type: "Fighting", multiplier: "2x" },
        { type: "Ground", multiplier: "2x" },
        { type: "Rock", multiplier: "2x" },
        { type: "Water", multiplier: "2x" }
      ],
      resistances: [
        { type: "Ghost", multiplier: "1/2x" },
        { type: "Steel", multiplier: "1/2x" },
        { type: "Fire", multiplier: "1/2x" },
        { type: "Grass", multiplier: "1/2x" },
        { type: "Ice", multiplier: "1/2x" },
        { type: "Dark", multiplier: "1/2x" }
      ],
      immunities: [{ type: "Psychic", multiplier: "0x" }]
    }
  },
  "rillaboom": {
    id: 812,
    name: "Rillaboom",
    slug: "rillaboom",
    types: ["Grass"],
    category: "Drummer Pokémon",
    height: "2.1 m",
    weight: "90.0 kg",
    abilities: ["Overgrow"],
    hiddenAbility: "Grassy Surge",
    eggGroups: ["Field", "Grass"],
    genderRatio: { male: 87.5, female: 12.5 },
    description: "The Rillaboom that can command the most of its fellows through its drumming is the one that becomes the group's leader.",
    baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
    evolution: [
      { name: "Grookey", slug: "grookey", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png" },
      { name: "Thwackey", slug: "thwackey", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png", method: "Level 16" },
      { name: "Rillaboom", slug: "rillaboom", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png", method: "Level 35", isCurrent: true }
    ],
    moves: {
      levelUp: [
        { level: 1, name: "Drum Beating", type: "Grass", category: "Physical", power: 80 },
        { level: 1, name: "Double Hit", type: "Normal", category: "Physical", power: 35 },
        { level: 35, name: "Wood Hammer", type: "Grass", category: "Physical", power: 120 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Grassy Glide", type: "Grass", category: "Physical", power: 60 },
        { name: "Fake Out", type: "Normal", category: "Physical", power: 40 }
      ],
      egg: [
        { name: "Fake Out", type: "Normal", category: "Physical", power: 40 }
      ],
      hm: []
    },
    competitiveRoles: ["Terrain Setter", "Physical Attacker", "Pivot"],
    typeMatchup: {
      weaknesses: [
        { type: "Flying", multiplier: "2x" },
        { type: "Poison", multiplier: "2x" },
        { type: "Bug", multiplier: "2x" },
        { type: "Fire", multiplier: "2x" },
        { type: "Ice", multiplier: "2x" }
      ],
      resistances: [
        { type: "Ground", multiplier: "1/2x" },
        { type: "Water", multiplier: "1/2x" },
        { type: "Grass", multiplier: "1/2x" },
        { type: "Electric", multiplier: "1/2x" }
      ],
      immunities: []
    }
  },
  "amoonguss": {
    id: 591,
    name: "Amoonguss",
    slug: "amoonguss",
    types: ["Grass", "Poison"],
    category: "Mushroom Pokémon",
    height: "0.6 m",
    weight: "10.5 kg",
    abilities: ["Effect Spore"],
    hiddenAbility: "Regenerator",
    eggGroups: ["Grass"],
    genderRatio: { male: 50, female: 50 },
    description: "It lures Pokémon with its pattern, which looks like a Poké Ball. It then releases a cloud of poison spores.",
    baseStats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
    evolution: [
      { name: "Foongus", slug: "foongus", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png" },
      { name: "Amoonguss", slug: "amoonguss", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png", method: "Level 39", isCurrent: true }
    ],
    moves: {
      levelUp: [
        { level: 1, name: "Absorb", type: "Grass", category: "Special", power: 20 },
        { level: 1, name: "Spore", type: "Grass", category: "Status" },
        { level: 39, name: "Rage Powder", type: "Bug", category: "Status" }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Sludge Bomb", type: "Poison", category: "Special", power: 90 },
        { name: "Pollen Puff", type: "Bug", category: "Special", power: 90 }
      ],
      egg: [],
      hm: []
    },
    competitiveRoles: ["Redirection", "Sleep Inducer", "Tank"],
    typeMatchup: {
      weaknesses: [
        { type: "Flying", multiplier: "2x" },
        { type: "Fire", multiplier: "2x" },
        { type: "Psychic", multiplier: "2x" },
        { type: "Ice", multiplier: "2x" }
      ],
      resistances: [
        { type: "Fighting", multiplier: "1/2x" },
        { type: "Water", multiplier: "1/2x" },
        { type: "Grass", multiplier: "1/4x" },
        { type: "Electric", multiplier: "1/2x" },
        { type: "Fairy", multiplier: "1/2x" }
      ],
      immunities: []
    }
  },
  "urshifu": {
    id: 892,
    name: "Urshifu",
    slug: "urshifu",
    types: ["Fighting", "Water"],
    category: "Wushu Pokémon",
    height: "1.9 m",
    weight: "105.0 kg",
    abilities: ["Unseen Fist"],
    hiddenAbility: null,
    eggGroups: ["Undiscovered"],
    genderRatio: { male: 87.5, female: 12.5 },
    description: "This form of Urshifu is a strong believer in defeating foes by raining many blows down on them. Its strikes are as relentless as the flow of a river.",
    baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    evolution: [
      { name: "Kubfu", slug: "kubfu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png" },
      { name: "Urshifu", slug: "urshifu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892-rapid-strike.png", method: "Scroll of Waters", isCurrent: true }
    ],
    moves: {
      levelUp: [
        { level: 1, name: "Surging Strikes", type: "Water", category: "Physical", power: 25 },
        { level: 1, name: "Aqua Jet", type: "Water", category: "Physical", power: 40 },
        { level: 44, name: "Close Combat", type: "Fighting", category: "Physical", power: 120 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "U-turn", type: "Bug", category: "Physical", power: 70 },
        { name: "Drain Punch", type: "Fighting", category: "Physical", power: 75 }
      ],
      egg: [],
      hm: []
    },
    competitiveRoles: ["Physical Wallbreaker", "Pivot", "Rapid-Strike Focus"],
    typeMatchup: {
      weaknesses: [
        { type: "Flying", multiplier: "2x" },
        { type: "Grass", multiplier: "2x" },
        { type: "Electric", multiplier: "2x" },
        { type: "Psychic", multiplier: "2x" },
        { type: "Fairy", multiplier: "2x" }
      ],
      resistances: [
        { type: "Rock", multiplier: "1/2x" },
        { type: "Bug", multiplier: "1/2x" },
        { type: "Steel", multiplier: "1/2x" },
        { type: "Fire", multiplier: "1/2x" },
        { type: "Water", multiplier: "1/2x" },
        { type: "Ice", multiplier: "1/2x" },
        { type: "Dark", multiplier: "1/2x" }
      ],
      immunities: []
    }
  },
  "pikachu": {
    id: 25,
    name: "Pikachu",
    slug: "pikachu",
    types: ["Electric"],
    category: "Mouse Pokémon",
    height: "0.4 m",
    weight: "6.0 kg",
    abilities: ["Static"],
    hiddenAbility: "Lightning Rod",
    eggGroups: ["Field", "Fairy"],
    genderRatio: { male: 50, female: 50 },
    description: "It keeps its tail raised to monitor its surroundings. If you pull its tail, it will bite you.",
    baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    evolution: [
      { name: "Pichu", slug: "pichu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png" },
      { name: "Pikachu", slug: "pikachu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", method: "Friendship", isCurrent: true },
      { name: "Raichu", slug: "raichu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png", method: "Thunder Stone" }
    ],
    moves: {
      levelUp: [
        { level: 1, name: "Thunder Shock", type: "Electric", category: "Special", power: 40 },
        { level: 1, name: "Growl", type: "Normal", category: "Status" },
        { level: 12, name: "Quick Attack", type: "Normal", category: "Physical", power: 40 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Thunderbolt", type: "Electric", category: "Special", power: 90 },
        { name: "Volt Switch", type: "Electric", category: "Special", power: 70 }
      ],
      egg: [
        { name: "Fake Out", type: "Normal", category: "Physical", power: 40 },
        { name: "Extreme Speed", type: "Normal", category: "Physical", power: 80 }
      ],
      hm: []
    },
    competitiveRoles: ["Glass Cannon", "Support"],
    typeMatchup: {
      weaknesses: [{ type: "Ground", multiplier: "2x" }],
      resistances: [{ type: "Flying", multiplier: "1/2x" }, { type: "Steel", multiplier: "1/2x" }, { type: "Electric", multiplier: "1/2x" }],
      immunities: []
    }
  },
  "charizard": {
    id: 6,
    name: "Charizard",
    slug: "charizard",
    types: ["Fire", "Flying"],
    category: "Flame Pokémon",
    height: "1.7 m",
    weight: "90.5 kg",
    abilities: ["Blaze"],
    hiddenAbility: "Solar Power",
    eggGroups: ["Monster", "Dragon"],
    genderRatio: { male: 87.5, female: 12.5 },
    description: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never breathes fire at an opponent weaker than itself.",
    baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    evolution: [
      { name: "Charmander", slug: "charmander", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
      { name: "Charmeleon", slug: "charmeleon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", method: "Level 16" },
      { name: "Charizard", slug: "charizard", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", method: "Level 36", isCurrent: true }
    ],
    moves: {
      levelUp: [
        { level: 1, name: "Flare Blitz", type: "Fire", category: "Physical", power: 120 },
        { level: 1, name: "Dragon Claw", type: "Dragon", category: "Physical", power: 80 },
        { level: 36, name: "Air Slash", type: "Flying", category: "Special", power: 75 }
      ],
      tm: [
        { name: "Protect", type: "Normal", category: "Status" },
        { name: "Flamethrower", type: "Fire", category: "Special", power: 90 },
        { name: "Heat Wave", type: "Fire", category: "Special", power: 95 }
      ],
      egg: [
        { name: "Dragon Dance", type: "Dragon", category: "Status" },
        { name: "Ancient Power", type: "Rock", category: "Special", power: 60 }
      ],
      hm: []
    },
    competitiveRoles: ["Special Wallbreaker", "Sun Sweeper"],
    typeMatchup: {
      weaknesses: [
        { type: "Rock", multiplier: "4x" },
        { type: "Water", multiplier: "2x" },
        { type: "Electric", multiplier: "2x" }
      ],
      resistances: [
        { type: "Fighting", multiplier: "1/2x" },
        { type: "Bug", multiplier: "1/4x" },
        { type: "Steel", multiplier: "1/2x" },
        { type: "Fire", multiplier: "1/2x" },
        { type: "Grass", multiplier: "1/4x" },
        { type: "Fairy", multiplier: "1/2x" }
      ],
      immunities: [{ type: "Ground", multiplier: "0x" }]
    }
  }
};

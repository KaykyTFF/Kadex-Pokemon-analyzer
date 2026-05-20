export const MOCK_POKEMON = [
  {
    id: 987,
    name: "Flutter Mane",
    slug: "flutter-mane",
    types: ["Ghost", "Fairy"],
    abilities: ["Protosynthesis"],
    baseStats: { hp: 55, atk: 55, def: 55, spa: 135, spd: 135, spe: 135 },
    role: "Special Sweeper",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png"
  },
  {
    id: 1007,
    name: "Koraidon",
    slug: "koraidon",
    types: ["Fighting", "Dragon"],
    abilities: ["Orichalcum Pulse"],
    baseStats: { hp: 100, atk: 135, def: 115, spa: 85, spd: 100, spe: 135 },
    role: "Physical Sweeper",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png"
  },
  {
    id: 812,
    name: "Rillaboom",
    slug: "rillaboom",
    types: ["Grass"],
    abilities: ["Overgrow", "Grassy Surge"],
    baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
    role: "Physical Attacker / Support",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png"
  },
  {
    id: 727,
    name: "Incineroar",
    slug: "incineroar",
    types: ["Fire", "Dark"],
    abilities: ["Blaze", "Intimidate"],
    baseStats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    role: "Utility / Pivot",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png"
  },
  {
    id: 892,
    name: "Urshifu",
    slug: "urshifu",
    types: ["Fighting", "Water"],
    abilities: ["Unseen Fist"],
    baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    role: "Physical Wallbreaker",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892-rapid-strike.png"
  },
  {
    id: 591,
    name: "Amoonguss",
    slug: "amoonguss",
    types: ["Grass", "Poison"],
    abilities: ["Effect Spore", "Regenerator"],
    baseStats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
    role: "Redirection / Support",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png"
  }
];

export const MOCK_SAVED_TEAMS = [
  {
    id: "1",
    name: "VGC 2024 Tailwind Hyper Offense",
    format: "VGC 2024 Reg G",
    updatedAt: "2024-05-14T10:30:00Z",
    pokemon: MOCK_POKEMON.slice(0, 6)
  },
  {
    id: "2",
    name: "Koraidon Balance (Draft)",
    format: "Singles OU",
    updatedAt: "2024-05-12T15:45:00Z",
    pokemon: [MOCK_POKEMON[1], MOCK_POKEMON[3], MOCK_POKEMON[5]]
  }
];

export const TYPE_COLORS: Record<string, { from: string; to: string }> = {
  Fire: { from: "#f08030", to: "#f05030" },
  Water: { from: "#6890f0", to: "#4870f0" },
  Grass: { from: "#78c850", to: "#58a830" },
  Electric: { from: "#f8d030", to: "#f8b030" },
  Fairy: { from: "#ee99ac", to: "#ee7799" },
  Ghost: { from: "#705898", to: "#504888" },
  Fighting: { from: "#c03028", to: "#a02820" },
  Dragon: { from: "#7038f8", to: "#5828f8" },
  Dark: { from: "#705848", to: "#504030" },
  Poison: { from: "#a040a0", to: "#803080" },
  Steel: { from: "#b8b8d0", to: "#9898b0" },
  Ground: { from: "#e0c068", to: "#d0b050" },
  Flying: { from: "#a890f0", to: "#9080d0" },
  Normal: { from: "#a8a878", to: "#888858" },
  Ice: { from: "#98d8d8", to: "#78c8c8" },
  Psychic: { from: "#f85888", to: "#f83868" },
  Bug: { from: "#a8b820", to: "#889810" },
  Rock: { from: "#b8a038", to: "#988028" },
};

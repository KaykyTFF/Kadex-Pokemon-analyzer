export interface TypeMatchupData {
  type: string;
  description: string;
  strongAgainst: string[];
  weakTo: string[];
  resists: string[];
  immunities: string[];
  pokemonCount: number;
}

export const MOCK_TYPES: Record<string, TypeMatchupData> = {
  "normal": {
    type: "Normal",
    description: "The most basic type of Pokémon. They are very common and have few weaknesses.",
    strongAgainst: [],
    weakTo: ["Fighting"],
    resists: [],
    immunities: ["Ghost"],
    pokemonCount: 129
  },
  "fire": {
    type: "Fire",
    description: "Known for their offensive pressure and immunity to burn.",
    strongAgainst: ["Grass", "Ice", "Bug", "Steel"],
    weakTo: ["Water", "Ground", "Rock"],
    resists: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    immunities: [],
    pokemonCount: 82
  },
  "water": {
    type: "Water",
    description: "A highly defensive and versatile type, possessing only two weaknesses.",
    strongAgainst: ["Fire", "Ground", "Rock"],
    weakTo: ["Electric", "Grass"],
    resists: ["Fire", "Water", "Ice", "Steel"],
    immunities: [],
    pokemonCount: 153
  },
  "electric": {
    type: "Electric",
    description: "Characterized by high speed and a single weakness to Ground.",
    strongAgainst: ["Water", "Flying"],
    weakTo: ["Ground"],
    resists: ["Electric", "Flying", "Steel"],
    immunities: ["Paralysis"],
    pokemonCount: 68
  },
  "grass": {
    type: "Grass",
    description: "Immune to powder moves and Leech Seed. Offers excellent utility.",
    strongAgainst: ["Water", "Ground", "Rock"],
    weakTo: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    resists: ["Water", "Electric", "Grass", "Ground"],
    immunities: [],
    pokemonCount: 114
  },
  "ice": {
    type: "Ice",
    description: "Highly offensive but defensively frail, often functioning as glass cannons.",
    strongAgainst: ["Grass", "Ground", "Flying", "Dragon"],
    weakTo: ["Fire", "Fighting", "Rock", "Steel"],
    resists: ["Ice"],
    immunities: ["Freeze"],
    pokemonCount: 51
  },
  "fighting": {
    type: "Fighting",
    description: "Masters of physical combat, excellent at breaking Steel and Normal types.",
    strongAgainst: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    weakTo: ["Flying", "Psychic", "Fairy"],
    resists: ["Bug", "Rock", "Dark"],
    immunities: [],
    pokemonCount: 70
  },
  "poison": {
    type: "Poison",
    description: "Defensive typing that cannot be poisoned and removes Toxic Spikes.",
    strongAgainst: ["Grass", "Fairy"],
    weakTo: ["Ground", "Psychic"],
    resists: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    immunities: ["Poison"],
    pokemonCount: 74
  },
  "ground": {
    type: "Ground",
    description: "Crucial offensive typing that counters the common Electric and Steel types.",
    strongAgainst: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    weakTo: ["Water", "Grass", "Ice"],
    resists: ["Poison", "Rock"],
    immunities: ["Electric", "Thunder Wave"],
    pokemonCount: 73
  },
  "flying": {
    type: "Flying",
    description: "Immune to Ground-type attacks and entry hazards like Spikes.",
    strongAgainst: ["Grass", "Fighting", "Bug"],
    weakTo: ["Electric", "Ice", "Rock"],
    resists: ["Grass", "Fighting", "Bug"],
    immunities: ["Ground"],
    pokemonCount: 114
  },
  "psychic": {
    type: "Psychic",
    description: "Relies on high Special Attack and esoteric abilities to control the field.",
    strongAgainst: ["Fighting", "Poison"],
    weakTo: ["Bug", "Ghost", "Dark"],
    resists: ["Fighting", "Psychic"],
    immunities: [],
    pokemonCount: 98
  },
  "bug": {
    type: "Bug",
    description: "Fast evolvers with unique pivoting moves like U-turn.",
    strongAgainst: ["Grass", "Psychic", "Dark"],
    weakTo: ["Fire", "Flying", "Rock"],
    resists: ["Grass", "Fighting", "Ground"],
    immunities: [],
    pokemonCount: 91
  },
  "rock": {
    type: "Rock",
    description: "Defensively solid with a Special Defense boost in Sandstorm.",
    strongAgainst: ["Fire", "Ice", "Flying", "Bug"],
    weakTo: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    resists: ["Normal", "Fire", "Poison", "Flying"],
    immunities: [],
    pokemonCount: 71
  },
  "ghost": {
    type: "Ghost",
    description: "Immune to Normal and Fighting moves, cannot be trapped.",
    strongAgainst: ["Psychic", "Ghost"],
    weakTo: ["Ghost", "Dark"],
    resists: ["Poison", "Bug"],
    immunities: ["Normal", "Fighting", "Trapping"],
    pokemonCount: 61
  },
  "dragon": {
    type: "Dragon",
    description: "Mythical powerhouses with excellent neutral coverage.",
    strongAgainst: ["Dragon"],
    weakTo: ["Ice", "Dragon", "Fairy"],
    resists: ["Fire", "Water", "Electric", "Grass"],
    immunities: [],
    pokemonCount: 65
  },
  "dark": {
    type: "Dark",
    description: "Immune to Psychic types and Prankster-boosted status moves.",
    strongAgainst: ["Psychic", "Ghost"],
    weakTo: ["Fighting", "Bug", "Fairy"],
    resists: ["Ghost", "Dark"],
    immunities: ["Psychic", "Prankster"],
    pokemonCount: 68
  },
  "steel": {
    type: "Steel",
    description: "The ultimate defensive type, boasting numerous resistances and Poison immunity.",
    strongAgainst: ["Ice", "Rock", "Fairy"],
    weakTo: ["Fire", "Fighting", "Ground"],
    resists: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"],
    immunities: ["Poison", "Sandstorm damage"],
    pokemonCount: 66
  },
  "fairy": {
    type: "Fairy",
    description: "The newest type, introduced to balance Dragons. Excellent defensively and offensively.",
    strongAgainst: ["Fighting", "Dragon", "Dark"],
    weakTo: ["Poison", "Steel"],
    resists: ["Fighting", "Bug", "Dark"],
    immunities: ["Dragon"],
    pokemonCount: 60
  }
};

export const MOCK_TYPES_ARRAY = Object.values(MOCK_TYPES);

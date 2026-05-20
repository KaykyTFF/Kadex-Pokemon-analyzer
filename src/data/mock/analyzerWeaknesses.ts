import { TypeBadge } from "@/components/pokemon/TypeBadge";

export const TEAM_WEAKNESSES = [
  {
    title: "Ground Weakness",
    impact: "High",
    affected: ["Koraidon", "Incineroar", "Urshifu"],
    why: "O time tem poucas trocas seguras contra pressão Ground e pode perder posicionamento contra Earthquake, Earth Power e Headlong Rush.",
    needs: ["Ground immunity", "Flying-type or Levitate user", "safer defensive pivot"],
    type: "Ground"
  },
  {
    title: "Ice Weakness",
    impact: "High",
    affected: ["Rillaboom", "Koraidon"],
    why: "Ice coverage pune cores Grass/Dragon e pode limitar switch-ins defensivos.",
    needs: ["Steel coverage", "Fire pressure", "safer Ice resist"],
    type: "Ice"
  },
  {
    title: "Fairy Pressure",
    impact: "Medium",
    affected: ["Koraidon", "Urshifu"],
    why: "Fairy-types pressionam atacantes Fighting/Dragon e exigem respostas com Steel, Poison ou Fire coverage.",
    needs: ["Steel/Poison coverage", "better Fairy resist"],
    type: "Fairy"
  }
];

export const DEFENSIVE_COVERAGE = [
  {
    type: "Ground",
    status: "Weak",
    current: "Rillaboom checks some Ground-types, but no true immunity",
    fix: "add Flying or Levitate user"
  },
  {
    type: "Ice",
    status: "Risk",
    current: "Incineroar resists Ice, but team may be pressured by coverage",
    fix: "add Steel resist or stronger Fire pressure"
  },
  {
    type: "Fairy",
    status: "Watch",
    current: "Incineroar helps, but Koraidon and Urshifu dislike Fairy pressure",
    fix: "add Steel/Poison coverage"
  }
];

export const FIX_POKEMON = [
  {
    name: "Landorus-Therian",
    types: ["Ground", "Flying"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645-therian.png",
    helps: ["Ground immunity", "Intimidate support", "Electric immunity"]
  },
  {
    name: "Ogerpon-Wellspring",
    types: ["Grass", "Water"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017-wellspring.png",
    helps: ["Water resist", "Ground pressure", "offensive pivot"]
  },
  {
    name: "Tornadus",
    types: ["Flying"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    helps: ["Ground immunity", "Tailwind consistency", "speed control"]
  },
  {
    name: "Heatran",
    types: ["Fire", "Steel"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    helps: ["Fairy resist", "Ice resist", "Steel pressure"]
  }
];

export const FIX_REPLACEMENTS = [
  {
    out: "Urshifu",
    outSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    in: "Landorus-Therian",
    inSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645-therian.png",
    gains: ["Ground immunity", "defensive pivot", "Intimidate"],
    loses: ["immediate breaking power"]
  },
  {
    out: "Amoonguss",
    outSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    in: "Ogerpon-Wellspring",
    inSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017-wellspring.png",
    gains: ["offensive pressure", "Water resist"],
    loses: ["redirection support", "Spore pressure"]
  }
];

export const FIX_MOVES = [
  {
    pokemon: "Flutter Mane",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    move: "Thunderbolt",
    type: "Electric",
    helps: "Water / Flying",
    replace: "Icy Wind, if speed control is already covered"
  },
  {
    pokemon: "Koraidon",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    move: "Flare Blitz",
    type: "Fire",
    helps: "Steel / Grass / Ice"
  },
  {
    pokemon: "Incineroar",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    move: "Will-O-Wisp",
    type: "Fire",
    helps: "physical attackers"
  },
  {
    pokemon: "Rillaboom",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    move: "High Horsepower",
    type: "Ground",
    helps: "Fire / Steel / Poison"
  },
  {
    pokemon: "Amoonguss",
    pokemonSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    move: "Clear Smog",
    type: "Poison",
    helps: "setup sweepers"
  }
];

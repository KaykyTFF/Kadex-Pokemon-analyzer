export interface Item {
  id: string;
  name: string;
  category: "Held Item" | "Battle Item" | "Berry" | "Evolution Item" | "Key Item" | "Competitive Item";
  description: string;
  competitiveEffect: string;
  battleEffect: string;
  commonUsers: string[];
  bestCombinations: string;
  notes: string;
  sprite?: string;
}

export const MOCK_ITEMS: Item[] = [
  {
    id: "booster-energy",
    name: "Booster Energy",
    category: "Competitive Item",
    description: "A capsule filled with energy that boosts the strength of a Paradox Pokémon.",
    competitiveEffect: "Activates Protosynthesis or Quark Drive immediately upon switching in.",
    battleEffect: "If held by a Pokémon with Protosynthesis or Quark Drive, it consumes the item to activate the Ability regardless of weather or terrain.",
    commonUsers: ["Flutter Mane", "Iron Hands", "Iron Bundle", "Roaring Moon"],
    bestCombinations: "Best used on offensive Paradox Pokémon to gain an immediate tactical advantage without relying on Torkoal or Pincurchin.",
    notes: "Very strong in offensive teams. The item is consumed upon use, so it's a one-time boost per battle."
  },
  {
    id: "focus-sash",
    name: "Focus Sash",
    category: "Held Item",
    description: "An item to be held by a Pokémon. If the holder has full HP, it will endure a potential KO attack with 1 HP.",
    competitiveEffect: "Prevents a one-hit KO if the holder is at full health.",
    battleEffect: "If the holder has full HP and is hit by a move that would otherwise cause fainting, it survives with 1 HP. Consumed after use.",
    commonUsers: ["Chien-Pao", "Flutter Mane", "Whimsicott", "Glimmora"],
    bestCombinations: "Excellent for frail sweepers or lead Pokémon that need to guarantee at least one move or hazard setup.",
    notes: "Watch out for multi-hit moves like Surging Strikes or Icicle Spear, which bypass the Sash's protection."
  },
  {
    id: "choice-specs",
    name: "Choice Specs",
    category: "Held Item",
    description: "These curious glasses boost Sp. Atk but only allow the use of a single move.",
    competitiveEffect: "Boosts Sp. Atk by 50% but locks the user into the first move used.",
    battleEffect: "The holder's Special Attack is increased by 1.5x, but it can only use the first move selected until it switches out.",
    commonUsers: ["Flutter Mane", "Chi-Yu", "Gholdengo", "Sylveon"],
    bestCombinations: "Pair with powerful spread moves like Heat Wave or Make It Rain for maximum damage output.",
    notes: "Requires good prediction as being locked into an ineffective move can lose momentum."
  },
  {
    id: "choice-scarf",
    name: "Choice Scarf",
    category: "Held Item",
    description: "This curious scarf boosts Speed but only allow the use of a single move.",
    competitiveEffect: "Boosts Speed by 50% but locks the user into the first move used.",
    battleEffect: "The holder's Speed is increased by 1.5x, but it can only use the first move selected until it switches out.",
    commonUsers: ["Urshifu", "Landorus-T", "Gholdengo", "Annihilape"],
    bestCombinations: "Ideal for outspeeding fast threats or using 'Final Gambit' strategies to surprise opponents.",
    notes: "Often used to turn slow but powerful attackers into dangerous revenge killers."
  },
  {
    id: "leftovers",
    name: "Leftovers",
    category: "Held Item",
    description: "The holder's HP is slowly but continuously restored during battle.",
    competitiveEffect: "Restores 1/16 of the holder's maximum HP at the end of each turn.",
    battleEffect: "At the end of every turn, the holder recovers 6.25% of its max HP.",
    commonUsers: ["Amoonguss", "Ting-Lu", "Dondozo", "Garganacl"],
    bestCombinations: "Perfect for bulky tanks and defensive pivots that plan to stay on the field for multiple turns.",
    notes: "Synergizes well with Protect to 'stall' for extra recovery turns."
  },
  {
    id: "life-orb",
    name: "Life Orb",
    category: "Held Item",
    description: "It boosts the power of moves but at the cost of some HP on every hit.",
    competitiveEffect: "Boosts damage by 30% but causes 10% recoil damage on each successful attack.",
    battleEffect: "The holder's damaging moves deal 1.3x damage, but the user loses 10% of its max HP after each successful hit.",
    commonUsers: ["Iron Valiant", "Dragonite", "Palafin", "Meowscarada"],
    bestCombinations: "Best for mixed attackers or Pokémon with 'Magic Guard' which negates the recoil damage.",
    notes: "High risk item that significantly shortens a Pokémon's lifespan if not managed carefully."
  },
  {
    id: "sitrus-berry",
    name: "Sitrus Berry",
    category: "Berry",
    description: "If the holder's HP drops to half or less, it will be restored.",
    competitiveEffect: "Restores 25% of the holder's maximum HP when it falls below 50%.",
    battleEffect: "When the holder's HP reaches 50% or less, the berry is consumed to restore 25% of max HP.",
    commonUsers: ["Incineroar", "Rillaboom", "Hands", "Ogerpon"],
    bestCombinations: "Great for bulky support Pokémon to survive critical hits or stay healthy while pivoting.",
    notes: "Vulnerable to 'Unnerve' or 'Knock Off', which prevent the berry from activating."
  },
  {
    id: "assault-vest",
    name: "Assault Vest",
    category: "Held Item",
    description: "This offensive vest boosts Sp. Def but prevents the use of status moves.",
    competitiveEffect: "Boosts Sp. Def by 50% but restricts the user to offensive moves.",
    battleEffect: "Increases the holder's Special Defense by 1.5x, but the Pokémon cannot use moves in the 'Status' category.",
    commonUsers: ["Iron Hands", "Raging Bolt", "Entei", "Ursaluna-B"],
    bestCombinations: "Pairs well with Pokémon that have naturally high HP and four useful attacking moves.",
    notes: "Essentially gives a Pokémon the bulk of a special tank without sacrificing offensive presence."
  },
  {
    id: "clear-amulet",
    name: "Clear Amulet",
    category: "Held Item",
    description: "Prevents the holder's stats from being lowered by other Pokémon's moves or Abilities.",
    competitiveEffect: "Protects the holder from stat-lowering effects like Intimidate or Icy Wind.",
    battleEffect: "The holder's stats cannot be lowered by other Pokémon. Does not prevent self-inflicted stat drops.",
    commonUsers: ["Urshifu-R", "Koraidon", "Dragonite", "Baxcalibur"],
    bestCombinations: "Vital for physical attackers in a metagame dominated by 'Intimidate' users like Incineroar.",
    notes: "Allows physical sweepers to maintain their pressure regardless of enemy debuffs."
  },
  {
    id: "covert-cloak",
    name: "Covert Cloak",
    category: "Held Item",
    description: "Protects the holder from the additional effects of moves.",
    competitiveEffect: "Prevents secondary effects of moves, such as flinching from Fake Out or burns from Scald.",
    battleEffect: "The holder is immune to any secondary effects of moves targeted at it (flinching, stat drops, status conditions).",
    commonUsers: ["Pelipper", "Cresselia", "Farigiraf", "Gholdengo"],
    bestCombinations: "Ideal for Trick Room setters or weather leads who cannot afford to be flinched by 'Fake Out'.",
    notes: "A direct counter to common support strategies that rely on move side-effects."
  }
];

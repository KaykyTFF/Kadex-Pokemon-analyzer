export interface Learner {
  name: string;
  slug: string;
  sprite: string;
  id: number;
  types: string[];
  method: "Level Up" | "TM" | "Egg" | "Tutor";
  detail?: string; // e.g. "Level 35"
}

export interface MoveDetail {
  name: string;
  slug: string;
  type: string;
  category: "Physical" | "Special" | "Status";
  power: number | null;
  accuracy: number | null;
  pp: number;
  priority: number;
  description: string;
  effect: string;
  secondaryEffectChance?: string;
  target: "Single" | "Adjacent Foe" | "All Foes" | "Self" | "Ally" | "Field" | "Random";
  makesContact: boolean;
  generation: number;
  flags: {
    protect?: boolean;
    magicCoat?: boolean;
    snatch?: boolean;
    mirrorMove?: boolean;
    sound?: boolean;
    punch?: boolean;
    bite?: boolean;
    pulse?: boolean;
    ballistic?: boolean;
  };
  competitiveNotes: string;
  typeEffectiveness: {
    superEffective: string[];
    notVeryEffective: string[];
    noEffect: string[];
  };
  learnedBy: Learner[];
  relatedMoves: {
    name: string;
    slug: string;
    type: string;
    category: string;
    power: number | null;
    reason: string;
  }[];
}

export const MOCK_MOVE_DETAILS: Record<string, MoveDetail> = {
  "moonblast": {
    name: "Moonblast",
    slug: "moonblast",
    type: "Fairy",
    category: "Special",
    power: 95,
    accuracy: 100,
    pp: 15,
    priority: 0,
    target: "Single",
    makesContact: false,
    generation: 6,
    flags: { protect: true, mirrorMove: true },
    description: "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.",
    effect: "Deals damage and has a chance to lower the target's Special Attack.",
    secondaryEffectChance: "30% chance to lower Sp. Atk by 1 stage.",
    competitiveNotes: "Moonblast is a reliable Fairy STAB option for special attackers and is useful against Dragon, Dark and Fighting types.",
    typeEffectiveness: {
      superEffective: ["Fighting", "Dragon", "Dark"],
      notVeryEffective: ["Poison", "Steel", "Fire"],
      noEffect: []
    },
    learnedBy: [
      { id: 987, name: "Flutter Mane", slug: "flutter-mane", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png", types: ["Ghost", "Fairy"], method: "Level Up", detail: "Lvl 35" },
      { id: 700, name: "Sylveon", slug: "sylveon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png", types: ["Fairy"], method: "Level Up", detail: "Lvl 37" },
      { id: 1006, name: "Iron Valiant", slug: "iron-valiant", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png", types: ["Fairy", "Fighting"], method: "Level Up", detail: "Lvl 56" }
    ],
    relatedMoves: [
      { name: "Dazzling Gleam", slug: "dazzling-gleam", type: "Fairy", category: "Special", power: 80, reason: "Hits both foes in doubles." },
      { name: "Play Rough", slug: "play-rough", type: "Fairy", category: "Physical", power: 90, reason: "Physical alternative." },
      { name: "Spirit Break", slug: "spirit-break", type: "Fairy", category: "Physical", power: 75, reason: "Guaranteed Sp. Atk drop." }
    ]
  },
  "flare-blitz": {
    name: "Flare Blitz",
    slug: "flare-blitz",
    type: "Fire",
    category: "Physical",
    power: 120,
    accuracy: 100,
    pp: 15,
    priority: 0,
    target: "Single",
    makesContact: true,
    generation: 4,
    flags: { protect: true, mirrorMove: true },
    description: "The user cloaks itself in fire and charges the target. This also damages the user quite a lot and may leave the target with a burn.",
    effect: "User receives recoil damage. May burn the target.",
    secondaryEffectChance: "10% chance to burn; 33% recoil damage.",
    competitiveNotes: "A high-risk, high-reward physical STAB move. Essential for physical Fire types but the recoil can limit longevity.",
    typeEffectiveness: {
      superEffective: ["Bug", "Steel", "Grass", "Ice"],
      notVeryEffective: ["Rock", "Fire", "Water", "Dragon"],
      noEffect: []
    },
    learnedBy: [
      { id: 727, name: "Incineroar", slug: "incineroar", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png", types: ["Fire", "Dark"], method: "Level Up", detail: "Lvl 1" },
      { id: 1007, name: "Koraidon", slug: "koraidon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png", types: ["Fighting", "Dragon"], method: "Level Up", detail: "Lvl 91" },
      { id: 6, name: "Charizard", slug: "charizard", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", types: ["Fire", "Flying"], method: "Level Up", detail: "Lvl 1" }
    ],
    relatedMoves: [
      { name: "Fire Blitz", slug: "fire-blitz", type: "Fire", category: "Physical", power: 120, reason: "Identical power." },
      { name: "Heat Wave", slug: "heat-wave", type: "Fire", category: "Special", power: 95, reason: "Special alternative for doubles." }
    ]
  }
};

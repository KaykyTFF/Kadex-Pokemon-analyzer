export interface Ability {
  id: string;
  name: string;
  category: "Offensive" | "Defensive" | "Utility" | "Weather" | "Terrain" | "Speed Control";
  description: string;
  competitiveEffect: string;
  battleEffect: string;
  commonUsers: string[];
  counters: string;
  synergies: string;
}

export const MOCK_ABILITIES: Ability[] = [
  {
    id: "protosynthesis",
    name: "Protosynthesis",
    category: "Offensive",
    description: "Boosts the Pokémon's most proficient stat in harsh sunlight or if the Pokémon is holding Booster Energy.",
    competitiveEffect: "Increases the highest stat (except HP) by 30% (50% for Speed) under Sun or with Booster Energy.",
    battleEffect: "When Sunny Day is active or the user holds Booster Energy, its highest stat is increased. If multiple stats are tied, the priority is Speed, Attack, Defense, Special Attack, Special Defense.",
    commonUsers: ["Flutter Mane", "Raging Bolt", "Gouging Fire", "Great Tusk"],
    counters: "Cloud Nine, Rayquaza (Air Lock), Weather changes to Rain/Sand/Snow, or removing the Booster Energy before activation.",
    synergies: "Torkoal for sun setting, or offensive builds that can capitalize on the massive stat boost for a sweep."
  },
  {
    id: "intimidate",
    name: "Intimidate",
    category: "Defensive",
    description: "The Pokémon intimidates opposing Pokémon upon entering a battle, lowering their Attack stat.",
    competitiveEffect: "Lowers the Attack stat of all adjacent opponents by one stage upon entry.",
    battleEffect: "When the Pokémon enters the field, it lowers the Attack of all opposing Pokémon by 1 stage. This affects adjacent opponents in Doubles.",
    commonUsers: ["Incineroar", "Landorus-T", "Arcanine-H", "Salamence"],
    counters: "Clear Amulet, Defiant (boosts Atk by 2), Competitive (boosts SpA by 2), or Pokémon with Inner Focus/Oblivious.",
    synergies: "Bulky defensive cores and pivot moves like Parting Shot or U-turn to stack multiple Attack drops."
  },
  {
    id: "grassy-surge",
    name: "Grassy Surge",
    category: "Terrain",
    description: "Turns the ground into Grassy Terrain when the Pokémon enters a battle.",
    competitiveEffect: "Summons Grassy Terrain for 5 turns. Boosts Grass-type moves by 30% and restores HP each turn.",
    battleEffect: "Activates Grassy Terrain upon entry. For 5 turns, grounded Pokémon recover 1/16 HP each turn and Grass moves deal 1.3x damage. Moves like Earthquake/Magnitude deal half damage.",
    commonUsers: ["Rillaboom"],
    counters: "Other Terrain setters (Indeedee, Iron Valiant with Quark Drive), or moves like Ice Spinner/Steel Roller that destroy terrain.",
    synergies: "Pokémon with Grassy Glide (priority in terrain) and bulky teammates that appreciate the passive healing."
  },
  {
    id: "prankster",
    name: "Prankster",
    category: "Utility",
    description: "Gives priority to a Pokémon's status moves.",
    competitiveEffect: "Status moves gain +1 priority. Dark-type Pokémon are immune to Prankster moves.",
    battleEffect: "Moves in the 'Status' category gain +1 Priority. If the move is used against a Dark-type Pokémon, it fails completely.",
    commonUsers: ["Whimsicott", "Tornadus", "Sableye", "Grimmsnarl"],
    counters: "Dark-type Pokémon, Armor Tail, Queenly Majesty, Dazzling, or Psychic Terrain.",
    synergies: "Setters of Tailwind, screens (Reflect/Light Screen), or status spreaders that need to move before the opponent."
  },
  {
    id: "levitate",
    name: "Levitate",
    category: "Defensive",
    description: "By floating in the air, the Pokémon receives full immunity to all Ground-type moves.",
    competitiveEffect: "Full immunity to Ground-type moves, Spikes, Toxic Spikes, and Arena Trap.",
    battleEffect: "The Pokémon is immune to Ground-type attacks and most hazards/Abilities that affect grounded Pokémon.",
    commonUsers: ["Latias", "Latios", "Cresselia", "Rotom-Wash"],
    counters: "Mold Breaker, Gravity, Thousand Arrows, or Iron Ball.",
    synergies: "Electric or Poison-type Pokémon that are normally weak to Ground, allowing them to switch in safely."
  },
  {
    id: "regenerator",
    name: "Regenerator",
    category: "Defensive",
    description: "The Pokémon has a little of its HP restored when withdrawn from battle.",
    competitiveEffect: "Restores 33.3% of maximum HP when switching out.",
    battleEffect: "Whenever the Pokémon switches out and is replaced by another, it recovers 1/3 of its maximum HP.",
    commonUsers: ["Amoonguss", "Slowking-G", "Tornadus-T", "Mamoswine"],
    counters: "Moves that prevent switching (Mean Look, Shadow Tag), or dealing massive damage before the switch occurs.",
    synergies: "Pivot moves like U-turn, Volt Switch, or Eject Button users to keep the Pokémon healthy throughout the match."
  },
  {
    id: "magic-guard",
    name: "Magic Guard",
    category: "Defensive",
    description: "The Pokémon only takes damage from attacks.",
    competitiveEffect: "Prevents indirect damage from Poison, Burn, Life Orb recoil, Weather, and entry hazards.",
    battleEffect: "The Pokémon is immune to all non-direct damage sources. It still takes damage from moves used by the opponent.",
    commonUsers: ["Clefable", "Reuniclus", "Alakazam"],
    counters: "Direct attacking moves with high power. The Pokémon is still vulnerable to status conditions' other effects (like speed drop from paralysis).",
    synergies: "Life Orb (gain the boost without the recoil), or Focus Sash (prevent it from being broken by hazards)."
  },
  {
    id: "supreme-overlord",
    name: "Supreme Overlord",
    category: "Offensive",
    description: "Boosts its Attack and Sp. Atk stats for each ally that has already been defeated.",
    competitiveEffect: "Boosts Attack and Sp. Atk by 10% for each fainted teammate.",
    battleEffect: "For each fainted Pokémon in the user's party, its Attack and Special Attack stats are increased by 1.1x.",
    commonUsers: ["Kingambit"],
    counters: "Defeating Kingambit early before its teammates fall, or using Haze/Clear Smog to reset stat boosts.",
    synergies: "Teammates that can weaken the opponent before fainting, leaving Kingambit to clean up as a final sweeper."
  },
  {
    id: "multiscale",
    name: "Multiscale",
    category: "Defensive",
    description: "Reduces the amount of damage the Pokémon takes when its HP is full.",
    competitiveEffect: "Reduces damage taken by 50% when at full HP.",
    battleEffect: "If the Pokémon is at 100% HP, the next damage-dealing move targeted at it deals half damage.",
    commonUsers: ["Dragonite", "Lugia"],
    counters: "Entry hazards (Stealth Rock), chip damage (Sandstorm/Poison), or multi-hit moves.",
    synergies: "Reliable recovery (Roost) and hazard removal to keep the Pokémon at full health."
  },
  {
    id: "good-as-gold",
    name: "Good as Gold",
    category: "Utility",
    description: "A body of pure gold gives the Pokémon full immunity to other Pokémon's status moves.",
    competitiveEffect: "Immunity to all status moves targeted at this Pokémon.",
    battleEffect: "This Pokémon is immune to all moves in the 'Status' category (category 2).",
    commonUsers: ["Gholdengo"],
    counters: "Mold Breaker moves, or direct damage from powerful attacks.",
    synergies: "Setup teammates or those that benefit from having a teammate that cannot be easily disrupted by status."
  }
];

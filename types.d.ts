export type Vocation = "Paladin" | "Knight" | "Sorcerer" | "Druid";

export type Elemental =
  | "Fire"
  | "Ice"
  | "Energy"
  | "Poison"
  | "Death"
  | "Holy"
  | "Phisycal";

export type Skill =
  | "Magic"
  | "Distance"
  | "Sword"
  | "Axe"
  | "Club"
  | "Speed"
  | "Shielding";

export type Attribute = {
  /**
   * The points to add on the selected skill
   */
  points: number;
  /**
   * Skill to upgrade.
   */
  skill: Skill;
};

export type Resistance = {
  /**
   * Percentage number. Can be negative.
   */
  percentage: number;
  /**
   * Elemental force.
   */
  elemental: Elemental;
};

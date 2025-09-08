export default interface TPlayer {
  name: string;
  level: number;
  experience: number;
  maxExperience: number;
  gold: number;
  items: string[];
  currentHealth: number;
  maxHealth: number;
  currentMana: number;
  maxMana: number;
  healthIncrement: number;
  manaIncrement: number;
  strength: number;
  completedEncounters: string[];
}

import TRewards from "./TRewards";

export default interface TEncounters {
  name: string;
  levelRequirement: number;
  minNumberOfEnemies: number;
  maxNumberOfEnemies: number;
  elligibleEnemies: string[];
  rewards?: TRewards;
}

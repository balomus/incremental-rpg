import { Dispatch, SetStateAction } from "react";
import TEnemyType from "./TEnemyType";
import TRewards from "./TRewards";

export default interface TCombatArea {
  name: string;
  levelRequirement: number;
  minNumberOfEnemies: number;
  maxNumberOfEnemies: number;
  elligibleEnemies: string[];
  setEncounter: Dispatch<SetStateAction<TEnemyType[]>>;
  setEncounterName: Dispatch<SetStateAction<string>>;
  rewards?: TRewards;
}

import { Dispatch, SetStateAction } from "react";
import TEnemyType from "./TEnemyType";
import TRewards from "./TRewards";

export default interface TEncounter {
  encounterName: string;
  enemies: TEnemyType[];
  setEnemies: Dispatch<SetStateAction<TEnemyType[]>>;
  // rewards?: TRewards;
}

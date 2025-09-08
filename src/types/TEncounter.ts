import { Dispatch, SetStateAction } from "react";
import TEnemyType from "./TEnemyType";

export default interface TEncounter {
  encounterName: string;
  enemies: TEnemyType[];
  setEnemies: Dispatch<SetStateAction<TEnemyType[]>>;
}

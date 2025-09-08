import { Dispatch, SetStateAction } from "react";
import TEnemyType from "./TEnemyType";
import TRewards from "./TRewards";

export default interface TEnemy {
  enemy: TEnemyType;
  encounter: TEnemyType[];
  encounterName: string;
  setEncounter: Dispatch<SetStateAction<TEnemyType[]>>;
  encounterRewards?: TRewards;
}

import { Dispatch, SetStateAction } from "react";
import CombatArea from "./CombatArea";
import Enemy from "../types/EnemyType";

interface CombatAreasProps {
  setEncounter: Dispatch<SetStateAction<Enemy[]>>;
  setEncounterName: Dispatch<SetStateAction<string>>;
}

const CombatAreas = ({ ...props }: CombatAreasProps) => {
  return (
    <div className="border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <h2 className="text-xl pb-2">Select your encounter:</h2>
      <CombatArea
        name={"Grassy Plains"}
        levelRequirement={1}
        minNumberOfEnemies={2}
        maxNumberOfEnemies={3}
        elligibleEnemies={["Rat", "Slime", "Snake"]}
        setEncounter={props.setEncounter}
        setEncounterName={props.setEncounterName}
      />
    </div>
  );
};

export default CombatAreas;

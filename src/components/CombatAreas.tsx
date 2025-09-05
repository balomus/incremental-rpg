import { Dispatch, SetStateAction } from "react";
import CombatArea from "./CombatArea";
import TEnemyType from "../types/TEnemyType";
import encounters from "../Encounters.json";
import TEncounters from "../types/TEncounters";

interface CombatAreasProps {
  setEnemies: Dispatch<SetStateAction<TEnemyType[]>>;
  setEncounterName: Dispatch<SetStateAction<string>>;
}

const CombatAreas = ({ ...props }: CombatAreasProps) => {
  return (
    <div className="border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <h2 className="text-xl pb-2">Select your encounter:</h2>
      <div className="grid grid-cols-4 gap-4 pb-4 text-center font-bold">
        <div>Encounter Name</div>
        <div>Required Level</div>
        <div>Reward for Completion</div>
      </div>
      {encounters.map((encounter: TEncounters, index: number) => (
        <CombatArea
          name={encounter.name}
          levelRequirement={encounter.levelRequirement}
          minNumberOfEnemies={encounter.minNumberOfEnemies}
          maxNumberOfEnemies={encounter.maxNumberOfEnemies}
          elligibleEnemies={encounter.elligibleEnemies}
          setEncounter={props.setEnemies}
          setEncounterName={props.setEncounterName}
          rewards={encounter.rewards}
          key={index}
        />
      ))}
    </div>
  );
};

export default CombatAreas;

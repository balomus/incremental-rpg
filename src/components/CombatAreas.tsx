import { Dispatch, SetStateAction } from "react";
import CombatArea from "./CombatArea";
import EnemyType from "../types/EnemyType";

interface CombatAreasProps {
  setEncounter: Dispatch<SetStateAction<EnemyType[]>>;
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
      <CombatArea
        name={"Grassy Plains"}
        levelRequirement={1}
        minNumberOfEnemies={2}
        maxNumberOfEnemies={3}
        elligibleEnemies={["Rat", "Slime", "Snake"]}
        setEncounter={props.setEncounter}
        setEncounterName={props.setEncounterName}
        rewards={{ gold: 10, experience: 4 }}
      />
      <CombatArea
        name={"Slime Cave"}
        levelRequirement={2}
        minNumberOfEnemies={4}
        maxNumberOfEnemies={7}
        elligibleEnemies={["Slime"]}
        setEncounter={props.setEncounter}
        setEncounterName={props.setEncounterName}
        rewards={{ experience: 20 }}
      />

      <CombatArea
        name={"test1"}
        levelRequirement={2}
        minNumberOfEnemies={4}
        maxNumberOfEnemies={7}
        elligibleEnemies={["Slime"]}
        setEncounter={props.setEncounter}
        setEncounterName={props.setEncounterName}
        rewards={{
          items: ["Fire sword", "Ice sword"],
          experience: 24,
          gold: 7,
        }}
      />
      <CombatArea
        name={"test2"}
        levelRequirement={2}
        minNumberOfEnemies={4}
        maxNumberOfEnemies={7}
        elligibleEnemies={["Slime"]}
        setEncounter={props.setEncounter}
        setEncounterName={props.setEncounterName}
      />
    </div>
  );
};

export default CombatAreas;

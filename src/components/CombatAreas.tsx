import { Dispatch, SetStateAction } from "react";
import CombatArea from "./CombatArea";
import Enemy from "../types/EnemyType";

interface CombatAreasProps {
  setEncounter: Dispatch<SetStateAction<Enemy[]>>;
}

const CombatAreas = ({ ...props }) => {
  return (
    <div className="border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <CombatArea
        name={"Grassy Plains"}
        levelRequirement={1}
        minNumberOfEnemies={2}
        maxNumberOfEnemies={3}
        elligibleEnemies={["Rat", "Slime", "Snake"]}
        setEncounter={props.setEncounter}
      />
    </div>
  );
};

export default CombatAreas;

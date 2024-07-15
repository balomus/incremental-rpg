import { Dispatch, SetStateAction, useContext } from "react";
import { Button } from "antd";
import { generateEncounter } from "../util/GenerateEncounter";
import EnemyType from "../types/EnemyType";
import { PlayerContext } from "../context/PlayerContextProvider";

interface CombatAreaProps {
  name: string;
  levelRequirement: number;
  minNumberOfEnemies: number;
  maxNumberOfEnemies: number;
  elligibleEnemies: string[];
  setEncounter: Dispatch<SetStateAction<EnemyType[]>>;
  setEncounterName: Dispatch<SetStateAction<string>>;
}

const getNumberOfEnemies = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const CombatArea = ({ ...props }: CombatAreaProps) => {
  const { player } = useContext(PlayerContext);

  return (
    <div className="grid grid-cols-3 gap-4 pb-4 text-center">
      <div>{props.name}</div>
      <div>Required Level - {props.levelRequirement}</div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            props.setEncounterName(props.name);
            props.setEncounter(
              generateEncounter(
                getNumberOfEnemies(
                  props.minNumberOfEnemies,
                  props.maxNumberOfEnemies
                ),
                props.elligibleEnemies
              )
            );
          }}
          disabled={player.level < props.levelRequirement}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default CombatArea;

import { Dispatch, SetStateAction } from "react";
import { Button } from "antd";
import { generateEncounter } from "../util/GenerateEncounter";
import EnemyType from "../types/EnemyType";

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
  return (
    <div className="flex w-full justify-around items-center">
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
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default CombatArea;

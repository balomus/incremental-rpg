import { Button } from "antd";
import { generateEncounter } from "../util/GenerateEncounter";

interface CombatAreaProps {
  name: string;
  levelRequirement: number;
  minNumberOfEnemies: number;
  maxNumberOfEnemies: number;
  elligibleEnemies: string[];
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
          onClick={() =>
            generateEncounter(
              getNumberOfEnemies(
                props.minNumberOfEnemies,
                props.maxNumberOfEnemies
              ),
              ["Rat", "Slime", "Snake"]
            )
          }
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default CombatArea;

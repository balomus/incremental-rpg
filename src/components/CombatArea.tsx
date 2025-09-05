import { useContext } from "react";
import { Button } from "antd";
import { generateEncounter } from "../util/GenerateEncounter";
import { PlayerContext } from "../context/PlayerContextProvider";
import TCombatArea from "../types/TCombatArea";

const getNumberOfEnemies = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const CombatArea = ({ ...props }: TCombatArea) => {
  const { player } = useContext(PlayerContext);

  const getRewardString = () => {
    let rewardsString = "";
    const addComma = () => {
      if (rewardsString !== "") {
        rewardsString += ", ";
      }
    };

    if (props.rewards?.gold) {
      addComma();
      rewardsString += `${props.rewards.gold} gold`;
    }
    if (props.rewards?.experience) {
      addComma();
      rewardsString += `${props.rewards.experience} experience`;
    }
    if (props.rewards?.items) {
      props.rewards.items.map((item) => {
        addComma();
        rewardsString += item;
      });
    }
    return rewardsString;
  };

  if (player.level + 1 < props.levelRequirement) return <></>;

  return (
    <div className="grid grid-cols-4 gap-4 pb-4 text-center items-center">
      <div>{props.name}</div>
      <div>{props.levelRequirement}</div>
      {props.rewards ? <>{getRewardString()}</> : <i>No Rewards</i>}
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

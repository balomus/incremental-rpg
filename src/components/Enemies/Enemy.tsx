import { useContext } from "react";
import Bar from "../Bar";
import { Button } from "antd";
import { PlayerContext } from "../../context/PlayerContextProvider";
import TPlayer from "../../types/TPlayer";
import TEnemy from "../../types/TEnemy";
import TRewards from "../../types/TRewards";

const Enemy = ({ ...props }: TEnemy) => {
  const { player, setPlayer } = useContext(PlayerContext);
  const index = props.encounter.findIndex((e) => e.id === props.enemy.id);
  const newEncounterArray = props.encounter;
  const newPlayer: TPlayer = player;

  const damagePlayer = (damage: number) => {
    newPlayer.currentHealth -= damage;
  };

  const damageEnemy = (damage: number) => {
    newEncounterArray[index].health -= damage;
    if (newEncounterArray[index].health <= 0) {
      killEnemy();
    } else {
      props.setEncounter([...newEncounterArray]);
    }
  };

  const killEnemy = () => {
    newPlayer.experience += props.enemy.experienceYield;
    newPlayer.gold += props.enemy.goldYield;
    if (newEncounterArray.length === 1) {
      // finished encounter
      if (props.encounterRewards) {
        rewardPlayer(props.encounterRewards);
      }
    }
    newEncounterArray.splice(index, 1);
    props.setEncounter([...newEncounterArray]);
  };

  const rewardPlayer = (rewards: TRewards) => {
    if (!newPlayer.completedEncounters.includes(props.encounterName)) {
      newPlayer.gold += rewards.gold ? rewards.gold : 0;
      newPlayer.experience += rewards.experience ? rewards.experience : 0;
      newPlayer.items = [
        ...newPlayer.items,
        ...(rewards.items ? rewards.items : []),
      ];
      newPlayer.completedEncounters = [
        ...newPlayer.completedEncounters,
        props.encounterName,
      ];
    }
  };

  const updatePlayer = (newPlayer: TPlayer) => {
    setPlayer({
      ...newPlayer,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        {props.enemy.name} (lvl {props.enemy.level})
      </div>
      <div className="flex space-x-4 pb-4 items-center">
        <div className="flex flex-col grow justify-center">
          <div className="flex flex-col w-full items-center">
            <img
              src={`/${props.enemy.name}.png`}
              alt={props.enemy.name}
              className="w-1/2"
            />
          </div>
          <Bar
            type="health"
            currentValue={props.enemy.health}
            maxValue={props.enemy.maxHealth}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex space-x-4 pb-4 items-center">
          <Button
            type="primary"
            danger
            onClick={() => {
              damagePlayer(props.enemy.damage);
              damageEnemy(player.strength);
              updatePlayer(newPlayer);
            }}
          >
            Attack
          </Button>
          <Button type="primary">Magic</Button>
          <Button>Item</Button>
        </div>
      </div>
    </>
  );
};

export default Enemy;

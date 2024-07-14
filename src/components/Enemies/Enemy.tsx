import { Dispatch, SetStateAction, useContext } from "react";
import EnemyType from "../../types/EnemyType";
import Bar from "../Bar";
import { Button } from "antd";
import { PlayerContext } from "../../context/PlayerContextProvider";
import Player from "../../types/Player";

interface EnemyProps {
  enemy: EnemyType;
  encounter: EnemyType[];
  setEncounter: Dispatch<SetStateAction<EnemyType[]>>;
}

const Enemy = ({ ...props }: EnemyProps) => {
  const { player, setPlayer } = useContext(PlayerContext);
  const index = props.encounter.findIndex((e) => e.id === props.enemy.id);
  const newEncounterArray = props.encounter;
  const newPlayer = player;

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
    newEncounterArray.splice(index, 1);
    props.setEncounter([...newEncounterArray]);
  };

  const updatePlayer = (newPlayer: Player) => {
    setPlayer({
      ...newPlayer,
    });
  };

  return (
    <div className="flex space-x-4 pb-4 items-center">
      <div className="w-32">
        {props.enemy.name} {props.enemy.id} (lvl {props.enemy.level})
      </div>
      <div className="flex flex-col grow justify-center">
        <Bar
          type="health"
          currentValue={props.enemy.health}
          maxValue={props.enemy.maxHealth}
        />
      </div>

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
  );
};

export default Enemy;

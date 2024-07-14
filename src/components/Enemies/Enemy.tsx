import { Dispatch, SetStateAction, useContext } from "react";
import EnemyType from "../../types/EnemyType";
import Bar from "../Bar";
import { Button } from "antd";
import { PlayerContext } from "../../context/PlayerContextProvider";

interface EnemyProps {
  enemy: EnemyType;
  encounter: EnemyType[];
  setEncounter: Dispatch<SetStateAction<EnemyType[]>>;
}

const Enemy = ({ ...props }: EnemyProps) => {
  const { player, setPlayer } = useContext(PlayerContext);
  const index = props.encounter.findIndex((e) => e.id === props.enemy.id);

  const damageEnemy = (damage: number) => {
    const newEncounterArray = props.encounter;
    newEncounterArray[index].health -= damage;
    props.setEncounter([...newEncounterArray]);
  };

  const damagePlayer = (damage: number) => {
    setPlayer({
      ...player,
      currentHealth: player.currentHealth - damage,
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

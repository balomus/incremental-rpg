import { useContext, useState } from "react";
import EnemyType from "../../types/EnemyType";
import Bar from "../Bar";
import { Button } from "antd";
import { PlayerContext } from "../../context/PlayerContextProvider";

const Enemy = ({ ...props }: EnemyType) => {
  const { player, setPlayer } = useContext(PlayerContext);

  const [enemyMaxHealth, setEnemyMaxHealth] = useState(props.health);
  const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(props.health);

  return (
    <div className="flex space-x-4 pb-4 items-center">
      <div className="w-32">
        {props.name} (lvl {props.level})
      </div>
      <div className="flex flex-col grow justify-center">
        <Bar
          type="health"
          currentValue={enemyCurrentHealth}
          maxValue={enemyMaxHealth}
        />
      </div>

      <Button
        type="primary"
        danger
        onClick={() => {
          setEnemyCurrentHealth(enemyCurrentHealth - player.strength);
          setPlayer({
            ...player,
            currentHealth: player.currentHealth - props.damage,
          });
          // console.log("Attack clicked");
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

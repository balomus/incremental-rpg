import { useState } from "react";
import EnemyType from "../../types/EnemyType";

const Enemy = ({ ...props }: EnemyType) => {
  const [maxHealth, setMaxHealth] = useState(props.health);
  const [currentHealth, setCurrentHealth] = useState(props.health);

  // console.log("props.name ", props.name, "props.health ", props.health);

  return (
    <div>
      {props.name} Health: {currentHealth} / {props.health}
    </div>
  );
};

export default Enemy;

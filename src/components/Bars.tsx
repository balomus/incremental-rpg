import { useContext } from "react";
import Bar from "./Bar";
import { PlayerContext } from "../context/PlayerContextProvider";

const Bars = () => {
  const { player } = useContext(PlayerContext);

  return (
    <div className="flex flex-col grow">
      <Bar
        type="health"
        currentValue={player.currentHealth}
        maxValue={player.maxHealth}
        increment={player.healthIncrement}
      />
      <Bar
        type="mana"
        currentValue={player.currentMana}
        maxValue={player.maxMana}
        increment={player.manaIncrement}
      />
    </div>
  );
};

export default Bars;

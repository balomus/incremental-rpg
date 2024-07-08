import { useContext, useEffect, useState } from "react";
import Bar from "./Bar";
import { PlayerContext } from "../context/PlayerContextProvider";

// interface BarsProps {
//   currentHealth: number;
//   maxHealth: number;
//   healthIncrement: number;
//   currentMana: number;
//   maxMana: number;
//   manaIncrement: number;
// }

// const Bars = ({
//   currentHealth,
//   maxHealth,
//   healthIncrement,
//   currentMana,
//   maxMana,
//   manaIncrement,
// }: BarsProps) => {
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

import { useEffect, useState } from "react";
import Bar from "./Bar";

interface BarsProps {
  currentHealth: number;
  maxHealth: number;
  healthIncrement: number;
  currentMana: number;
  maxMana: number;
  manaIncrement: number;
}

const Bars = ({
  currentHealth,
  maxHealth,
  healthIncrement,
  currentMana,
  maxMana,
  manaIncrement,
}: BarsProps) => {
  return (
    <div className="flex flex-col grow">
      <Bar
        type="health"
        currentValue={currentHealth}
        maxValue={maxHealth}
        increment={healthIncrement}
      />
      <Bar
        type="mana"
        currentValue={currentMana}
        maxValue={maxMana}
        increment={manaIncrement}
      />
    </div>
  );
};

export default Bars;

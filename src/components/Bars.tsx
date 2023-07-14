import { useEffect, useState } from "react";
import Bar from "./Bar";

interface BarsProps {
  currentHealth: number;
  maxHealth: number;
  currentMana: number;
  maxMana: number;
}

const Bars = ({
  currentHealth,
  maxHealth,
  currentMana,
  maxMana,
}: BarsProps) => {
  return (
    <div className="flex flex-col grow">
      <Bar type="health" currentValue={currentHealth} maxValue={maxHealth} />
      <Bar type="mana" currentValue={currentMana} maxValue={maxMana} />
    </div>
  );
};

export default Bars;

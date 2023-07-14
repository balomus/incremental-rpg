import { Progress } from "antd";
import { useEffect, useState } from "react";

interface BarValue {
  type: "health" | "mana";
  currentValue: number;
  maxValue: number;
}

const Bar = ({ type, currentValue, maxValue }: BarValue) => {
  return (
    <div
      className={
        (type === "health" ? "text-red-400" : "text-blue-500") +
        " flex flex-row"
      }
    >
      <div className="min-w-max pr-3">{`${currentValue} / ${maxValue}`}</div>
      <Progress
        percent={currentValue}
        showInfo={false}
        trailColor="#6D5D6E"
        strokeColor={type === "health" ? "#F87171" : "#3B82F6"}
      />
    </div>
  );
};

export default Bar;

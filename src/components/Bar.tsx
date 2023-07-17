import { Progress } from "antd";

interface BarsProps {
  type: "health" | "mana";
  currentValue: number;
  maxValue: number;
  increment: number;
}

const Bar = ({ type, currentValue, maxValue, increment }: BarsProps) => {
  return (
    <div
      className={
        (type === "health" ? "text-red-400" : "text-blue-500") +
        " flex flex-row"
      }
    >
      <div className="min-w-max pr-3">{`${currentValue} / ${maxValue}`}</div>
      <Progress
        percent={(currentValue / maxValue) * 100}
        showInfo={false}
        trailColor="#6D5D6E"
        strokeColor={type === "health" ? "#F87171" : "#3B82F6"}
      />
      <div className="min-w-max">{increment} / second</div>
    </div>
  );
};

export default Bar;

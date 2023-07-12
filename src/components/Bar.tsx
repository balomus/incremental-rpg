import { Progress } from "antd";
import { useState } from "react";

interface BarValue {
  type: "health" | "mana";
  currentValue: number;
  maxValue: number;
}

const Bar = (bar: BarValue) => {
  const [currentValue, setCurrentValue] = useState(bar.currentValue);
  const [maxValue, setMaxValue] = useState(bar.maxValue);

  return (
    <div
      className={
        (bar.type === "health" ? "text-red-400" : "text-blue-500") +
        " flex flex-row"
      }
    >
      <div className="min-w-max pr-3">{`${currentValue} / ${maxValue}`}</div>
      {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet
        porttitor lacus luctus accumsan tortor. Tellus in metus vulputate eu
        scelerisque felis imperdiet proin. Nibh mauris cursus mattis molestie a.
        Turpis massa tincidunt dui ut ornare. Pharetra massa massa ultricies mi
        quis. Eget nulla facilisi etiam dignissim diam quis enim lobortis
        scelerisque. Ut sem viverra aliquet eget sit. In metus vulputate eu
        scelerisque felis imperdiet. Auctor urna nunc id cursus metus.
      </div> */}
      <Progress
        percent={currentValue}
        showInfo={false}
        trailColor="#6D5D6E"
        strokeColor={bar.type === "health" ? "#F87171" : "#3B82F6"}
      />
    </div>
  );
};

export default Bar;

import React, { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import "../../../css/multirangeslider.css";

interface RangeProps {
  name: string;
  sign: string;
  minValue: number;
  maxValue: number;
}

const Range: React.FC<RangeProps> = ({ name, sign, minValue, maxValue }) => {
  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);

  return (
    <div>
      <div className="text-black">
        <div className="flex justify-between">
          <div className="text-black">
            <p className="font-bold">{name}</p>
          </div>
          <div>
            <p className="font-semibold">
              {sign} <span>{min}</span> - <span>{max}</span>
            </p>
          </div>
        </div>

        <div className="multi-range-slider-container">
          <MultiRangeSlider
            min={minValue}
            max={maxValue}
            onInput={(e: ChangeResult) => {
              setMin(e.minValue);
              setMax(e.maxValue);
            }}
            label={false}
            ruler={false}
            style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
            barLeftColor="#ffffff"
            barInnerColor="#F7DD0A"
            barRightColor="#ffffff"
            thumbLeftColor="#F7DD0A"
            thumbRightColor="#F7DD0A"
          />
        </div>
      </div>
    </div>
  );
};

export default Range;

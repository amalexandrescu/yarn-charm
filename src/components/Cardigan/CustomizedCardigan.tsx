import React from "react";
import { colors } from "./CardiganSelector";
import "./CustomizedCardigan.css";

interface ICustomizedCardiganProps {
  colorCode: string;
}

const CustomizedCardigan: React.FC<ICustomizedCardiganProps> = ({
  colorCode,
}) => {
  //find return an object in format {colorName: ...;colorCode: ...}, this is why I use.?colorName
  const matchedColor = colors.find(
    (color) => color.colorCode === colorCode,
  )?.colorName;
  return (
    <div className="cardigan-image-wrapper">
      <img
        src={`/cardigan-${matchedColor}.png`}
        alt={`Cardigan in ${matchedColor}`}
      />
    </div>
  );
};

export default CustomizedCardigan;

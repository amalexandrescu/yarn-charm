import ColorPicker from "components/ColorPicker/ColorPicker";
import React from "react";

export const colors = [
  {
    colorCode: "#FFFFFF",
    colorName: "white",
  },
  {
    colorCode: "#FFF6D2",
    colorName: "beige",
  },
  {
    colorCode: "#FFB6C1",
    colorName: "pink",
  },
  {
    colorCode: "#E00158",
    colorName: "fuchsia",
  },
  {
    colorCode: "#AAE7D0",
    colorName: "green",
  },
  {
    colorCode: "#FFCD19",
    colorName: "yellow",
  },
  {
    colorCode: "#FFA500",
    colorName: "orange",
  },
  {
    colorCode: "#5FCADF",
    colorName: "blue",
  },
  {
    colorCode: "#BD34F7",
    colorName: "purple",
  },
  {
    colorCode: "#000000",
    colorName: "black",
  },
];

const CardiganSelector: React.FC = () => {
  return (
    <div>
      <h2>Select cardigan color</h2>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default CardiganSelector;

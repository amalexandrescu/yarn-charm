import React from "react";
import ColorPickerTab from "./ColorPickerTab";

const colors = [
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
    colorName: "light pink",
  },
  {
    colorCode: "#E00158",
    colorName: "fuchsia",
  },
  {
    colorCode: "#AAE7D0",
    colorName: "light green",
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
    colorName: "turqoise",
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
      <ColorPickerTab colors={colors} />
    </div>
  );
};

export default CardiganSelector;

import React, { useState } from "react";
import "./ColorPickerTab.css"; // We'll add the styles in this file

const ColorPickerTab = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const colors = [
    "#FFFFFF", //white
    "#FFF6D2", //beige
    "#FFB6C1", //light pink
    "#E00158", //fuchsia
    "#AAE7D0", //light green
    "#FFCD19", //yellow
    "#FFA500", //orange
    "#5FCADF", //turqoise
    "#BD34F7", //purple
    "#000000", //black
  ];

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <h2>Select cardigan color</h2>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-box ${selectedColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPickerTab;

import React, { useState } from "react";
import "./ColorPickerTab.css"; // We'll add the styles in this file

interface IColorPickerProps {
  colors: Array<{
    colorCode: string;
    colorName: string;
  }>;
}

const ColorPickerTab: React.FC<IColorPickerProps> = ({ colors }) => {
  //both (selectedColor and hoveredColor) will have the colorCode
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-box ${selectedColor === color.colorCode ? "selected" : ""}`}
            style={{ backgroundColor: color.colorCode }}
            onClick={() => handleColorClick(color.colorCode)}
            onMouseEnter={() => setHoveredColor(color.colorCode)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            {/* Tooltip */}
            {hoveredColor === color.colorCode && (
              <div className="tooltip">{color.colorName}</div>
            )}
          </div>
        ))}
      </div>
      selected color: {selectedColor}
    </div>
  );
};

export default ColorPickerTab;

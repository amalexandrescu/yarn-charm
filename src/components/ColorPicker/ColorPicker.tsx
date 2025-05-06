import React, { useState } from "react";
import { useCardigan } from "../../context/CardiganContext"; // Import the context
import "./ColorPicker.css";

interface IColorPickerProps {
  colors: Array<{
    colorCode: string;
    colorName: string;
  }>;
}

const ColorPicker: React.FC<IColorPickerProps> = ({ colors }) => {
  const { selectedCardiganColor, setSelectedCardiganColor } = useCardigan(); // Use global state
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <div className="color-picker">
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-box ${selectedCardiganColor === color.colorCode ? "selected" : ""}`}
            style={{ backgroundColor: color.colorCode }}
            onClick={() => setSelectedCardiganColor(color.colorCode)} // Update context state
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
    </div>
  );
};

export default ColorPicker;

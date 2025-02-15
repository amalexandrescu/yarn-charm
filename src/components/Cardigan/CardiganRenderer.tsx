import React from "react";
import { useCardigan } from "src/context/CardiganContext";
import CustomizedCardigan from "./CustomizedCardigan";
import { colors } from "./CardiganSelector";

const CardiganRenderer: React.FC = () => {
  const { selectedColor } = useCardigan();

  const matchedColor = colors.find(
    (color) => color.colorCode === selectedColor,
  )?.colorName;
  return (
    <div>
      {selectedColor && (
        <h2>
          Selected Color: {matchedColor} - {selectedColor}
        </h2>
      )}
      {selectedColor && <CustomizedCardigan colorCode={selectedColor} />}
    </div>
  );
};

export default CardiganRenderer;

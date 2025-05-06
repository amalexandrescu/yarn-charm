import React from "react";
import { useCardigan } from "src/context/CardiganContext";
import CustomizedCardigan from "./CustomizedCardigan";
import { charmsMap } from "components/Charms/CharmSelector";

const charmPositions = [
  { top: "35%", left: "105px" },
  { top: "45%", left: "120px" },
  { top: "51%", left: "75px" },
  { top: "58%", left: "135px" },
  { top: "65%", left: "90px" },
  { top: "35%", right: "105px" }, // Mirrored using right
  { top: "45%", right: "120px" },
  { top: "51%", right: "75px" },
  { top: "58%", right: "135px" },
  { top: "65%", right: "90px" },
];

const CardiganRenderer: React.FC = () => {
  const { selectedCardiganColor, selectedCharmModel, selectedCharmColor } =
    useCardigan();

  const SelectedCharmComponent = charmsMap[selectedCharmModel];
  return (
    <div style={{ position: "relative", backgroundColor: "transparent" }}>
      <div>
        {selectedCardiganColor && (
          <CustomizedCardigan colorCode={selectedCardiganColor} />
        )}

        {charmPositions.map((position, index) => {
          if (
            !SelectedCharmComponent ||
            !selectedCardiganColor ||
            !selectedCharmColor ||
            selectedCharmModel === "noCharm"
          )
            return null;

          return (
            <span
              key={index}
              style={{
                position: "absolute",
                top: position.top,
                ...(position.left
                  ? { left: position.left }
                  : { right: position.right }), // Apply either left or right
                zIndex: 2,
              }}
            >
              <SelectedCharmComponent
                color={selectedCharmColor?.colorCode || ""}
                width="35px"
                height="35px"
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CardiganRenderer;

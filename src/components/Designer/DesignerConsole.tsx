import React, { useState } from "react";
import "./DesignerConsole.css";
import ContentTab from "components/MenuTabs/ContentTab";
import { useCardigan } from "src/context/CardiganContext";
import MenuTabs from "components/MenuTabs/MenuTabs";
import CardiganRenderer from "components/Cardigan/CardiganRenderer";
import { colors } from "components/Cardigan/CardiganSelector";

//options for the designer
//choose cardigan color
//choose type of accessories (flowers, hearts)
//choose color of accessories -> hearts - choose a color and flowers - choose combination of colors

const DesignerConsole: React.FC = () => {
  const [selectedTab, setSelectedtab] = useState<string>(() => {
    const savedTab = localStorage.getItem("selectedTab");
    return savedTab || "how-to";
  });
  const { selectedCardiganColor } = useCardigan();
  const matchedColor = colors.find(
    (color) => color.colorCode === selectedCardiganColor,
  )?.colorName;

  const handleTabChange = (newTab: string) => {
    setSelectedtab(newTab);
    localStorage.setItem("selectedTab", newTab);
  };

  return (
    <div className="designer-console">
      <div className="cardigan-designer">
        <MenuTabs onTabChange={handleTabChange} tab={selectedTab} />
        <ContentTab currentTab={selectedTab} />
      </div>
      <div className="cardigan-placeholder">
        {selectedCardiganColor && (
          <h2 className="cardigan-placeholder-title">
            Selected Color: {matchedColor} - {selectedCardiganColor}
          </h2>
        )}
        <div>
          <CardiganRenderer />
        </div>
      </div>
    </div>
  );
};

export default DesignerConsole;

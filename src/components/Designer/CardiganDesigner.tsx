import React, { useState } from "react";
import "./CardiganDesigner.css";
import MenuTab from "components/MenuTabs/MenuTab";
import ContentTab from "components/MenuTabs/ContentTab";

//options for the designer
//choose cardigan color
//choose type of accessories (flowers, hearts)
//choose color of accessories -> hearts - choose a color and flowers - choose combination of colors

const CardiganDesigner: React.FC = () => {
  const [selectedTab, setSelectedtab] = useState<string>("how-to");

  const handleTabChange = (newTab: string) => {
    setSelectedtab(newTab);
  };

  return (
    <div className="designer-console">
      <div className="cardigan-designer">
        <MenuTab onTabChange={handleTabChange} />
        <ContentTab currentTab={selectedTab} />
      </div>
      <div className="cardigan-placeholder">
        <div className="menu"></div>
      </div>
    </div>
  );
};

export default CardiganDesigner;

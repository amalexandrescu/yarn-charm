import React, { useState } from "react";
import "./DesignerConsole.css";
import ContentTab from "components/MenuTabs/ContentTab";
import { CardiganProvider } from "src/context/CardiganContext";
import MenuTabs from "components/MenuTabs/MenuTabs";
import CardiganRenderer from "components/Cardigan/CardiganRenderer";

//options for the designer
//choose cardigan color
//choose type of accessories (flowers, hearts)
//choose color of accessories -> hearts - choose a color and flowers - choose combination of colors

const DesignerConsole: React.FC = () => {
  const [selectedTab, setSelectedtab] = useState<string>("how-to");

  const handleTabChange = (newTab: string) => {
    setSelectedtab(newTab);
  };

  return (
    <div className="designer-console">
      <CardiganProvider>
        <div className="cardigan-designer">
          <MenuTabs onTabChange={handleTabChange} />
          <ContentTab currentTab={selectedTab} />
        </div>
        <div className="cardigan-placeholder">
          <div className="menu">
            <CardiganRenderer />
          </div>
        </div>
      </CardiganProvider>
    </div>
  );
};

export default DesignerConsole;

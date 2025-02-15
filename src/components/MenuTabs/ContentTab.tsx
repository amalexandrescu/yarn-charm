import React from "react";
import "./ContentTab.css";
import InstructionsTab from "./InstructionsTab";
import CardiganSelector from "components/Cardigan/CardiganSelector";
import CharmSelector from "components/Charms/CharmSelector";

interface IContentTabProps {
  currentTab: string;
}

const ContentTab: React.FC<IContentTabProps> = ({ currentTab }) => {
  return (
    <div>
      {currentTab && currentTab === "how-to" && <InstructionsTab />}
      {currentTab && currentTab === "cardigan-designer" && <CardiganSelector />}
      {currentTab && currentTab === "charm-designer" && <CharmSelector />}
    </div>
  );
};

export default ContentTab;

import React from "react";
import "./ContentTab.css";
import ColorPickerTab from "./ColorPickerTab";
import InstructionsTab from "./InstructionsTab";

interface IContentTabProps {
  currentTab: string;
}

const ContentTab: React.FC<IContentTabProps> = ({ currentTab }) => {
  return (
    <div>
      {currentTab && currentTab === "how-to" && <InstructionsTab />}
      {currentTab && currentTab === "cardigan-color" && <ColorPickerTab />}
      {currentTab && currentTab === "application-color" && <ColorPickerTab />}
    </div>
  );
};

export default ContentTab;

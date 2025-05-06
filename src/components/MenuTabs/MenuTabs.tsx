import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import "./MenuTabs.css";

interface IMenuTabProps {
  tab: string;
  onTabChange: (newTab: string) => void;
}

const MenuTabs: React.FC<IMenuTabProps> = ({ onTabChange, tab }) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null,
  ) => {
    if (newTab !== null) {
      onTabChange(newTab);
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        value={tab}
        exclusive
        onChange={handleChange}
        aria-label="message toggle"
        className="menu-tab"
      >
        <ToggleButton value="how-to">How to</ToggleButton>
        <ToggleButton value="cardigan-designer">Choose color</ToggleButton>
        <ToggleButton value="charm-designer">Choose charm</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default MenuTabs;

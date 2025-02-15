import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import "./MenuTabs.css";

interface IMenuTabProps {
  onTabChange: (newTab: string) => void;
}

const MenuTabs: React.FC<IMenuTabProps> = ({ onTabChange }) => {
  const [tab, setTab] = useState("how-to");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null,
  ) => {
    if (newTab !== null) {
      setTab(newTab);
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

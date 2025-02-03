import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

interface IMenuTabProps {
  onTabChange: (newTab: string) => void;
}

const MenuTab: React.FC<IMenuTabProps> = ({ onTabChange }) => {
  const [tab, setTab] = useState("how-to");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: string | null,
  ) => {
    if (newMode !== null) {
      setTab(newMode);
      onTabChange(newMode);
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
        <ToggleButton
          value="how-to"
          sx={{ textTransform: "none", fontFamily: "Playwrite PT" }}
        >
          How to
        </ToggleButton>
        <ToggleButton
          value="cardigan-color"
          sx={{ textTransform: "none", fontFamily: "Playwrite PT" }}
        >
          Choose color
        </ToggleButton>
        <ToggleButton
          value="application-color"
          sx={{ textTransform: "none", fontFamily: "Playwrite PT" }}
        >
          Choose applications
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default MenuTab;

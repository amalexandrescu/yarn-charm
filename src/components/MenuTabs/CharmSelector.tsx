import React, { useState } from "react";
import "./CharmSelector.css";
import FlowerCharm from "components/Icons/FlowerCharm";
import HeartCharm from "components/Icons/HeartCharm";

const colors = [
  {
    colorCode: "#FFFFFF",
    colorName: "white",
  },
  {
    colorCode: "#EA2E3E",
    colorName: "red",
  },
  {
    colorCode: "#7BB547",
    colorName: "green",
  },
  {
    colorCode: "#FF8002",
    colorName: "orange",
  },
  {
    colorCode: "#00DAFC",
    colorName: "blue",
  },
  {
    colorCode: "#C772D2",
    colorName: "purple",
  },
];

//I put [] around key:string because I tell typescript that the key can be any string
//without it, TS whould think that the keys of the object are just the ones I put inside it
//(for ex. if I try to add charmsMap["star"] = StarCharm, I would get an error)
const charmsMap: { [key: string]: React.FC<{ color: string }> } = {
  flower: FlowerCharm,
  heart: HeartCharm,
};

const charms = [
  { name: "flower", url: "./flower.svg", key: "flower_01" },
  { name: "heart", url: "./heart.svg", key: "heart_01" },
];

const CharmSelector: React.FC = () => {
  const [selectedCharm, setSelectedCharm] = useState<string>("");
  const [selectedCharmModel, setSelectedCharmModel] = useState<string>("");
  const [hoveredCharm, setHoveredCharm] = useState<string | null>(null);

  const handleCharmClick = (charm: string) => {
    setSelectedCharm(charm);
  };

  const handleCharmModel = (charm: string) => {
    setSelectedCharmModel(charm);
  };

  const SelectedCharmComponent = charmsMap[selectedCharmModel] || null;

  return (
    <div>
      <h2>Select charm model</h2>
      <div className="charm-model-container">
        {charms.map((charm) => (
          <img
            src={charm.url}
            alt={charm.name}
            className={`svg-charm ${selectedCharmModel === charm.name ? "selected" : ""}`}
            key={charm.key}
            onClick={() => handleCharmModel(charm.name)}
          />
        ))}
      </div>
      {selectedCharmModel && (
        <>
          <h3 className="sub-heading">Available colors</h3>
          <div className="charm-preview-container">
            {colors.map((color) => (
              <div
                key={color.colorCode}
                onClick={() => handleCharmClick(color.colorCode)}
                onMouseEnter={() => setHoveredCharm(color.colorCode)}
                onMouseLeave={() => setHoveredCharm(null)}
                className={`svg-charm ${selectedCharm === color.colorCode ? "selected" : ""}`}
              >
                {SelectedCharmComponent && (
                  <SelectedCharmComponent color={color.colorCode} />
                )}

                {hoveredCharm === color.colorCode && (
                  <div className="tooltip">{color.colorName}</div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CharmSelector;

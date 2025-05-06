import React, { useState } from "react";
import "./CharmSelector.css";
import FlowerCharm from "components/Icons/FlowerCharm";
import HeartCharm from "components/Icons/HeartCharm";
import {
  CharmColor,
  CharmModel,
  useCardigan,
} from "src/context/CardiganContext";
import NoCharm from "components/Icons/NoCharm";

export interface ICharmColor {
  colorCode: string;
  colorName: CharmColor;
}
const colors: ICharmColor[] = [
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
export const charmsMap: {
  [key: string]: React.FC<{
    color: string;
    style?: React.CSSProperties;
    width?: string;
    height?: string;
  }>;
} = {
  flower: FlowerCharm,
  heart: HeartCharm,
  noCharm: NoCharm,
};

interface ICharm {
  name: CharmModel;
  url: string;
  key: string;
}

const charms: ICharm[] = [
  { name: "noCharm", url: "./noCharm.svg", key: "noCharm_01" },
  { name: "flower", url: "./flower.svg", key: "flower_01" },
  { name: "heart", url: "./heart.svg", key: "heart_01" },
];

const CharmSelector: React.FC = () => {
  const [hoveredCharm, setHoveredCharm] = useState<string | null>(null);

  const {
    selectedCharmModel,
    setSelectedCharmModel,
    selectedCharmColor,
    setSelectedCharmColor,
  } = useCardigan();

  //handles the color of the charm (the one you select: eg. GREEN heart, and return the colorCode, not the name)
  const handleCharmClick = (charm: ICharmColor) => {
    setSelectedCharmColor(charm);
  };

  //handles the type of the charm: flower, heart etc.
  const handleCharmModel = (charm: CharmModel) => {
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

      {selectedCharmModel && selectedCharmModel !== "noCharm" && (
        <>
          <h3>Available colors</h3>
          <div className="charm-preview-container">
            {colors.map((color: ICharmColor) => (
              <div
                key={color.colorCode}
                onClick={() => handleCharmClick(color)}
                onMouseEnter={() => setHoveredCharm(color.colorCode)}
                onMouseLeave={() => setHoveredCharm(null)}
                className={`svg-charm ${selectedCharmColor?.colorCode === color.colorCode ? "selected" : ""}`}
              >
                {SelectedCharmComponent && (
                  <SelectedCharmComponent
                    color={color.colorCode}
                    width="40px"
                    height="40px"
                  />
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

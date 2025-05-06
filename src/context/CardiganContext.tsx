import { ICharmColor } from "components/Charms/CharmSelector";
import React, { createContext, ReactNode, useContext, useState } from "react";

type CardiganColor =
  | "white"
  | "beige"
  | "yellow"
  | "orange"
  | "pink"
  | "fuchsia"
  | "green"
  | "blue"
  | "purple"
  | "black"
  | ""
  | string;

export type CharmModel = "flower" | "heart" | "noCharm" | "";

export type CharmColor =
  | "white"
  | "red"
  | "green"
  | "orange"
  | "blue"
  | "purple"
  | "";

interface CardiganContextType {
  selectedCardiganColor: CardiganColor;
  setSelectedCardiganColor: (color: CardiganColor) => void;
  selectedCharmModel: CharmModel;
  setSelectedCharmModel: (model: CharmModel) => void;
  selectedCharmColor: ICharmColor | null;
  setSelectedCharmColor: (color: ICharmColor | null) => void;
}

const CardiganContext = createContext<CardiganContextType | undefined>(
  undefined,
);

//create a provider component
export const CardiganProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCardiganColor, setSelectedCardiganColor] = useState<
    CardiganColor | ""
  >("");
  const [selectedCharmModel, setSelectedCharmModel] = useState<CharmModel | "">(
    "noCharm",
  );
  const [selectedCharmColor, setSelectedCharmColor] =
    useState<ICharmColor | null>({
      colorCode: "#FFFFFF",
      colorName: "white",
    });

  return (
    <CardiganContext.Provider
      value={{
        selectedCardiganColor,
        setSelectedCardiganColor,
        selectedCharmModel,
        setSelectedCharmModel,
        selectedCharmColor,
        setSelectedCharmColor,
      }}
    >
      {children}
    </CardiganContext.Provider>
  );
};

export const useCardigan = () => {
  const context = useContext(CardiganContext);
  if (!context) {
    throw new Error("useCardigan must be used within a CardiganProvider");
  }
  return context;
};

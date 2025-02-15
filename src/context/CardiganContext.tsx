import { error } from "console";
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

interface CardiganContextType {
  selectedColor: CardiganColor;
  setSelectedColor: (color: CardiganColor) => void;
}

const CardiganContext = createContext<CardiganContextType | undefined>(
  undefined,
);

//create a provider component

export const CardiganProvider = ({ children }: { children: ReactNode }) => {
  const [selectedColor, setSelectedColor] = useState<CardiganColor | "">("");

  return (
    <CardiganContext.Provider value={{ selectedColor, setSelectedColor }}>
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

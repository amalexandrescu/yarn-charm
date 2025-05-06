import React from "react";
import "./App.css";
import DesignerConsole from "components/Designer/DesignerConsole";
import { CardiganProvider } from "./context/CardiganContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">Yarn Charm by Alexandra</div>
      <div className="App-content">
        <CardiganProvider>
          <DesignerConsole />
        </CardiganProvider>
      </div>
    </div>
  );
};

export default App;

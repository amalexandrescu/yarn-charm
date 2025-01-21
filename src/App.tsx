import React from "react";
import "./App.css";
import CardiganDesigner from "components/CardiganDesigner";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">Yarn Charm by Alexandra</div>
      <div className="App-content">
        <CardiganDesigner />
      </div>
    </div>
  );
};

export default App;

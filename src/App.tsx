import React from "react";
import "./App.css";
import DesignerConsole from "components/Designer/DesignerConsole";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">Yarn Charm by Alexandra</div>
      <div className="App-content">
        <DesignerConsole />
      </div>
    </div>
  );
};

export default App;

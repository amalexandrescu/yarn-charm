import React from "react";
import "./InstructionsTab.css";

const InstructionsTab: React.FC = () => {
  return (
    <div className="instructions-panel">
      <div className="instruction-line">
        <span>Choose your color</span>
        <img src="/arrow.svg" alt="arrow" className="arrow" />
      </div>
      <div className="instruction-line">
        <span>Choose your applications</span>
        <img src="/next-arrow.svg" alt="arrow" className="next-arrow" />
      </div>
      <div className="instruction-line">
        <span>Customize your applications</span>
      </div>
    </div>
  );
};

export default InstructionsTab;

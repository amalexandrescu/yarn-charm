import React from "react";
import "./InstructionsTab.css";

const InstructionsTab: React.FC = () => {
  return (
    <div className="instructions-panel">
      <div className="instruction-line">
        <span>1. Choose your color</span>
        {/* <img src="/arrow.svg" alt="arrow" className="arrow" /> */}
      </div>
      <div className="instruction-line">
        <span>2. Choose your charms</span>
        {/* <img src="/next-arrow.svg" alt="arrow" className="next-arrow" /> */}
      </div>
      <div className="instruction-line">
        <span>3. Customize your charms</span>
      </div>
    </div>
  );
};

export default InstructionsTab;

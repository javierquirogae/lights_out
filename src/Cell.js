import React from "react";
import "./Cell.css";

const Cell = ({ isLit, flipCellsAroundMe }) => {
  const handleClick = () => {
    flipCellsAroundMe();
  };

  return (
    <div
      className={`Cell ${isLit ? "Cell-lit" : ""}`}
      onClick={handleClick}
    ></div>
  );
};

export default Cell;

import React from "react";
import "./text.css";

export const NormalText = ({ children }) => {
  return (
    <p className="medium-normal-text">{children}</p>
  );
};

export const BoldText = ({ children }) => {
  return (
    <strong className="medium-bold-text">{children}</strong>
  )
}

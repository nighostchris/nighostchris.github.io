import React from "react";
import "./header.css";

export const Title = ({ children }) => {
  return (
    <h1 className="medium-title">{children}</h1>
  );
};

export const Subtitle = ({ children }) => {
  return (
    <h4 className="medium-subtitle">{children}</h4>
  )
}

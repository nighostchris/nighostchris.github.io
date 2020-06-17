import React from "react";
import "./image.css";

export const Image = ({ src, alt }) => {
  return (
    <img className="medium-image" src={src} alt={alt} />
  );
};

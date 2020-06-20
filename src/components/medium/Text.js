import React from "react";
import "./text.css";
import ButtonLink from "../ButtonLink";

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

export const HyperLinkText = ({ href, children }) => {
  return (
    <a href={href} className="medium-hyper-link-text">
      {children}
    </a>
  )
}

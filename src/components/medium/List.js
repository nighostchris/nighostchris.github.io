import React from "react";
import "./list.css";

export const NumberedList = ({ listItems }) => {
  return (
    <ol className="medium-numbered-list">
      {
        listItems && listItems.map((listItem) => (
          <li>{listItem}</li>
        ))
      }
    </ol>
  );
};

export const BulletList = ({ listItems }) => {
  return (
    <ol className="medium-bullet-list">
      {
        listItems && listItems.map((listItem) => (
          <li>{listItem}</li>
        ))
      }
    </ol>
  );
};

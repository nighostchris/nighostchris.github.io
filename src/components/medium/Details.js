import React from "react";
import "./container.css";

export const Details = ({ author, avatarsrc, date, length }) => {
  return (
    <div className="publish-details">
      <img
        alt={author}
        className="writing-avatar"
        src={avatarsrc}
      />
      <div className="publish-details-subsection">
        <span className="writing-author">{author}</span>
        <span className="publish-date-length">{`${date} · ${length} min read`}</span>
      </div>
    </div>
  );
};

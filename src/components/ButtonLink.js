import React from "react";
import { Link } from "gatsby";

const ButtonLink = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default ButtonLink;

import React from "react";
import { Link } from "gatsby";

const CustomLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="custom-link"
      activeClassName="custom-link-active"
      partiallyActive={to !== "/" ? true : false}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

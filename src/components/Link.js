import React from "react";
import { Link } from "gatsby";

const CustomLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-h2 uppercase text-custom-grey-300 tracking-wider hover:text-custom-grey-100 hover:font-bold"
      activeClassName="text-custom-grey-100 font-bold border-b-4 border-solid"
      partiallyActive={to !== "/" ? true : false}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

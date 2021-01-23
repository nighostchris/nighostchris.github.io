import React from "react";
import Header from "./Header";

const Root = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      <Header
        props={{
          logo: '/stonksviz-logo.svg'
        }}
      />
      { children }
    </div>
  );
}

export default Root;

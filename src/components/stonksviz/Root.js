import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";

const Root = ({ props, children }) => {
  const { title } = props;

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      <Header
        props={{
          logo: '/stonksviz-logo.svg'
        }}
      />
      <div className="w-full h-full flex flex-col bg-gray-200 overflow-y-auto">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        { children }
      </div>
    </div>
  );
}

export default Root;

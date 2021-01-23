import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

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
        <Footer
          props={{
            logo: '/stonksviz-logo.svg',
            background: 'bg-gray',
            bottomText: 'text-gray'
          }} 
        />
      </div>
    </div>
  );
}

export default Root;

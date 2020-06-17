import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./code.css";

export const Code = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={atomDark} className="medium-code">
      {children}
    </SyntaxHighlighter>
  );
};

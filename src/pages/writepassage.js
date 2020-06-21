import React from "react";
import { Helmet } from "react-helmet";
import JsxParser from "react-jsx-parser";
import { Code } from "../components/medium/Code";
import ButtonLink from "../components/ButtonLink";
import { Image } from "../components/medium/Image";
import { Details } from "../components/medium/Details";
import { Container } from "../components/medium/Container";
import { Title, Subtitle, Header } from "../components/medium/Header";
import { NormalText, BoldText, HyperLinkText } from "../components/medium/Text";
import Root from "../components/root/Root";
import "./writepassage.css";

const WritePassagePage = () => {
  const [rawPassage, setRawPassage] = React.useState("");

  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Write Passage</title>
      </Helmet>
      <div className="main-content-write-passage">
        <div className="write-passage-left-panel">
          <div className="jsx-block-selector">
            <i
              className="fas fa-paragraph jsx-block-icon"
              onClick={() => setRawPassage(rawPassage + "<NormalText></NormalText>")}
            />
            <i
              className="fas fa-bold jsx-block-icon"
              onClick={() => setRawPassage(rawPassage + "<BoldText></BoldText>")}
            />
            <i
              className="fas fa-link jsx-block-icon"
              onClick={() => setRawPassage(rawPassage + "<HyperLinkText href={``}></HyperLinkText>")}
            />
            <i
              className="fas fa-heading jsx-block-icon"
              onClick={() => setRawPassage(rawPassage + "<Header></Header>")}
            />
            <i
              className="fas fa-code jsx-block-icon"
              onClick={() => setRawPassage(rawPassage + "<Code language=\"\"></Code>")}
            />
            <i
              className="fas fa-file-image jsx-block-icon"
              onClick={() => setRawPassage(rawPassage + "<Image src=\"\" alt=\"\" />")}
            /> 
          </div>
          <textarea
            className="passage-editor"
            value={rawPassage}
            onChange={(e) => setRawPassage(e.target.value)}
          />
        </div>
        <Container>
          <JsxParser
            components={{ Title, Subtitle, Details, BoldText, NormalText, Header, Code, HyperLinkText, Image, ButtonLink }}
            jsx={rawPassage}
          />
        </Container>
      </div>
    </Root>
  );
}

export default WritePassagePage;

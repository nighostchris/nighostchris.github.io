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
        <textarea
          className="passage-editor"
          value={rawPassage}
          onChange={(e) => setRawPassage(e.target.value)} />
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

import React from "react";
import Root from "../components/root/Root";
import { Code } from "../components/medium/Code";
import { Image } from "../components/medium/Image";
import { Details } from "../components/medium/Details";
import { Container } from "../components/medium/Container";
import { Title, Subtitle, Header } from "../components/medium/Header";
import { NormalText, BoldText, HyperLinkText } from "../components/medium/Text";
import JsxParser from "react-jsx-parser";
import "./writing.css";

const data = `
  <Title>Title Title Title Title Title Title Title Title Title Title </Title>
  <Subtitle>Title Title Title Title Title Title Title Title Title Title </Subtitle>
  <Details
    length={5}
    date="2020-06-17"
    author="Chris Liu"
    avatarsrc="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
  />
  <NormalText>
    One of the questions, which rise in search for a good template is what is React.js.
    This technology was developed by Jordan Walke and is an open-source JavaScript library
    for creating user <BoldText>interfaces for applications, which use one single page. First React was applied in </BoldText>
    2011 on <HyperLinkText href="facebook.com">Facebook</HyperLinkText> newsfeed and in 2012 on Instagram, so you definitely have seen pages made with React.
  </NormalText>
  <Header>Header</Header>
  <Code language="markdown"># Testing</Code>
  <NormalText>
    One of the questions, which rise in search for a good template is what is React.js.
    This technology was developed by Jordan Walke and is an open-source JavaScript library
    for creating user <BoldText>interfaces for applications, which use one single page. First React was applied in </BoldText>
    2011 on <HyperLinkText href="facebook.com">Facebook</HyperLinkText> newsfeed and in 2012 on Instagram, so you definitely have seen pages made with React.
  </NormalText>
  <Image src="/gymlog/dashboard-calendar.png" alt="testing" />
`;

const NotFoundPage = () => {
  return(
    <Root>
      <div className="main-content-writing-template">
        <Container>
          <JsxParser
            components={{ Title, Subtitle, Details, NormalText, Header, Code, HyperLinkText, Image }}
            jsx={data}
          />        
        </Container>
      </div>
    </Root>
  );
};

export default NotFoundPage

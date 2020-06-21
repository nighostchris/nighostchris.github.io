import React from "react";
import Root from "../components/root/Root";
import { Code } from "../components/medium/Code";
import ButtonLink from "../components/ButtonLink";
import { Image } from "../components/medium/Image";
import { Details } from "../components/medium/Details";
import { Container } from "../components/medium/Container";
import { Title, Subtitle, Header } from "../components/medium/Header";
import { NormalText, BoldText, HyperLinkText } from "../components/medium/Text";
import { NumberedList, BulletList } from "../components/medium/List";
import { Breakline } from "../components/medium/Breakline";
import JsxParser from "react-jsx-parser";
import "./writing.css";

const WritingTemplate = ({ data, pageContext }) => {
  const writing = data.allWritingsJson.edges[0];
  const { belongsToPage } = pageContext;
  console.log(writing.node.content);

  const titleGenerator = (title, subtitle) => {
    return `
      <Title>${title}</Title>
      <Subtitle>${subtitle}</Subtitle>
    `;
  };

  const detailsGenerator = (length, date, author, avatarsrc) => {
    return `
      <Details
        length={${length}}
        date="${date}"
        author="${author}"
        avatarsrc="${avatarsrc}"
      />
    `;
  };

  return(
    <Root>
      <div className="main-content-writing-template">
        <Container>
          <JsxParser
            bindings={{ belongsToPage: belongsToPage }}
            components={{ Title, Subtitle, Details, BoldText, NormalText, Header, Code, HyperLinkText, Image, ButtonLink, NumberedList, BulletList, Breakline }}
            jsx={
              titleGenerator(writing.node.title, writing.node.subtitle)
              + detailsGenerator(writing.node.length, writing.node.date, writing.node.author, writing.node.avatarsrc)
              + writing.node.content
              + "<ButtonLink to={belongsToPage} className=\"card-button writing-card-button\">Back</ButtonLink>"
            }
          />
        </Container>
      </div>
    </Root>
  );
};

export const writingQuery = graphql`
  query writingQuery($writingId: String!) {
    allWritingsJson(filter: { id: { eq: $writingId } }) {
      edges {
        node {
          title
          subtitle
          date
          description
          length
          author
          avatarsrc
          content
        }
      }
    }
  }
`;

export default WritingTemplate

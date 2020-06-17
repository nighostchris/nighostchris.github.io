import React from "react";
import { Title, Subtitle } from "../components/medium/Header";
import { NormalText, BoldText } from "../components/medium/Text";

const NotFoundPage = () => (
  <>
    <Title>Title</Title>
    <Subtitle>Subtitle</Subtitle>
    <NormalText>
      One of the questions, which rise in search for a good template is what is React.js.
      This technology was developed by Jordan Walke and is an open-source JavaScript library
       for creating user <BoldText>interfaces for applications, which use one single page. First React was applied in </BoldText>
       2011 on Facebook newsfeed and in 2012 on Instagram, so you definitely have seen pages made with React.
    </NormalText>
  </>
)

export default NotFoundPage

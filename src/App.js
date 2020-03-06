import React from "react";
import ReactDom from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./styles/variables";
import Container from "./components/UI/Container";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${colors.bgDark};
  }
`;

const StyledH1 = styled.h1`
  color: ${colors.textPrimary};
  font-size: 3rem;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <StyledH1>Hello world</StyledH1>
    </Container>
  </>
);

ReactDom.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDom from "react-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "./styles/variables";
import { Container } from "./components/UI/Container";
import { Button } from "./components/UI/Button";
import { Card } from "./components/UI/Card";
import { Title } from "./components/UI/Title";
import { Dropdown } from "./components/UI/Dropdown";
import { ButtonSelect } from "./components/UI/ButtonSelect";

const StyledContainer = styled(Container)`
  padding: 10rem 0;
`;

const options = [
  { value: 1, title: 1 },
  { value: 2, title: 2 },
  { value: 3, title: 3 }
];

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <StyledContainer>
        <Card>
          <Title>Currency converter</Title>
          <ButtonSelect options={options}>Click me</ButtonSelect>
        </Card>
      </StyledContainer>
    </ThemeProvider>
  </>
);

ReactDom.render(<App />, document.getElementById("app"));

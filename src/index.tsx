import * as React from "react";
import * as ReactDom from "react-dom";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "./styles/variables";
import { Container } from "./components/UI/Container";
import { Card } from "./components/UI/Card";
import { Title } from "./components/UI/Title";
import { ButtonSelect } from "./components/UI/ButtonSelect";
import { InputSelect } from "./components/UI/InputSelect";
import SVG from "react-inlinesvg";
import Euro from "./svg/euro.svg";

const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

const StyledContainer = styled(Container)`
  padding: 10rem 0;
`;

const StyledInputSelect = styled(InputSelect)`
  margin-bottom: 1rem;
`;

const options = [
  { value: 1, title: 1 },
  { value: 2, title: 2 },
  { value: 3, title: 3 }
];

const App = () => {
  const [value, setValue] = useState<string | number>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setValue(e.target.value);
    } else {
      /^[0-9]*$/.test(e.target.value) && setValue(parseInt(e.target.value));
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors }}>
        <StyledContainer>
          <Card>
            <StyledTitle>Currency converter</StyledTitle>
            <StyledInputSelect
              onChange={onChange}
              value={value}
              options={options}
              type="text"
              placeholder="Enter value"
            />
            <ButtonSelect options={options}>Click me</ButtonSelect>
            <SVG src={Euro} width="20px" fill="#fff" />
          </Card>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

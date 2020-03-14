import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { colors } from "../../styles/variables";
import { StyledContainer } from "./styles";
import { CurrencyConverter } from "../CurrencyConverter/CurrencyConverter";
import { Container } from "../UI/Container";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Container>
          <CurrencyConverter />
        </Container>
      </ThemeProvider>
    </>
  );
};

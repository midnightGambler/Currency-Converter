import * as React from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/variables";
import { StyledContainer } from "./styles";
import { CurrencyConverter } from "../CurrencyConverter/CurrencyConverter";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors }}>
        <StyledContainer>
          <CurrencyConverter />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

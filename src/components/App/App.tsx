import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { colors } from "../../styles/variables";
import { CurrencyConverter } from "../CurrencyConverter/CurrencyConverter";
import { Container } from "../UI/Container";
import { store } from "../../store/store";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={colors}>
          <Container>
            <CurrencyConverter />
          </Container>
        </ThemeProvider>
      </Provider>
    </>
  );
};

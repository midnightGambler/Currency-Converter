import * as React from "react";
import * as ReactDom from "react-dom";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "./styles/variables";
import { Container } from "./components/UI/Container";
import { Card } from "./components/UI/Card";
import { Title } from "./components/UI/Title";
// import { ButtonSelect } from "./components/UI/ButtonSelect";
// import { InputSelect } from "./components/UI/InputSelect";
import euro from "./svg/euro.svg";
import { Icon } from "./components/UI/Icon";
import { Dropdown } from "./components/UI/Dropdown";
import { DropdownItem } from "./components/UI/DropdownItem";
import { DropdownMenu } from "./components/UI/DropdownMenu";

const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

const StyledContainer = styled(Container)`
  padding: 10rem 0;
`;

const StyledRow = styled.div`
  display: flex;
`;

// const StyledInputSelect = styled(InputSelect)`
//   margin-bottom: 1rem;
// `;

const options = [
  {
    value: 1,
    title: "eur"
  },
  {
    value: 2,
    title: "usd"
  },
  {
    value: 3,
    title: "rub"
  }
];

const App = () => {
  const [value, setValue] = useState<string | number>("");
  const [currency, setCurrency] = useState<string>("eur");

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
            <StyledRow>
              <Dropdown>
                {currency}
                {/* <Icon
                glyph={euro.id}
                viewBox={euro.viewBox}
                width="24px"
                height="24px"
              /> */}

                <DropdownMenu>
                  {options.map(option => (
                    <DropdownItem
                      onClick={setCurrency.bind(null, option.title)}
                    >
                      {option.title}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                {currency}
                {/* <Icon
                glyph={euro.id}
                viewBox={euro.viewBox}
                width="24px"
                height="24px"
              /> */}

                <DropdownMenu>
                  {options.map(option => (
                    <DropdownItem
                      onClick={setCurrency.bind(null, option.title)}
                    >
                      {option.title}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </StyledRow>
            <Icon
              glyph={euro.id}
              viewBox={euro.viewBox}
              width="24px"
              height="24px"
            />
          </Card>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

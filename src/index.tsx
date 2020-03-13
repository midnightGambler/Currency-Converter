import * as React from "react";
import * as ReactDom from "react-dom";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "./styles/variables";
import { Container } from "./components/UI/Container";
import { Card } from "./components/UI/Card";
import { Title } from "./components/UI/Title";
import eur from "./svg/eur.svg";
import usd from "./svg/usd.svg";
import gbp from "./svg/gbp.svg";
import rub from "./svg/rub.svg";
import { Icon } from "./components/UI/Icon/Icon";
import { IconProps } from "./components/UI/Icon/interfaces";
import { Dropdown } from "./components/UI/Dropdown/Dropdown";
import { DropdownItem } from "./components/UI/Dropdown/DropdownItem";
import { DropdownMenu } from "./components/UI/Dropdown/DropdownMenu";
import { Input } from "./components/UI/Input";

const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

const StyledContainer = styled(Container)`
  padding: 7rem 0;
`;

const StyledRow = styled.div`
  display: flex;
  box-shadow: 8px 8px 16px #424244, -8px -8px 16px #5c5a5e;
  border-radius: 2rem;
`;

const options: any = {
  eur: {
    value: 1,
    icon: (
      <Icon glyph={eur.id} viewBox={eur.viewBox} width="24px" height="24px" />
    )
  },
  usd: {
    value: 2,
    icon: (
      <Icon glyph={usd.id} viewBox={usd.viewBox} width="24px" height="24px" />
    )
  },
  rub: {
    value: 3,
    icon: (
      <Icon glyph={rub.id} viewBox={rub.viewBox} width="24px" height="24px" />
    )
  },
  gbp: {
    value: 4,
    icon: (
      <Icon glyph={gbp.id} viewBox={gbp.viewBox} width="24px" height="24px" />
    )
  }
};

const App = () => {
  const [value, setValue] = useState<string>("");
  const [currency, setCurrency] = useState<string>("eur");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d{1,}(\.\d{0,2})?$/.test(e.target.value) || !e.target.value) {
      setValue(e.target.value);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors }}>
        <StyledContainer>
          <Card>
            <StyledTitle>Dolly Leigh</StyledTitle>
            <StyledRow>
              <Dropdown>
                {options[currency].icon}
                <DropdownMenu>
                  {Object.keys(options)
                    .filter(key => key !== currency)
                    .map(key => (
                      <DropdownItem onClick={setCurrency.bind(null, key)}>
                        {options[key].icon}
                      </DropdownItem>
                    ))}
                </DropdownMenu>
              </Dropdown>
              <Input autoFocus onChange={onChange} value={value} />
            </StyledRow>
          </Card>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

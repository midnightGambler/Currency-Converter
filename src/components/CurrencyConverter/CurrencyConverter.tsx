import * as React from "react";
import { Card } from "../UI/Card";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import { StyledTitle, StyledRow, StyledLayout, StyledIcon } from "./styles";
import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import eur from "../../svg/eur.svg";
import rub from "../../svg/rub.svg";

export const CurrencyConverter: React.FC = () => (
  <Card>
    <StyledTitle>Dolly Leigh</StyledTitle>
    <StyledRow>
      <CurrencySelector />
      <AmountInput />
    </StyledRow>
    <StyledLayout>
      <CurrencyCard>
        <StyledIcon
          primary
          glyph={rub.id}
          viewBox={rub.viewBox}
          width="24px"
          height="24px"
        />
        RUB
      </CurrencyCard>
      <CurrencyCard />
      <CurrencyCard />
      <CurrencyCard />
    </StyledLayout>
  </Card>
);

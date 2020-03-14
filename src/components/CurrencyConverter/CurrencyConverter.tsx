import * as React from "react";
import { Card } from "../UI/Card";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { AmountInput } from "../AmountInput/AmountInput";
import { StyledTitle, StyledRow } from "./styles";

export const CurrencyConverter: React.FC = () => (
  <Card>
    <StyledTitle>Dolly Leigh</StyledTitle>
    <StyledRow>
      <CurrencySelector />
      <AmountInput />
    </StyledRow>
  </Card>
);

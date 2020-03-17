import * as React from "react";
import {
  StyledCard,
  StyledExchangeIcon,
  StyledSmall,
  StyledReadonlyInput,
  StyledCurrencyIcon
} from "./styles";
import { CurrencyCardProps } from "./interfaces";
import exchange from "../../svg/exchange.svg";

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  rate,
  type,
  icon
}) => {
  const inputRef = React.useRef(null);

  const handleCopy = (e: React.FocusEvent<HTMLInputElement>) => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  return (
    <StyledCard type={type}>
      <StyledSmall>
        <StyledExchangeIcon
          primary
          glyph={exchange.id}
          viewBox={exchange.viewBox}
          width="12px"
          height="12px"
        />
        {rate}
        <StyledCurrencyIcon
          primary
          glyph={icon.id}
          viewBox={icon.viewBox}
          width="32px"
          height="32px"
        />
      </StyledSmall>

      <StyledReadonlyInput
        onFocus={handleCopy}
        ref={inputRef}
        readOnly
        value="15201"
        tabIndex={-1}
      />
    </StyledCard>
  );
};

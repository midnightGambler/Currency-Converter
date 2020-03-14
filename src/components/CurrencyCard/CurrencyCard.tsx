import * as React from "react";
import { StyledCard, StyledSubtitle, StyledCloseIcon } from "./styles";
import close from "../../svg/close.svg";
import exchange from "../../svg/exchange.svg";

export const CurrencyCard: React.FC = ({ children }) => {
  return (
    <StyledCard>
      <StyledSubtitle>
        {children}
        <StyledCloseIcon
          primary
          glyph={exchange.id}
          viewBox={exchange.viewBox}
          width="16px"
          height="16px"
        />
      </StyledSubtitle>
    </StyledCard>
  );
};

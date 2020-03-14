import styled from "styled-components";
import { Icon } from "../UI/Icon/Icon";
import { Card } from "../UI/Card";

export const StyledCloseIcon = styled(Icon)`
  cursor: pointer;
  margin-left: auto;
`;
export const StyledExchangeIcon = styled(Icon)`
  margin-right: 0.2rem;
`;

export const StyledSubtitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const StyledCard = styled(Card)`
  flex: 0 0 49%;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const StyledSmall = styled.small`
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
`;

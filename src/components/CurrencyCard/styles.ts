import styled from "styled-components";
import { Icon } from "../UI/Icon/Icon";
import { Card } from "../UI/Card";

export const StyledCloseIcon = styled(Icon)`
  cursor: pointer;
  margin-left: auto;
`;

export const StyledSubtitle = styled.h3`
  display: flex;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  flex: 0 0 49%;
  padding: 1rem;
  margin-bottom: 1rem;
`;

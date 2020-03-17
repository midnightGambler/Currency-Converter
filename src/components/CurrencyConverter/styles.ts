import styled from "styled-components";
import { Title } from "../UI/Title";
import { Card } from "../UI/Card";
import { animatedBoxShadow, animatedShadow } from "../../styles/animations";

export const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

export const StyledRow = styled.div`
  display: flex;
  border-radius: 2rem;
  animation: ${animatedShadow} 0.5s ease-in-out 1.5s forwards;
  margin-bottom: 2rem;
`;

export const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  margin-right: -0.5rem;
  margin-left: -0.5rem;

  .item {
    padding: 0 0.5rem;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const AnimatedCard = styled(Card)`
  animation: ${animatedBoxShadow} 1.5s ease-in-out 0s forwards;
`;

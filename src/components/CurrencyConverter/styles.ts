import styled from "styled-components";
import { Title } from "../UI/Title";
import { Card } from "../UI/Card";
import { animatedBoxShadow, animatedShadow } from "../../styles/animations";

export const StyledTitle = styled(Title)`
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 425px) {
    text-align: center;
    font-size: 1.25rem;
  }
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
`;

export const StyledLayoutItem = styled.div`
  padding: 0 0.5rem;
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const AnimatedCard = styled(Card)`
  animation: ${animatedBoxShadow} 1.5s ease-in-out 0s forwards;
`;

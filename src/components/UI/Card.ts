import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 2rem;
  border-radius: 32px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

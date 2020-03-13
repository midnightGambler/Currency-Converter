import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 2rem;
  border-radius: 32px;
  box-shadow: 8px 8px 16px #424244, -8px -8px 16px #5c5a5e;
  /* box-shadow: rgba(26, 26, 27, 0.635) 0px 2px 15px 0px; */
`;

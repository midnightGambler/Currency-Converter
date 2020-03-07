import styled from "styled-components";

export const Dropdown = styled.select`
  font-size: 1rem;
  appearance: none;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.btnBG};
  border-radius: 5px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.btnColor};
`;

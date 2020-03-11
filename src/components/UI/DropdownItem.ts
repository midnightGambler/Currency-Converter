import styled from "styled-components";

export const DropdownItem = styled.div`
  font-size: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.bgLight};
  color: ${({ theme }) => theme.colors.btnColor};
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

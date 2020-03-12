import styled from "styled-components";
import { StyledDropdownProps } from "./interfaces";

export const StyledDropdown = styled.div<StyledDropdownProps>`
  position: relative;
  font-size: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ isOpen }) => (isOpen ? "5px 5px 0 0" : "5px")};
  color: ${({ theme }) => theme.colors.btnColor};

  .dropdown-menu {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export const StyledDropdownMenu = styled.div.attrs(() => ({
  className: "dropdown-menu"
}))`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  .dropdown-item:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export const StyledDropdownItem = styled.div.attrs({
  className: "dropdown-item"
})`
  font-size: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.btnColor};
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

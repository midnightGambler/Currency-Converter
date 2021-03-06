import styled from "styled-components";
import { StyledDropdownProps } from "./interfaces";

export const StyledDropdown = styled.div<StyledDropdownProps>`
  position: relative;
  font-size: 1rem;
  padding: 1rem;
  border-radius: ${({ isOpen }) => (isOpen ? "2rem 0 0 0" : "2rem")};
  color: ${({ theme }) => theme.primary};
  background-color: ${({ isOpen, theme: { bgDark } }) =>
    isOpen ? bgDark : "transparent"};
  cursor: pointer;
  line-height: 0;
  .dropdown-menu {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export const StyledDropdownMenu = styled.ul.attrs({
  className: "dropdown-menu"
})`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 100%;
  .dropdown-item:last-child {
    border-radius: 0 0 2rem 2rem;
  }
`;

export const StyledDropdownItem = styled.li.attrs({
  className: "dropdown-item"
})`
  font-size: 1rem;
  padding: 1rem;
  background-color: ${({ theme: { bgDark } }) => bgDark};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
`;

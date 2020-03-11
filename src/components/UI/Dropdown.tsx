import * as React from "react";
import styled from "styled-components";
import { useOuterClick } from "../../hooks/useOuterClick";

interface StyledDropdownProps {
  isOpen: boolean;
}

const StyledDropdown = styled.div<StyledDropdownProps>`
  position: relative;
  font-size: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.btnColor};

  .dropdown-menu {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export const Dropdown: React.FC = ({ children }) => {
  const [isOpen, toggle] = React.useState<boolean>(false);
  const dropdownRef = React.useRef(null);
  useOuterClick(dropdownRef, toggle.bind(null, false));
  return (
    <StyledDropdown
      ref={dropdownRef}
      isOpen={isOpen}
      onClick={toggle.bind(null, !isOpen)}
    >
      {children}
    </StyledDropdown>
  );
};

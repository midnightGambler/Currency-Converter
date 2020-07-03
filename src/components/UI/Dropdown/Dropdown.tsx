import * as React from "react";
import { StyledDropdown } from "./styles";
import { useOuterClick } from "../../../hooks/useOuterClick";

export const Dropdown: React.FC = ({ children }) => {
  const [isOpen, toggle] = React.useState<boolean>(false);
  const dropdownRef = React.useRef(null);
  useOuterClick(dropdownRef, toggle.bind(null, false)); //close dropdown on outside click

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

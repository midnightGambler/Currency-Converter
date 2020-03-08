import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  select {
    padding: 1rem 2rem;
    border-radius: 5px 0 0 5px;
    border-right: 2px solid ${({ theme }) => theme.colors.bgDark};
  }
  button {
    flex: 1;
    border-radius: 0 5px 5px 0;
  }
`;

type option = {
  title: string | number;
  value: any;
};

interface ButtonSelectProps {
  options: option[];
}

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
  children,
  options
}) => (
  <Wrapper>
    <Dropdown>
      {options.map(({ title, value }) => (
        <option key={title} value={value}>
          {title}
        </option>
      ))}
    </Dropdown>
    <Button>{children}</Button>
  </Wrapper>
);

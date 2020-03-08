import * as React from "react";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  select {
    padding: 1rem 2rem;
    border-radius: 5px 0 0 5px;
    border-right: 2px solid ${({ theme }) => theme.colors.bgDark};
  }
  input {
    flex: 1;
    border-radius: 0 5px 5px 0;
  }
`;

type option = {
  title: string | number;
  value: any;
};

interface InputSelectProps {
  options: option[];
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type: string;
  placeholder: string;
}

export const InputSelect: React.FC<InputSelectProps> = ({
  options,
  className,
  ...rest
}) => (
  <Wrapper className={className}>
    <Dropdown>
      {options.map(({ title, value }) => (
        <option key={title} value={value}>
          {title}
        </option>
      ))}
    </Dropdown>
    <Input {...rest} />
  </Wrapper>
);

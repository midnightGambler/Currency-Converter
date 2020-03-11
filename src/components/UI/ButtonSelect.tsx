import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Icon } from "./Icon";
import euro from "../../svg/euro.svg";

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
  title: any;
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
      {options.map(({ value }) => (
        <option key={value} value={value}>
          {console.log(euro)}
          <Icon
            glyph={euro.id}
            viewBox={euro.viewBox}
            width="24px"
            height="24px"
          />
        </option>
      ))}
    </Dropdown>
    <Button>{children}</Button>
  </Wrapper>
);

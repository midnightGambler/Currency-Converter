import styled from "styled-components";

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.btnColor};
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.bgLight};
  }
`;

import styled from "styled-components";

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.bgDark};
  border: none;
  border-radius: 0 2rem 2rem 0;
  outline: none;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.bgLight};
    font-weight: 700;
  }
`;

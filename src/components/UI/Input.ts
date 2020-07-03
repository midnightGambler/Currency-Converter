import styled from "styled-components";

export const Input = styled.input`
  color: ${({ theme }) => theme.primary};
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgDark};
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
    color: ${({ theme }) => theme.bgLight};
    font-weight: 700;
  }
`;

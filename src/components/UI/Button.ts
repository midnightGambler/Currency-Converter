import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem 3rem;
  border-radius: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.bgDark};
  outline: none;
  cursor: pointer;
  border: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
  &:active {
    transition: none;
    background-color: ${({ theme }) => theme.primary};
  }
`;

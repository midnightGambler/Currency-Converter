import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.btnBG};
  padding: 1rem 3rem;
  border-radius: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.btnColor};
  outline: none;
  cursor: pointer;
  border: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnColor};
    color: ${({ theme }) => theme.colors.btnBG};
  }
  &:active {
    transition: none;
    color: ${({ theme }) => theme.colors.btnColor};
    background-color: ${({ theme }) => theme.colors.btnBG};
  }
`;

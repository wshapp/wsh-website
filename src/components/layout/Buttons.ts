import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.colors.button.primary};
  color: ${props => props.theme.colors.text.primary};
  box-shadow: ${props => props.theme.colors.button.primaryShadow} 0px 10px 40px -10px;
  padding: 8px 22px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.2s;
  line-height: 1;

  &:hover {
    filter: brightness(0.8);
  }
`;
import styled from "styled-components";

export default styled.button`
  background: ${props => props.theme.colors.button.primary};
  color: ${props => props.theme.colors.text.primary};
  display: block;
  max-width: 100%;
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
`;
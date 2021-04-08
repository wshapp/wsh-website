import styled from "styled-components";

export default styled.button`
  background: ${props => props.theme.colors.background.primaryLight};
  color: ${props => props.theme.colors.text.primary};
  display: block;
  margin-top: 24px;
  max-width: 100%;
  border: none;
  outline: none;
  line-height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
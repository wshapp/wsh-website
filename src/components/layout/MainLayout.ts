import styled from "styled-components";

export default styled.div`
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
`;
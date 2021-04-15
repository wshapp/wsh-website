import styled from "styled-components";

export default styled.div`
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.colors.layout.darkest};
  color: ${props => props.theme.colors.text.lightest};
`;
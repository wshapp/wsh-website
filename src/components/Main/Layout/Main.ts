import styled from "styled-components";

export default styled.main`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  color: ${({ theme }) => theme.colors.text.lightest};
`;

import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const AppContentBackground = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
`;

export const AppContent = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.layout.dark};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

import styled from "styled-components";
import SidebarInfo from "./Info";

interface SideBarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({ children }: SideBarProps) => {
  return (
    <Background>
      <Container>
        <SidebarInfo />
        <Content>{children}</Content>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.layout.dark};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  padding: 15px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export default Sidebar;

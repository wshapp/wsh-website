import styled from "styled-components";
import Infobar from "./Infobar";

interface SideBarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({ children }: SideBarProps) => {
  return (
    <Background>
      <Container>
        <Infobar />
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  padding: 15px;
`;

export default Sidebar;

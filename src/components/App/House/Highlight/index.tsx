import styled from "styled-components";
import HighlightSearchbar from "./Searchbar";

const Highlight: React.FC = () => (
  <Container>
    <Content>
      <HighlightSearchbar />
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1 35%;
  padding: 15px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Highlight;

import styled from "styled-components";
import Searchbar from "./Searchbar";

const Highlight: React.FC = () => (
  <Container>
    <Content>
      <Searchbar />
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1 35%;
  padding: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Highlight;

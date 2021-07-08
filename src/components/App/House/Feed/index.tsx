import styled from "styled-components";
import FeedSelector from "@components/App/House/Feed/Selector";
import FeedList from "./List";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>House</Title>
      </Header>
      <FeedSelector />
      <FeedList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1 65%;
  padding: 15px;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: calc(${({ theme }) => theme.size.title} * 2);
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export default Feed;

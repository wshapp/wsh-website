import styled from "styled-components";
import FeedListCard from "./Card";

const FeedList: React.FC = () => {
  return (
    <Container>
      <FeedListCard />
      <FeedListCard />
      <FeedListCard />
      <FeedListCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export default FeedList;

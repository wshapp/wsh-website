import styled from "styled-components";
import FeedSelectorCard from "./Card";

const FeedSelector: React.FC = () => {
  return (
    <Container>
      <FeedSelectorCard title={"Audios"} active />
      <FeedSelectorCard title={"Texts"} />
      <FeedSelectorCard title={"Photos"} />
      <FeedSelectorCard title={"Videos"} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: flex;
`;

export default FeedSelector;

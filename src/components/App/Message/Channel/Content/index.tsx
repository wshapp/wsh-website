import styled from "styled-components";
import ChannelContentMessage from "./Message";

const ChannelContent: React.FC = () => (
  <Container>
    <ChannelContentMessage />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  justify-content: flex-end;
`;

export default ChannelContent;

import styled from "styled-components";
import ChannelMessage from "./ChannelMessage";

const ChannelContent: React.FC = () => (
  <Container>
    <ChannelMessage />
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

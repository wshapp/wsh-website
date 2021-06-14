import React from "react";
import styled from "styled-components";
import ChannelContent from "./ChannelContent";
import ChannelHeader from "./ChannelHeader";
import ChannelTools from "./ChannelTools";

import Head from "./Head";

interface ChannelProps {
  id: any;
}

const Channel: React.FC<ChannelProps> = ({ id }: ChannelProps) => {
  return (
    <>
      <Head title="Messages" subtitle={`Alice ${id}`} />
      <Container>
        <ChannelHeader receiverId={id} />
        <ChannelContent />
        <ChannelTools />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.layout.dark};
`;

export default Channel;

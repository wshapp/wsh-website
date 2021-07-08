import React from "react";
import styled from "styled-components";
import ChannelContent from "./Content";
import ChannelHeader from "./Header";
import ChannelToolbar from "./Toolbar";

import Head from "../../../Main/Head";

interface ChannelProps {
  id: string;
}

const Channel: React.FC<ChannelProps> = ({ id }: ChannelProps) => {
  return (
    <>
      <Head title="Messages" subtitle={`Alice ${id}`} />
      <Container>
        <ChannelHeader receiverId={id} />
        <ChannelContent />
        <ChannelToolbar />
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

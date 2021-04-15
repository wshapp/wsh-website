import React from "react";
import styled from "styled-components";
import ChannelHeader from "./ChannelHeader";

import Title from "./Title";

interface ChannelProps {
    id: any;
}

const Channel: React.FC<ChannelProps> = ({ id }) => {
    return (
        <>
            <Title title="Messages" subtitle={`Alice ${id}`} />
            <Container>
                <ChannelHeader receiverId={id} />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    overflow: auto;
    padding: 30px;
    flex: 1;
`;

export default Channel;
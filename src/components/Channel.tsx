import React from "react";
import styled from "styled-components";
import ChannelContent from "./ChannelContent";
import ChannelHeader from "./ChannelHeader";
import ChannelTools from "./ChannelTools";

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
                <ChannelContent />
                <ChannelTools />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${props => props.theme.colors.layout.dark};
`;

export default Channel;
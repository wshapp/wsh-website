import React from "react";
import styled from "styled-components";

import Title from "./Title";

interface ChannelProps {
    id: any;
}

const Channel: React.FC<ChannelProps> = ({ id }) => {
    return (
        <>
            <Title title="Messages" subtitle={`Alice ${id}`} />
            <Container>
                conv avec Alice {id}
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
`;


export default Channel;
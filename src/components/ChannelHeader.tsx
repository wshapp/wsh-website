import React from "react";
import styled from "styled-components";
import Infobar from "./Infobar";

import Link from "./Link";

interface ChannelHeaderProps {
    receiverId: number;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({ receiverId }) => (
    <Container>
        <Content>
            <IconContainer>
                <Icon src={`https://picsum.photos/200/200`} />
            </IconContainer>
            <ReceiverContent>
                <Title href={"/alice"}>Alice {receiverId}</Title>
                <Description>Online</Description>
            </ReceiverContent>
        </Content>
        <Infobar />
    </Container>
);

const Container = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    pointer-events: none;
`;

const Icon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: center;
`;

const ReceiverContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    line-height: 1.2;
`;

const Title = styled(Link)`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.lightest};
`;

const Description = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.light};
`;

export default ChannelHeader;
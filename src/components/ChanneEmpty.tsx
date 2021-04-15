import React from "react";
import styled from "styled-components";

const ChannelEmpty: React.FC = () => (
    <Container>
        <Content>
            <Icon className="ri-inbox-line" />
            <Title>It's cool to chat with someone</Title>
            <Description>It's cool to chat with someone</Description>
        </Content>
    </Container>
);

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.5;
`;

const Icon = styled.i`
    font-size: 50px;
`;

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
`;

const Description = styled.p`
    color: ${props => props.theme.colors.text.primaryLight};
`;

export default ChannelEmpty;
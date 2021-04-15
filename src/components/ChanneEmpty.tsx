import React from "react";
import styled from "styled-components";

const ChannelEmpty: React.FC = () => (
    <Container>
        <Content>
            <Icon className="ri-inbox-line" />
            <Title>It's cool to chat with someone</Title>
            <Description>Pick a person from left menu and start your conversation</Description>
        </Content>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    overflow: auto;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-color: ${props => props.theme.colors.layout.dark};
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
    color: ${props => props.theme.colors.text.light};
`;

export default ChannelEmpty;
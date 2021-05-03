import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../constants/routes";

interface InboxItemProps {
    id: number
}

const InboxItem: React.FC<InboxItemProps> = ({ id }) => {

    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        history.push(`${ROUTES.MESSAGES}/${id}`)
    }

    return (
        <Container onClick={handleClick}>
            <IconContainer>
                <Icon src={`https://picsum.photos/200/200`} loading="lazy" />
            </IconContainer>
            <Content>
                <Title>Alice</Title>
                <Description>Sent • 3h • 26 🔥</Description>
            </Content>
        </Container>
    );
}


const Container = styled.li`
    display: flex;
    padding: 10px;
    cursor: pointer;
    transition: all .2s;
    user-select: none;

    &:hover, &.active {
        background-color: ${props => props.theme.colors.layout.darkest};
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: center;
    user-select: none;
    pointer-events: none;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    line-height: 1.2;
`;

const Title = styled.p`
    font-size: 16px;
`;

const Description = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.light};
`;

export default InboxItem;
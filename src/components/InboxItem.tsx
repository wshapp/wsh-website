import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import * as ROUTES from "@constants/routes";

interface InboxItemProps {
    id: number
}

const InboxItem: React.FC<InboxItemProps> = ({ id }) => {

    const router = useRouter();

    const handleClick = (event) => {
        event.preventDefault();
        router.push(`${ROUTES.MESSAGES}/${id}`)
    }

    return (
        <Container onClick={handleClick}>
            <PictureContainer>
                <SenderPicture src={`https://picsum.photos/200/200`} loading="lazy" />
            </PictureContainer>
            <Content>
                <Sender>Alice</Sender>
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

const PictureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

const SenderPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    line-height: 1.2;
`;

const Sender = styled.p`
    font-size: 16px;
`;

const Description = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.light};
`;

export default InboxItem;
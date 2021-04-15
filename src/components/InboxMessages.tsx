import React from "react";
import styled from "styled-components";
import { Router } from "next/router";

import MessageItem from "./MessageItem";
import * as ROUTES from "@constants/routes";
import Link from "./Link";

interface InboxMessagesProps {
    router: Router;
}

const InboxMessages: React.FC<InboxMessagesProps> = ({ router }) => {
    return (
        <Container>
            <Header>
                <Title href={ROUTES.MESSAGES}>Messages <span>• 50</span></Title>
            </Header>
            <MessageList>
                {Array.from({ length: 50 }, (_, i) => (
                    <MessageItem id={i} router={router} key={i} />
                ))}
            </MessageList>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.5);
    width: 300px;
`;

const Header = styled.div`
    padding: 15px;
`;

const Title = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    user-select: none;
    color: ${props => props.theme.colors.text.primary};

    span {
        margin-left: 5px;
        font-size: 14px;
        color: ${props => props.theme.colors.text.primaryLight};
    }
`;

const MessageList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
`;

export default InboxMessages;
import React from "react";
import styled from "styled-components";

import InboxItem from "./InboxItem";
import * as ROUTES from "../constants/routes";
import Link from "./Link";

const Inbox: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title href={ROUTES.MESSAGES}>
          Messages <span>• 50</span>
        </Title>
      </Header>
      <MessageList>
        {Array.from({ length: 50 }, (_, i) => (
          <InboxItem id={i} key={i} />
        ))}
      </MessageList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.layout.darker};
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
  color: ${({ theme }) => theme.colors.text.lightest};

  span {
    margin-left: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export default Inbox;

import React, { memo } from "react";
import styled from "styled-components";
import moment from "moment";
import Link from "./Link";
import PostReactionLike from "./PostReactionLike";
import { AuthContext } from "../context/Auth";

interface FeedCardPost {
  post: any;
}

const FeedCard: React.FC<FeedCardPost> = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}: FeedCardPost) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Container>
      <Header>
        <IconContainer>
          <Icon src={"https://picsum.photos/200/200"} loading="lazy" />
        </IconContainer>
        <HeaderContent>
          <Username>{username}</Username>
          <Date>{moment(createdAt).fromNow(true)}</Date>
        </HeaderContent>
      </Header>
      <Content>{body}</Content>
      <Footer>
        <Reaction
          as={PostReactionLike}
          user={user}
          post={{ id, likes, likeCount }}
        />
        <Reaction as={Link} href={`/p/${id}`}>
          <ReactionIcon className="ri-message-3-line" /> {commentCount}
        </Reaction>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 15px * 2);
  margin: 15px 2px 0;
  padding: 15px;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;
`;

const Header = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
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

const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  line-height: 1.2;
`;

const Username = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.p`
  display: flex;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.light};
`;

const Content = styled.div`
  margin-top: 15px;
  line-height: 1.2;
`;

const Footer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`;

const Reaction = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-size: 11px;
  cursor: pointer;
  user-select: none;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ReactionIcon = styled.i`
  margin-right: 5px;
  font-size: 15px;
`;

export default memo(FeedCard);

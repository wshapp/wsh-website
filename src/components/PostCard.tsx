import moment from "moment";
import React from "react";
import styled from "styled-components";
import PostReactionLike from "./PostReactionLike";
import { AuthContext } from "../context/Auth";

interface PostCardProps {
  post: any;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}: PostCardProps) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Container>
      <Header>
        <IconContainer>
          <Icon src={"https://picsum.photos/200/200"} loading="lazy" />
        </IconContainer>
        <HeaderContent>
          <HeaderContentCol>
            <Username>{username}</Username>
            <Date>{moment(createdAt).fromNow(true)}</Date>
          </HeaderContentCol>
          <HeaderContentCol>
            <ReactionContainer>
              <Reaction
                as={PostReactionLike}
                user={user}
                post={{ id, likes, likeCount }}
              />
              <Reaction>
                <ReactionIcon className="ri-message-3-line" /> {commentCount}
              </Reaction>
              <Reaction>
                <ReactionIcon className="ri-share-forward-line" /> Share
              </Reaction>
            </ReactionContainer>
          </HeaderContentCol>
        </HeaderContent>
      </Header>
      <Content>{body}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 15px 0;
  flex-direction: column;
`;

const Header = styled.div`
  margin-top: 15px;
  display: flex;
  flex: 1;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
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

const HeaderContentCol = styled.div`
  display: flex;
  flex-direction: column;
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

const ReactionContainer = styled.div`
  display: flex;
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

const Content = styled.div`
  margin-top: 30px;
  font-size: 24px;
`;

export default PostCard;

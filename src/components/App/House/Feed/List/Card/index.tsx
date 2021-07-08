import React from "react";
import styled from "styled-components";
import moment from "moment";
import Link from "@components/Main/Link";
import FeedListCardDrip from "./Drip";

const FeedListCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconContainer>
          <Icon src={"https://picsum.photos/200/200"} loading="lazy" />
        </IconContainer>
        <HeaderContent>
          <Info>
            <Username>Lucas</Username>
            <Date>{moment("03/03/2003").fromNow(true)}</Date>
          </Info>
          <EditIcon className="ri-more-fill" />
        </HeaderContent>
      </Header>
      <Content>
        {"bruh"}
        <FeedListCardDrip />
      </Content>
      <Footer>
        <Reaction>
          <ReactionIcon className="ri-heart-3-fill" /> 5
        </Reaction>
        <Reaction as={Link} href={"/p"}>
          <ReactionIcon className="ri-message-3-fill" /> 5
        </Reaction>
        <Reaction>
          <ReactionIcon className="ri-share-forward-fill" /> 5
        </Reaction>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 15px * 2);
  margin: 15px 2px 0;
  padding: 15px 0;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;

  :first-child {
    margin-top: 0;
  }
`;

const Header = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 60px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 99999px;
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
  align-items: flex-start;
`;

const Info = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Username = styled.p`
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: 600;
`;

const Date = styled.span`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: ${({ theme }) => theme.weight.light};
`;

const EditIcon = styled.i`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.size.small};
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 5px;
  line-height: 1.2;
`;

const Footer = styled.div`
  margin-top: 5px;
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
  font-size: ${({ theme }) => theme.size.medium};
`;

export default FeedListCard;

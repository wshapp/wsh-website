import { useRouter } from "next/router";
import styled from "styled-components";

import * as ROUTES from "../constants/routes";

interface InboxItemProps {
  id: number;
}

const InboxItem: React.FC<InboxItemProps> = ({ id }: InboxItemProps) => {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(`${ROUTES.MESSAGES}/${id}`);
  };

  return (
    <Container onClick={handleClick}>
      <IconContainer>
        <Icon src={"https://picsum.photos/200/200"} loading="lazy" />
      </IconContainer>
      <Content>
        <Title>Alice</Title>
        <Description>Sent • 3h • 26 🔥</Description>
      </Content>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.layout.darkest};
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
  color: ${({ theme }) => theme.colors.text.light};
`;

export default InboxItem;

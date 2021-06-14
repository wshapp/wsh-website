import styled from "styled-components";

const PostComments: React.FC = () => (
  <Container>
    <Title>
      Comments <span>(50)</span>
    </Title>
    <Content></Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  user-select: none;
  span {
    color: ${({ theme }) => theme.colors.text.light};
    font-size: 13px;
  }
`;

const Content = styled.div``;

export default PostComments;

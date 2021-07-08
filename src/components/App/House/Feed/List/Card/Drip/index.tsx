import styled from "styled-components";

const FeedListCardDrip: React.FC = () => {
  return (
    <Container>
      <Icon className="ri-play-fill" />
      <Bar>
        <Progress status={30} />
      </Bar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
`;

const Icon = styled.i`
  font-size: ${({ theme }) => theme.size.large};
  cursor: pointer;
`;

const Bar = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  margin-left: 15px;
  background-color: ${({ theme }) => theme.colors.layout.light};
  border-radius: 99999px;
  overflow: hidden;
  cursor: pointer;
  transition: all 1s;
`;

const Progress = styled.div<{ status: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ status }) => status}%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.text.lightest};
`;

export default FeedListCardDrip;

import styled from "styled-components";

interface Props {
  title: string;
  active?: boolean;
}

const FeedSelectorCard: React.FC<Props> = ({ title, active }: Props) => {
  return <Container active={active}>{title}</Container>;
};

const Container = styled.div<{ active: boolean }>`
  position: relative;
  margin: 0 15px;
  cursor: pointer;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }

  ${({ active, theme }) =>
    active &&
    `
    :after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 50%;
      height: 3px;
      width: 50%;
      background: ${theme.colors.text.lightest};
      border-radius: 99999px;
      transform: translate(-50%, 0);
    }
  `}
`;

export default FeedSelectorCard;

import Link from "@components/Main/Link";
import styled from "styled-components";
import * as ROUTES from "@constants/routes";
import { NextPage } from "next";

const Error: NextPage = () => (
  <Container>
    <Title>Sorry, this page isn&apos;t available.</Title>
    <Description>
      The link you followed may be broken, or the page may have been removed. Go
      back to <Link href={ROUTES.LANDING}>wsh</Link>.
    </Description>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;

const Description = styled.h2`
  margin-top: 30px;

  a {
    color: ${({ theme }) => theme.colors.accent.light};
  }
`;

export default Error;

import styled from "styled-components";

import {
  AppContainer,
  AppContent,
  AppContentBackground,
} from "@components/App/Layout/App";
import Sidebar from "@components/App/Sidebar";
import Navbar from "@components/App/Navbar";
import Head from "@components/Main/Head";
import React from "react";
import Highlight from "@components/App/House/Highlight";
import Feed from "@components/App/House/Feed";

const House: React.FC = () => {
  return (
    <AppContainer>
      <Head title="House" />
      <Navbar />
      <AppContentBackground>
        <AppContent>
          <Container>
            <Content>
              <Row>
                <Feed />
                <Highlight />
              </Row>
            </Content>
          </Container>
        </AppContent>
      </AppContentBackground>
      <Sidebar>content</Sidebar>
    </AppContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: calc(100% - 75px * 2);
  height: calc(100% - 60px);
  margin-top: 60px;
  max-width: 1224px;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
`;

export default House;

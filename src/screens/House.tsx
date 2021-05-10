import React from "react";
import styled from "styled-components";

import { SafeContainer, SafeContent, SafeContentBackground } from "../components/layout/Safe";
import SafeProvider from "../components/SafeProvider";
import Sidebar from "../components/Sidebar";
import SideNavbar from "../components/SideNavbar";
import Title from "../components/Title";
import Feed from "../components/Feed";
import Highlight from "../components/Highlight";

const House: React.FC = () => {

    return (
        <SafeProvider>
            <Title title="House" />
            <SafeContainer>
                <SideNavbar />
                <SafeContentBackground>
                    <SafeContent>
                        <Container>
                            <Content>
                                <Feed />
                                <Highlight />
                            </Content>
                        </Container>
                    </SafeContent>
                </SafeContentBackground>
                <Sidebar>
                </Sidebar>
            </SafeContainer>
        </SafeProvider>
    )
}

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    width: calc(100% - 75px * 2);
	max-width: 1224px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default House;
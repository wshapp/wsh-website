import React from "react";
import styled from "styled-components";
import { NextPage } from "next";

import Navbar from "@components/Navbar";
import Title from '@components/Title';
import Container from '@components/layout/Container';
import WildProvider from "@components/WildProvider";
import * as ROUTES from "@constants/routes";
import { Button } from "@components/layout/Buttons";
import Link from "@components/Link";
import Footer from "@components/Footer";

const Landing: NextPage = () => {

    const handleScrollClick = () => {
        console.log("ok");
    }

    return (
        <WildProvider>
            <Title title="The house where you can make friends quickly" />
            <Navbar />
            <BackgroundHeader />
            <Content>
                <Container>
                    <FeaturedContainer>
                        <FeaturedTextContainer>
                            <FeaturedTitle>wsh - Closed Alpha Release</FeaturedTitle>
                            <FeaturedSubtitle>The house where you can make friends quickly</FeaturedSubtitle>
                            <FeaturedDescription>Wsh connects you with new friends by audio, discover another communication approach</FeaturedDescription>
                            <FeaturedButton href={ROUTES.SIGN_IN} as={Link}>Start Now</FeaturedButton>
                        </FeaturedTextContainer>
                        <FeaturedMockupContainer>
                            <FeaturedMockup src="/static/images/landing-mockup.png" />
                        </FeaturedMockupContainer>
                    </FeaturedContainer>
                    <ScrollButton onClick={handleScrollClick}><i className="ri-mouse-line"></i> Discover how it works</ScrollButton>
                    <SpecContainer>

                    </SpecContainer>
                </Container>
            </Content>
            <Footer />
        </WildProvider>
    );
}

const BackgroundHeader = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.304958) 0.01%, rgba(0, 0, 0, 0.975) 99.99%, ${props => props.theme.colors.layout.darkest} 100%), url('/static/images/landing-background.jpg');
    background-size: cover;
    background-position: 50% 0;
    background-repeat: no-repeat;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const FeaturedContainer = styled.div`
    display: flex;
    user-select: none;
    align-items: center;
    min-height: calc(100vh - 60px * 2);

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 30px;
        height: auto;
    }
`;

const FeaturedTextContainer = styled.div`
    flex: 1 35%;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const FeaturedTitle = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.colors.accent.light};
    letter-spacing: 1px;
`;

const FeaturedSubtitle = styled.h2`
    margin-top: 15px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.5;
`;

const FeaturedDescription = styled.p`
    margin-top: 30px;
    line-height: 1.5;
    color: ${props => props.theme.colors.text.light};
`;

const FeaturedButton = styled(Button)`
    margin-top: 30px;
    margin-left: 10%;
    display: inline-block;
    padding: 12px 26px;
    
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const FeaturedMockupContainer = styled.div`
    flex: 1 65%;
    pointer-events: none;
`;

const FeaturedMockup = styled.img`
    max-width: 100%;
    height: auto;
`;

const ScrollButton = styled.div`
    height: 60px;
    align-items: center;
    display: flex;
    color: ${props => props.theme.colors.text.light};
    cursor: pointer;
    margin-right: auto;

    i {
        margin-right: 5px;
    }
`;

const SpecContainer = styled.div`
    display: flex;
`;

export default Landing;
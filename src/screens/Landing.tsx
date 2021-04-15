import React from "react";
import styled from "styled-components";

import Navbar from "@components/Navbar";
import Title from '@components/Title';
import Container from '@components/layout/Container';

const Landing = () => {

    return (
        <>
            <Title title="The house where you can make friends quickly" />
            <Navbar />
            <BackgroundHeader />
            <Content>
                <Container>
                    <FeaturedContainer>
                        <FeaturedTitle>wsh - Closed Alpha Release</FeaturedTitle>
                        <FeaturedSubtitle>The house where you can make friends quickly</FeaturedSubtitle>
                        <FeaturedDescription>Wsh connects you with new friends by audio, discover another communication approach</FeaturedDescription>
                    </FeaturedContainer>
                </Container>
            </Content>
        </>
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
    max-width: 400px;
    text-align: center;
    margin: 100px auto 0;
    user-select: none;
`;

const FeaturedTitle = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.colors.accent.light};
    letter-spacing: 1px;
`;

const FeaturedSubtitle = styled.h2`
    margin-top: 15px;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.5;
`;

const FeaturedDescription = styled.p`
    margin-top: 5px;
    color: ${props => props.theme.colors.text.light};
`;

export default Landing;
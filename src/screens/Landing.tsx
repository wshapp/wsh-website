import Image from 'next/image';

import Navbar from "@components/layout/Navbar";

import styled from "styled-components";

const Landing = () => (
    <>
        <BackgroundHeader />
        <Navbar />
    </>
);

const BackgroundHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.304958) 0.01%, rgba(0, 0, 0, 0.975) 99.99%, #000000 100%), url('/static/images/landing-background.jpg');
    background-size: cover;
    background-position: 0 50%;
`;

export default Landing;
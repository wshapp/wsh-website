import styled from "styled-components";

import { WshLogo } from "@components/layout/Icons";
import Link from "@components/Link";
import { Button } from "./Buttons";

export const Content = styled.div`
    display: flex;
    height: 100%;
`;

export const Col = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FeaturedCol = styled(Col)`
    width: 60%;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const FeaturedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const FeaturedTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    user-select: none;
`;

export const FeaturedSubtitle = styled.h3`
    margin-top: 10px;
    user-select: none;
`;

export const FeaturedButton = styled(Button)`
    margin-top: 20px;
`;

export const AuthCol = styled(Col)`
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AuthWrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background.primaryLight};
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

    @media (max-width: 768px) {
        border-radius: 0;
    }
`;

export const AuthContent = styled.div`
    margin-top: 70px;
    width: 100%;
    max-width: 60%;

    @media (max-width: 768px) {
        max-width: 80%;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    pointer-events: none;
`;

export const Logo = styled(WshLogo)``;

export const LogoTitle = styled.h1`
    margin-left: 5px;
    font-weight: 700;
`;

export const HeaderContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    user-select: none;
    pointer-events: none;
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;

export const HeaderDescription = styled.p`
    margin-top: 15px;
    color: ${props => props.theme.colors.text.primaryLight};
`;

export const AuthForm = styled.form`
    padding: 50px 0 30px;
    display: flex;
    flex-direction: column;
`;

export const FieldContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    &:first-child {
        margin-top: 0;
    }
`;

export const FieldLabel = styled.label`
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    user-select: none;
    pointer-events: none;
`;

export const Field = styled.input`
    margin-top: 5px;
    border: none;
    outline: none;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.colors.border.primaryLight};
    padding: 10px 0;
    font-weight: $fontWeightBold;
    background-color: ${props => props.theme.colors.background.primaryLight};
    color: ${props => props.theme.colors.text.primary};
    transition: all 0.2s;

    &:focus {
        border-bottom: 1px solid ${props => props.theme.colors.border.primary};
        color: ${props => props.theme.colors.text.primary};
    }

    &::placeholder {
        color: ${props => props.theme.colors.text.primaryLight};
    }
`;

export const ForgotPassword = styled(Link)`
    margin-top: 10px;
    color: ${props => props.theme.colors.text.primaryLight};
    font-size: 13px;
`;

export const AuthButton = styled(Button)`
    margin-top: 20px;
`;
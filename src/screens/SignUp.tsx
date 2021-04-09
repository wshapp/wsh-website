import styled from "styled-components";
import Image from "next/image";

import Title from '@components/Title';
import Button from "@components/layout/Button";
import Link from "@components/Link";
import * as ROUTES from "@constants/routes";

const SignUp = () => (
    <>
        <Title title="Log in" />
        <Content>
            <FeaturedCol>
                <FeaturedContainer>
                    <FeaturedTitle>Hello!</FeaturedTitle>
                    <FeaturedSubtitle>Already have an account?</FeaturedSubtitle>
                    <Link href={ROUTES.SIGN_IN}><FeaturedButton>Login</FeaturedButton></Link>
                </FeaturedContainer>
            </FeaturedCol>
            <AuthCol>
                <AuthWrapper>
                    <AuthContent>
                        <LogoContainer>
                            <Image src="/static/images/rvby.png" alt="Wsh Logo" width={40} height={40} />
                            <LogoTitle>wsh</LogoTitle>
                        </LogoContainer>
                        <HeaderContainer>
                            <HeaderTitle>Create an account</HeaderTitle>
                            <HeaderDescription>Sign up to continue</HeaderDescription>
                        </HeaderContainer>
                        <AuthForm>
                            <FieldContainer>
                                <FieldLabel>Username</FieldLabel>
                                <Field type="text" id="username" placeholder="Username" />
                            </FieldContainer>
                            <FieldContainer>
                                <FieldLabel>Email</FieldLabel>
                                <Field type="text" id="email" placeholder="Email, Tel or Username" />
                            </FieldContainer>
                            <FieldContainer>
                                <FieldLabel>Password</FieldLabel>
                                <Field type="password" id="password" placeholder="Password" />
                            </FieldContainer>
                            <AuthButton>Create an account</AuthButton>
                            <SocialSeparator>Or connect with socials</SocialSeparator>
                            <AuthButton>Connect with Google</AuthButton>
                            <AuthButton>Connect with Apple</AuthButton>
                            <AuthButton>Connect with Facebook</AuthButton>
                        </AuthForm>
                    </AuthContent>
                </AuthWrapper>
            </AuthCol>
        </Content>
    </>
);

const Content = styled.div`
    display: flex;
    height: 100%;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FeaturedCol = styled(Col)`
    width: 60%;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const FeaturedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const FeaturedTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    user-select: none;
`;

const FeaturedSubtitle = styled.h3`
    margin-top: 10px;
    user-select: none;
`;

const FeaturedButton = styled(Button)`
    margin-top: 20px;
`;

const AuthCol = styled(Col)`
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const AuthWrapper = styled.div`
    background-color: ${props => props.theme.colors.background.primaryLight};
    display: flex;
    justify-content: center;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

    @media (max-width: 768px) {
        border-radius: 0;
    }
`;

const AuthContent = styled.div`
    margin-top: 70px;
    width: 100%;
    max-width: 60%;

    @media (max-width: 768px) {
        max-width: 80%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    pointer-events: none;
`;

const LogoTitle = styled.h1`
    margin-left: 5px;
    font-weight: 700;
`;

const HeaderContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;

const HeaderDescription = styled.p`
    margin-top: 15px;
    color: ${props => props.theme.colors.text.primaryLight};
`;

const AuthForm = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

const FieldContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    &:first-child {
        margin-top: 0;
    }
`;

const FieldLabel = styled.label`
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
`;

const Field = styled.input`
    margin-top: 5px;
    border: none;
    outline: none;
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

const ForgotPassword = styled(Link)`
    margin-top: 10px;
    color: ${props => props.theme.colors.text.primaryLight};
    font-size: 13px;
`;

const AuthButton = styled(Button)`
    margin-top: 20px;
`;

const SocialSeparator = styled.p`
    margin-top: 20px;
    align-self: center;
    font-size: 13px;
    color: ${props => props.theme.colors.text.primaryLight};
    user-select: none;
`;

export default SignUp;
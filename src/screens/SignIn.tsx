import React from 'react';

import Title from '@components/Title';
import Link from "@components/Link";
import * as ROUTES from "@constants/routes";
import { AuthButton, AuthCol, AuthContent, AuthForm, AuthWrapper, Content, FeaturedButton, FeaturedCol, FeaturedContainer, FeaturedSubtitle, FeaturedTitle, Field, FieldContainer, FieldLabel, ForgotPassword, HeaderContainer, HeaderDescription, HeaderTitle, Logo, LogoContainer, LogoTitle } from "@components/layout/Auth";

const SignIn = ({ router }) => {

    const [errors, setErrors] = React.useState({})

    const handleSubmit = (event) => {
        event.preventDefault();

        router.push(ROUTES.INDEX);
    }

    return (
        <>
            <Title title="Log in" />
            <Content>
                <FeaturedCol>
                    <FeaturedContainer>
                        <FeaturedTitle>Hello!</FeaturedTitle>
                        <FeaturedSubtitle>Don't you have an account yet?</FeaturedSubtitle>
                        <FeaturedButton href={ROUTES.SIGN_UP} as={Link}>Create an account</FeaturedButton>
                    </FeaturedContainer>
                </FeaturedCol>
                <AuthCol>
                    <AuthWrapper>
                        <AuthContent>
                            <LogoContainer>
                                <Logo alt="Wsh Logo" />
                                <LogoTitle>wsh</LogoTitle>
                            </LogoContainer>
                            <HeaderContainer>
                                <HeaderTitle>Welcome back!</HeaderTitle>
                                <HeaderDescription>Sign in to continue</HeaderDescription>
                            </HeaderContainer>
                            <AuthForm onSubmit={handleSubmit}>
                                <FieldContainer>
                                    <FieldLabel htmlFor="email">Identifiant</FieldLabel>
                                    <Field type="text" id="email" placeholder="Email, Tel or Username" />
                                </FieldContainer>
                                <FieldContainer>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Field type="password" id="password" placeholder="Password" />
                                </FieldContainer>
                                <ForgotPassword href={ROUTES.RECOVERY}>Forgot Password?</ForgotPassword>
                                <AuthButton>Login</AuthButton>
                            </AuthForm>
                        </AuthContent>
                    </AuthWrapper>
                </AuthCol>
            </Content>
        </>
    );
}

export default SignIn;
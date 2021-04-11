import styled from "styled-components";

import Title from '@components/Title';
import { Button } from "@components/layout/Buttons";
import Link from "@components/Link";
import * as ROUTES from "@constants/routes";
import { AuthButton, AuthCol, AuthContent, AuthForm, AuthWrapper, Content, FeaturedButton, FeaturedCol, FeaturedContainer, FeaturedSubtitle, FeaturedTitle, Field, FieldContainer, FieldLabel, HeaderContainer, HeaderDescription, HeaderTitle, Logo, LogoContainer, LogoTitle } from "@components/layout/Auth";

const SignUp = () => (
    <>
        <Title title="Log in" />
        <Content>
            <FeaturedCol>
                <FeaturedContainer>
                    <FeaturedTitle>Hello!</FeaturedTitle>
                    <FeaturedSubtitle>Already have an account?</FeaturedSubtitle>
                    <FeaturedButton href={ROUTES.SIGN_IN} as={Link}>Login</FeaturedButton>
                </FeaturedContainer>
            </FeaturedCol>
            <AuthCol>
                <AuthWrapper>
                    <AuthContent>
                        <LogoContainer>
                            <Logo src="/static/images/rvby.png" alt="Wsh Logo" />
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
                        </AuthForm>
                    </AuthContent>
                </AuthWrapper>
            </AuthCol>
        </Content>
    </>
);

export default SignUp;
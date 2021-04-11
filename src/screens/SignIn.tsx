import Title from '@components/Title';
import Link from "@components/Link";
import * as ROUTES from "@constants/routes";
import { AuthButton, AuthCol, AuthContent, AuthForm, AuthWrapper, Content, FeaturedButton, FeaturedCol, FeaturedContainer, FeaturedSubtitle, FeaturedTitle, Field, FieldContainer, FieldLabel, ForgotPassword, HeaderContainer, HeaderDescription, HeaderTitle, Logo, LogoContainer, LogoTitle } from "@components/layout/Auth";

const SignIn = () => (
    <>
        <Title title="Log in" />
        <Content>
            <FeaturedCol>
                <FeaturedContainer>
                    <FeaturedTitle>Hello!</FeaturedTitle>
                    <FeaturedSubtitle>Don't you have an account yet?</FeaturedSubtitle>
                    <Link href={ROUTES.SIGN_UP}><FeaturedButton>Create an account</FeaturedButton></Link>
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
                            <HeaderTitle>Welcome back!</HeaderTitle>
                            <HeaderDescription>Sign in to continue</HeaderDescription>
                        </HeaderContainer>
                        <AuthForm>
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

export default SignIn;
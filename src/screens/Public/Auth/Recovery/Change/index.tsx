import Head from "@components/Main/Head";
import Link from "@components/Main/Link";
import * as ROUTES from "@constants/routes";
import {
  AuthButton,
  AuthCol,
  AuthContent,
  AuthForm,
  AuthWrapper,
  Content,
  FeaturedButton,
  FeaturedCol,
  FeaturedContainer,
  FeaturedSubtitle,
  FeaturedTitle,
  Field,
  FieldContainer,
  FieldLabel,
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
  Logo,
  LogoContainer,
  LogoTitle,
} from "@components/Public/Layout/Auth";
import { NextPage } from "next";

const RecoveryChange: NextPage = () => {
  return (
    <>
      <Head title="Recovery" subtitle="Change Password" />
      <Content>
        <FeaturedCol>
          <FeaturedContainer>
            <FeaturedTitle>Hello!</FeaturedTitle>
            <FeaturedSubtitle>Remember your password?</FeaturedSubtitle>
            <FeaturedButton href={ROUTES.SIGN_IN} as={Link}>
              Log In
            </FeaturedButton>
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
                <HeaderTitle>Password Change</HeaderTitle>
                <HeaderDescription>Enter your new password</HeaderDescription>
              </HeaderContainer>
              <AuthForm>
                <FieldContainer>
                  <FieldLabel htmlFor="email">Password</FieldLabel>
                  <Field type="password" id="password" placeholder="Password" />
                </FieldContainer>
                <AuthButton>Change Password</AuthButton>
              </AuthForm>
            </AuthContent>
          </AuthWrapper>
        </AuthCol>
      </Content>
    </>
  );
};

export default RecoveryChange;

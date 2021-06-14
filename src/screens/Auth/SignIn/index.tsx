import React from "react";
import { useMutation } from "@apollo/client";

import Head from "@components/Head";
import Link from "@components/Link";
import WildProvider from "@components/WildProvider";
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
  ForgotPassword,
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
  Logo,
  LogoContainer,
  LogoTitle,
} from "@components/layout/Auth";

import * as ROUTES from "@constants/routes";
import { useForm } from "@hooks/useForm";
import { AuthContext } from "@context/Auth";
import { LOGIN_USER } from "@queries/auth";
import { useRouter } from "next/router";

const SignIn: React.FC = () => {
  const router = useRouter();

  const context = React.useContext(AuthContext);
  const [errors, setErrors] = React.useState({});

  const loginUserCallback = () => {
    loginUser();
  };

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      router.push(ROUTES.HOUSE);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  return (
    <WildProvider>
      <Head title="Log In" />
      <Content>
        <FeaturedCol>
          <FeaturedContainer>
            <FeaturedTitle>
              Hello! {loading ? "loading" : "not loading"}
            </FeaturedTitle>
            <FeaturedSubtitle>
              Don&apos;t you have an account yet?
            </FeaturedSubtitle>
            <FeaturedButton href={ROUTES.SIGN_UP} as={Link}>
              Create an account
            </FeaturedButton>
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
              <AuthForm onSubmit={onSubmit}>
                <FieldContainer>
                  <FieldLabel htmlFor="username">Identifiant</FieldLabel>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Email, Tel or Username"
                    onChange={onChange}
                  />
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                  />
                </FieldContainer>
                <ForgotPassword href={ROUTES.RECOVERY}>
                  Forgot Password?
                </ForgotPassword>
                <AuthButton>Log In</AuthButton>
              </AuthForm>
            </AuthContent>
          </AuthWrapper>
        </AuthCol>
      </Content>
    </WildProvider>
  );
};

export default SignIn;

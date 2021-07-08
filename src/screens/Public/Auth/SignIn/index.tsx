import React from "react";
import { useMutation } from "@apollo/client";

import Link from "@components/Main/Link";
import PublicProvider from "@components/Public/Provider";
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
} from "@components/Public/Layout/Auth";

import * as ROUTES from "@constants/routes";
import { useForm } from "@hooks/useForm";
import { AuthContext } from "@context/Auth";
import { LOGIN_USER } from "@queries/auth";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "@components/Main/Head";

const SignIn: NextPage = () => {
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
    <PublicProvider>
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
    </PublicProvider>
  );
};

export default SignIn;

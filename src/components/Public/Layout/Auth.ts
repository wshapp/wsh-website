import styled from "styled-components";

import { WshLogo } from "@components/Main/Layout/Icons";
import Link from "@components/Main/Link";
import { Button } from "@components/Main/Layout/Button";

export const Content = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeaturedCol = styled(Col)`
  width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    padding-bottom: 30px;
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.layout.darkest};
  }
`;

export const AuthContent = styled.div`
  margin-top: 70px;
  width: 100%;
  max-width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 30px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 30px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const HeaderDescription = styled.p`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const AuthForm = styled.form`
  padding: 50px 0 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 0;
  }
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.layout.lightest};
  padding: 10px 0;
  font-weight: $fontWeightBold;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.lightest};
  transition: all 0.2s;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.layout.lighter};
    color: ${({ theme }) => theme.colors.text.lightest};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const ForgotPassword = styled(Link)`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 13px;
`;

export const AuthButton = styled(Button)`
  margin-top: 20px;
`;

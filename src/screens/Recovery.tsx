import { useHistory } from "react-router-dom";

import Title from '../components/Title';
import Link from "../components/Link";
import * as ROUTES from "../constants/routes";
import { AuthButton, AuthCol, AuthContent, AuthForm, AuthWrapper, Content, FeaturedButton, FeaturedCol, FeaturedContainer, FeaturedSubtitle, FeaturedTitle, Field, FieldContainer, FieldLabel, ForgotPassword, HeaderContainer, HeaderDescription, HeaderTitle, Logo, LogoContainer, LogoTitle } from "../components/layout/Auth";

const Recovery: React.FC = () => {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(ROUTES.RECOVERY_CHANGE);
    }

    return (
        <>
            <Title title="Recovery" />
            <Content>
                <FeaturedCol>
                    <FeaturedContainer>
                        <FeaturedTitle>Hello!</FeaturedTitle>
                        <FeaturedSubtitle>Remember your password?</FeaturedSubtitle>
                        <FeaturedButton href={ROUTES.SIGN_IN} as={Link}>Log In</FeaturedButton>
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
                                <HeaderTitle>Password Recovery</HeaderTitle>
                                <HeaderDescription>Enter your email to recover your password</HeaderDescription>
                            </HeaderContainer>
                            <AuthForm onSubmit={handleSubmit}>
                                <FieldContainer>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Field type="text" id="email" placeholder="Email, Tel or Username" />
                                </FieldContainer>
                                <AuthButton>Send Email</AuthButton>
                            </AuthForm>
                        </AuthContent>
                    </AuthWrapper>
                </AuthCol>
            </Content>
        </>
    );
}

export default Recovery;
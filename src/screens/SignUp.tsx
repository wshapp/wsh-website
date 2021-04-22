import { NextPage } from 'next';

import Title from '@components/Title';
import Link from "@components/Link";
import * as ROUTES from "@constants/routes";
import { AuthButton, AuthCol, AuthContent, AuthForm, AuthWrapper, Content, FeaturedButton, FeaturedCol, FeaturedContainer, FeaturedSubtitle, FeaturedTitle, Field, FieldContainer, FieldLabel, HeaderContainer, HeaderDescription, HeaderTitle, Logo, LogoContainer, LogoTitle } from "@components/layout/Auth";
import WildProvider from '@components/WildProvider';

const SignUp: NextPage = () => {

    const handleDateBlur = (event) => {
        event.target.type = 'tel';
        var input = event.target.value;
        var values = input.split('/').map((v) => { return v.replace(/\D/g, '') });
        var output = '';
        if (values.length == 3) {
            var year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
            var month = parseInt(values[1]) - 1;
            var day = parseInt(values[0]);
            var d: any = new Date(year, month, day);
            if (!isNaN(d)) {
                console.log(d.toString());
                var dates = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
                output = dates.map(function (v) {
                    v = v.toString();
                    return v.length == 1 ? '0' + v : v;
                }).join(' / ');
            };
        };
        event.target.value = output;
    }

    const handleDateInput = (event) => {
        event.target.type = 'text';
        var input = event.target.value;
        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
        var values = input.split('/').map((v) => { return v.replace(/\D/g, '') });
        console.log(values);
        if (values[0]) values[0] = checkValue(values[0], 31);
        if (values[1]) values[1] = checkValue(values[1], 12);
        var output = values.map((v, i) => {
            return v.length == 2 && i < 2 ? v + ' / ' : v;
        });
        event.target.value = output.join('').substr(0, 14);
    }

    const checkValue = (str, max) => {
        if (str.charAt(0) !== "0" || str == "00") {
            var num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1;
            str =
                num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
                    ? "0" + num
                    : num.toString();
        }
        return str;
    }

    return (
        <WildProvider>
            <Title title="Register" />
            <Content>
                <FeaturedCol>
                    <FeaturedContainer>
                        <FeaturedTitle>Hello!</FeaturedTitle>
                        <FeaturedSubtitle>Already have an account?</FeaturedSubtitle>
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
                                <HeaderTitle>Create an account</HeaderTitle>
                                <HeaderDescription>Sign up to continue</HeaderDescription>
                            </HeaderContainer>
                            <AuthForm>
                                <FieldContainer>
                                    <FieldLabel>Name</FieldLabel>
                                    <Field type="text" id="name" placeholder="Name" />
                                </FieldContainer>
                                <FieldContainer>
                                    <FieldLabel>Username</FieldLabel>
                                    <Field type="text" id="username" placeholder="Username" />
                                </FieldContainer>
                                <FieldContainer>
                                    <FieldLabel>Birthdate</FieldLabel>
                                    <Field type="tel" id="birthdate" placeholder="dd / mm / yyyy" onBlur={handleDateBlur} onInput={handleDateInput} />
                                </FieldContainer>
                                <FieldContainer>
                                    <FieldLabel>Email</FieldLabel>
                                    <Field type="text" id="email" placeholder="Email, Tel or Username" />
                                </FieldContainer>
                                <FieldContainer>
                                    <FieldLabel>Password</FieldLabel>
                                    <Field type="password" id="password" placeholder="Password" />
                                </FieldContainer>
                                <FieldContainer>
                                    <FieldLabel>Alpha Key</FieldLabel>
                                    <Field type="text" id="accessKey" placeholder="Alpha Key" />
                                </FieldContainer>
                                <AuthButton>Create an account</AuthButton>
                            </AuthForm>
                        </AuthContent>
                    </AuthWrapper>
                </AuthCol>
            </Content>
        </WildProvider>
    );
}

export default SignUp;
import Link from "@components/Link";
import styled from "styled-components";
import * as ROUTES from "@constants/routes";

const Error = ({ statusCode }) => {
    return (
        <Container>
            <Title>Sorry, this page isn't available.</Title>
            <Description>The link you followed may be broken, or the page may have been removed. Go back to <Link href={ROUTES.LANDING}>wsh</Link>.</Description>
        </Container>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 24px;
`;

const Description = styled.h2`
    margin-top: 30px;

    a {
        color: ${props => props.theme.colors.accent.light};;
    }
`;

export default Error
import Head from 'next/head'
import styled from 'styled-components';
import Button from '@components/layout/Button';
import { themeType } from '@constants/themes';

export default function Home({ theme, setTheme }) {
    console.log(theme);
    return (
        <Container>
            <Head>
                <title>Create Next App { }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Hello Wold</h1>
            <Button onClick={() => {
                setTheme(themeType.black);
            }}>Noir</Button>
            <Button onClick={() => {
                setTheme(themeType.white);
            }}>Blanc</Button>
            <Button onClick={() => {
                setTheme(themeType.red);
            }}>Rouge</Button>
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
`;
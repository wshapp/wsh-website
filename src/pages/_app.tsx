import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import themes from '@services/themes';

import '@styles/app.scss';
import MainLayout from '@components/layout/MainLayout';
import { MainTrackProvider } from 'src/context/MainTrack';

const App = ({ Component, pageProps, router }: AppProps) => {

  let storedTheme;
  const [theme, setTheme] = React.useState(storedTheme ?? themes.black);

  React.useEffect(() => {
    storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainTrackProvider>
        <GlobalStyle />
        <MainLayout>
          <Component
            {...pageProps}
            router={router}
            theme={theme}
            setTheme={setTheme}
          />
        </MainLayout>
      </MainTrackProvider>
    </ThemeProvider >
  )
}

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
    background-color: ${props => props.theme.colors.background.primary};
  }

  body,
  input,
  button,
  textarea {
      font-family: "Poppins", -apple-system, sans-serif;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      color: ${props => props.theme.colors.text.primary};
  }

  a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
          color: rgba(255, 255, 255, 1);
      }
  }
`;

export default App
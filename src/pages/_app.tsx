import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { THEMES } from '@constants/themes';

import '@styles/app.scss';
import MainLayout from '@components/layout/MainLayout';

const App = ({ Component, pageProps, router }: AppProps) => {

  let storedTheme;
  const [theme, setTheme] = React.useState(storedTheme ?? THEMES.BLACK);

  React.useEffect(() => {
    storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Component
          {...pageProps}
          router={router}
          theme={theme}
          setTheme={setTheme}
        />
      </MainLayout>
    </ThemeProvider >
  )
}

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
      height: 100%;
  }

  body,
  input,
  button,
  textarea {
      font-family: "Poppins", -apple-system, sans-serif;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
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
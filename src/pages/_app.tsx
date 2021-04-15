import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import themes from '@services/themes';
import MainLayout from '@components/layout/MainLayout';
import GlobalStyle from '@components/layout/GlobalStyle';
import { MainTrackProvider } from '@context/MainTrack';

import 'remixicon/fonts/remixicon.css'
import '@styles/app.scss';

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

export default App
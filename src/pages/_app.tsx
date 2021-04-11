import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

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

export default App
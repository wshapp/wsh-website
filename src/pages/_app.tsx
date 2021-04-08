import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { themeType } from '@constants/themes';

import '@styles/app.scss';

const App = ({ Component, pageProps, router }: AppProps) => {


  let storedTheme;
  const [theme, setTheme] = React.useState(storedTheme ?? themeType.black);

  React.useEffect(() => {
    storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Component
        {...pageProps}
        router={router}
        theme={theme}
        setTheme={setTheme}
      />
    </ThemeProvider >
  )
}

export default App
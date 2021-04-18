import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from '@apollo/react-hooks';

import themes from "@services/themes";
import MainLayout from "@components/layout/MainLayout";
import GlobalStyle from "@components/layout/GlobalStyle";
import { MainTrackProvider } from "@context/MainTrack";
import { AuthProvider } from "@context/Auth";

import "remixicon/fonts/remixicon.css";
import "@styles/app.scss";
import withApollo, { apollo } from "@services/apollo/withApollo";

const App = ({ Component, pageProps, router }: AppProps) => {

  let storedTheme;
  const [theme, setTheme] = React.useState(storedTheme ?? themes.black);

  React.useEffect(() => {
    storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);
  }, []);

  return (
    // @ts-ignore
    <ApolloProvider client={apollo}>
      <AuthProvider>
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
      </AuthProvider>
    </ApolloProvider>
  )
}

export default withApollo(App);
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

import themes from "@services/themes";

import Main from "@components/Main/Layout/Main";
import GlobalStyle from "@components/Main/Layout/GlobalStyle";
import { MainTrackProvider } from "@context/MainTrack";
import { AuthProvider } from "@context/Auth";
import withApollo, { apollo } from "@services/apollo/client";

import "remixicon/fonts/remixicon.css";
import Head from "@components/Main/Head";

const App = ({ Component, pageProps }: AppProps) => {
  let storedTheme;
  const [theme, setTheme] = React.useState(storedTheme ?? themes.black);

  React.useEffect(() => {
    storedTheme = localStorage.getItem("theme");
    console.log(storedTheme);
  }, [storedTheme]);

  return (
    <ApolloProvider client={apollo}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Head />
          <GlobalStyle />
          <MainTrackProvider>
            <Main>
              <Component {...pageProps} theme={theme} setTheme={setTheme} />
            </Main>
          </MainTrackProvider>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default withApollo(App);

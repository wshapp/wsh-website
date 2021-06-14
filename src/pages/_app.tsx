import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

import themes from "@services/themes";
import Head from "@components/Head";
import MainLayout from "@components/layout/MainLayout";
import GlobalStyle from "@components/layout/GlobalStyle";
import { MainTrackProvider } from "@context/MainTrack";
import { AuthProvider } from "@context/Auth";
import withApollo, { apollo } from "@services/apollo/client";

import "remixicon/fonts/remixicon.css";

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
            <MainLayout>
              <Component {...pageProps} theme={theme} setTheme={setTheme} />
            </MainLayout>
          </MainTrackProvider>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default withApollo(App);
